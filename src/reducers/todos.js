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

previousState, action) => newState

*/

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, //spread everything in the current state
        
        // add the new below state
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      // find the id in the action, toggle the completed state for that todo item
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
      //default state, do nothing. This is important
    default:
      return state
  }
}

export default todos