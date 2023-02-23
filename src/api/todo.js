import axiosInstance from './instance';

export const getTodos = async () => {
  return axiosInstance.get('/todos');
};

export const createTodo = async (todo) => {
  return axiosInstance.post('/todos', { todo });
};

export const updateTodo = async (id, todo, isCompleted) => {
  return axiosInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return axiosInstance.delete(`/todos/${id}`);
};
