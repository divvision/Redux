import * as React from 'react';
import {render} from 'react-dom';
import store from '../Stores/Store';

import TodoItem from './TodoItem';

class TodoList extends React.Component<{}, {}> {
  state = {
    items: []
  };
 
  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.items
      });
    });
  }
 
  render() {
    var items = [];
 
    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
      />);
    });
 
    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }
 
    return (
      <ol>{ items }</ol>
    );
  }
}

export default TodoList