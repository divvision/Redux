import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux'
import {addTodo} from '../Actions/Todo'
import Store from '../Stores/Store'

let AddTodoForm = () => {
  let input 
  return ( 
      <form onSubmit={(event) => {
        event.preventDefault()
        if (!input.value.trim()) {
          return
        }
        Store.dispatch(addTodo(input.value))
        input.value = ''
      }}>
          <input type="text" placeholder="Todo..." ref={node => {
            input = node
          }} />
          <input type="submit" value="Add" />
      </form>
  )
}
AddTodoForm = connect()(AddTodoForm)

export default AddTodoForm