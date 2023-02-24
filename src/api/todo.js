import { client } from './instance';

// todo api
export const getTodos = async () => {
  return client('/todos');
};

export const createTodo = async (todo) => {
  return client.post('/todos', { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  return client.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return client.delete(`/todos/${id}`);
};
