export type countDownType = {
  status: boolean,
  time: number,
  countDown: number
}

let defaultState:countDownType = {
  status: false,
  time: 0, 
  countDown: 0
}

export const countDownReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INIT_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.countDown = action.time;
      newState.time = action.time;
      newState.status = true;
      return newState;
    case 'TRASH_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.countDown = 0;
      newState.time = 0;
      return newState;
    case 'RESET_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.time = state.countDown;
      return newState;
    case 'START_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.status = true;
      return newState;
    case 'UPDATE_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.time = action.time;
      return newState;
    case 'STOP_COUNTDOWN':
      var newState = Object.assign({}, state);
      newState.status = false;
      return newState;
    default:
      return state;
  }
}

