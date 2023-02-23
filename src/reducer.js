const reducer = (state, action) => {
  switch (action.type) {
    case 'TODO_GET':
      return [...action.todo];
    case 'TODO_POST':
      return [...state, action.todo];
    case 'TODO_UPDATE':
      return state.map((todo) =>
        todo.id === action.id ? { ...action.todo } : todo,
      );
    case 'TODO_DELETE':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
