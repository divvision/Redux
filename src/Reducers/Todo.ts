export type todoType = {
  items: Array<{
    message:string,
    completed: boolean
  }>
}

let defaultState:todoType = {
  items: []
}

export let todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var newState = Object.assign({}, state);
 
      newState.items.push({
        message: action.message,
        completed: false
      });
 
      return newState;
 
    case 'COMPLETE_TODO':
      var newState = Object.assign({}, state);
 
      newState.items[action.index].completed = true;
 
      return newState;
 
    case 'DELETE_TODO':
      var items = state.items;
      items.splice(action.index, 1);
 
      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });
 
    case 'CLEAR_TODO':
      return Object.assign({}, state, {
          items: []
      });
 
    default:
      return state;
  }
}
