export const TODO_ACTION_TYPE = {
  GET: 'GET',
  POST: 'POST',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPE.GET:
      return [...action.todo];
    case TODO_ACTION_TYPE.POST:
      return [...state, action.todo];
    case TODO_ACTION_TYPE.UPDATE:
      return state.map((todo) =>
        todo.id === action.id ? { ...action.todo } : todo,
      );
    case TODO_ACTION_TYPE.DELETE:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};
