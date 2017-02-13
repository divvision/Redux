import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux'
import {startCountDown, updateCountDown, stopCountDown, initCountDown, resetCountDown, trashCountDown} from '../Actions/CountDown'
import Store from '../Stores/Store'

class CountDown extends React.Component<{}, {}> {
  state = {
    status: false,
    time: 0,
    countDown: 0
  };

  interval:number

  inputCountDown:HTMLInputElement
 
  componentWillMount() {
    Store.subscribe(() => {
      var state = Store.getState();
      this.setState({
        status: state.countDown.status,
        time: state.countDown.time,
        countDown: state.countDown.countDown
      });
    });
  }

  start = () => {
    if(!this.state.countDown){
      let time = this.inputCountDown.value
      if(!time) return
      Store.dispatch(initCountDown(parseInt(time)))
    } else {
      Store.dispatch(startCountDown())
    }

    this.interval = setInterval(() => {
      Store.dispatch(updateCountDown(this.state.time - 1))
    }, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
    Store.dispatch(stopCountDown())
  }
 
  render(){
    let time = this.state.time
    return ( 
      <div>
        <div>{time}</div>
        <div>
          {!this.state.status &&
            <input type="submit" value="start" onClick={(event) => {
              event.preventDefault()
              this.start()
            }}/>
          }
          {this.state.status &&
            <input type="submit" value="stop" onClick={(event) => {
              event.preventDefault()
              this.stop()
            }}/>
          }
          {!this.state.countDown &&
            <input type="text" placeholder="Time" ref={(input) => {this.inputCountDown = input}}/>
          }
          {this.state.countDown > 0 &&
            <div>
              <input type="submit" value="reset" onClick={(event) => {
                event.preventDefault()
                Store.dispatch(resetCountDown())
              }}/>
              <input type="submit" value="trash" onClick={(event) => {
              event.preventDefault()
                  this.stop()
                  Store.dispatch(trashCountDown())
              }}/>
            </div>  
          }
        </div>
      </div>
    )
  }

}

export default CountDown