import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './Stores/Store'

import TodoList from './Components/TodoList'
import AddTodoForm from './Components/AddTodoForm'
import Timer from './Components/Timer'
import CountDown from './Components/CountDown'
 
render(
  <Provider store={store}>
    <div>
      <h1>Todo</h1>
      <AddTodoForm />
      <TodoList />
      <h1>Timer</h1>
      <Timer/>
      <h1>CountDown</h1>
      <CountDown/>
    </div>
  </Provider>,
  document.getElementById('root')
);