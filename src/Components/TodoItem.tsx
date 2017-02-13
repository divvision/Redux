import * as React from 'react';
import {render} from 'react-dom';
import {completeTodo, deleteTodo} from '../Actions/Todo'
import store from '../Stores/Store'

interface Props {
    key: number
    index: number
    message: string
    completed: boolean
}

class TodoItem extends React.Component<Props, {}> {
  onDeleteClick() {
    store.dispatch(deleteTodo(this.props.index));
  }
 
  onCompletedClick() {
    store.dispatch(completeTodo(this.props.index));
  }
 
  render() {
    return (
      <li>
        <a href="#" onClick={this.onCompletedClick.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.message.trim()}</a> 
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}

export default TodoItem