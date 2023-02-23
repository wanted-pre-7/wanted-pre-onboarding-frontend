const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODO':
      return [...action.todo];
    case 'POST_TODO':
      return [...state, action.todo];
    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...action.todo } : todo,
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
