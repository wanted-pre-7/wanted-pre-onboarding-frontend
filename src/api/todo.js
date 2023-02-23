import axiosInstance from './instance';

export const createTodo = (todo) => axiosInstance.post('/todos', { todo });

export const getTodos = () => axiosInstance.get('/todos');

export const updateTodo = (id, todo, isCompleted) =>
  axiosInstance.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });

export const deleteTodo = (id) => axiosInstance.delete(`/todos/${id}`);
