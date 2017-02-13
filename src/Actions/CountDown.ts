export const initCountDown = (time:number) => {
  return {
    type: 'INIT_COUNTDOWN',
    time: time
  };
}

export const resetCountDown = () => {
  return {
    type: 'RESET_COUNTDOWN'
  };
}

export const trashCountDown = () => {
  return {
    type: 'TRASH_COUNTDOWN'
  };
}

export const startCountDown = () => {
  return {
    type: 'START_COUNTDOWN'
  };
}

export const stopCountDown = () => {
  return {
    type: 'STOP_COUNTDOWN'
  };
}

export const updateCountDown = (time:number) => {
  return {
    type: 'UPDATE_COUNTDOWN',
    time: time
  };
}
