import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/*

State:

{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

(previousState, action) => newState

*/

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp