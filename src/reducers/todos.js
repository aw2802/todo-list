const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      console.log("deleting");
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case 'COMPLETED':
      console.log("compleetttttedd");
      return [
         ...state.slice(0, action.index),
         {...state[action.index], completed: true},
         ...state.slice(action.index + 1)       
      ]
    default:
      return state;
  }
}

export default todos;
