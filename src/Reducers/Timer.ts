export type timerType = {
  status: boolean,
  time: number,
}

let defaultState:timerType = {
  status: false,
  time: 0,
}

let timerInterval

export const timerMiddleware = store => next => action => {
  if (action.type === 'START_TIMER') {
    timerInterval = setInterval(() => {
      let state = store.getState()
      store.dispatch({ type: 'UPDATE_TIMER', time: state.timer.time + 1 })
    }, 1000);
  } else if (action.type === 'STOP_TIMER') {
    clearInterval(timerInterval);
  } else if (action.type === 'RESET_TIMER') {
    store.dispatch({ type: 'UPDATE_TIMER', time: 0 })
  }
  next(action);
};


export let timerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      var newState = Object.assign({}, state);
      newState.status = true;
      return newState;
    case 'UPDATE_TIMER':
      var newState = Object.assign({}, state);
      newState.time = action.time;
      return newState;
    case 'STOP_TIMER':
      var newState = Object.assign({}, state);
      newState.status = false;
      return newState;
    default:
      return state;
  }
}
