const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("addinnnngg nooww");
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case 'DELETE_TODO':
      return state;
    default:
      return state;
  }
}

export default todos;
