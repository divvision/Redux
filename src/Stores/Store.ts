import { createStore, combineReducers, applyMiddleware  } from 'redux';

import * as todo from '../Reducers/Todo'
import * as timer from '../Reducers/Timer'
import * as countDown from '../Reducers/CountDown'

export interface IStoreState{
  todo: todo.todoType
  timer: timer.timerType,
  countDown: countDown.countDownType
}

let store =  createStore(
  combineReducers<IStoreState>({
    todo: todo.todoReducer,
    timer: timer.timerReducer,
    countDown: countDown.countDownReducer
  }), applyMiddleware(
   timer.timerMiddleware
  )
);



export default store