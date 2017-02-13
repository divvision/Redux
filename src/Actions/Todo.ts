export const addTodo = (message:string) => {
  return {
    type: 'ADD_TODO',
    message: message,
    completed: false
  };
}

export const completeTodo = (index:number) => {
  return {
    type: 'COMPLETE_TODO',
    index: index
  };
}
 
export const deleteTodo = (index:number) => {
  return {
    type: 'DELETE_TODO',
    index: index
  };
}
 
export const clearTodo = () => {
  return {
    type: 'CLEAR_TODO'
  };
}