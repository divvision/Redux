import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux'
import {startTimer, updateTimer, stopTimer, resetTimer} from '../Actions/Timer'
import Store from '../Stores/Store'

class Timer extends React.Component<{}, {}> {
  state = {
    status: false,
    time: 0
  };
 
  componentWillMount() {
    Store.subscribe(() => {
      var state = Store.getState();
      this.setState({
        status: state.timer.status,
        time: state.timer.time
      });
    });
  }

  render(){
    let time = this.state.time
    return ( 
      <div>
        <div>{time}</div>
        <div>
          {!this.state.status &&
            <input type="submit" value="start timer" onClick={(event) => {
              event.preventDefault()
              Store.dispatch(startTimer())
            }}/>
          }
          {this.state.status &&
              <input type="submit" value="stop timer" onClick={(event) => {
                event.preventDefault()
                Store.dispatch(stopTimer())
              }}/>
          }
          {this.state.time > 0 &&
              <input type="submit" value="reset timer" onClick={(event) => {
                event.preventDefault()
                Store.dispatch(resetTimer())
              }}/>
          }
        </div>
      </div>
    )
  }

}

export default Timer