export const startTimer = () => {
  return {
    type: 'START_TIMER',
  };
}

export const stopTimer = () => {
  return {
    type: 'STOP_TIMER'
  };
}

export const updateTimer = (time:number) => {
  return {
    type: 'UPDATE_TIME',
    time: time
  };
}
 

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER'
  };
}
