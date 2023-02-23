import { client } from './instance';

/** 투두 목록 조회 */
export const getTodos = async () => {
  return client('/todos');
};

/** 투두 생성 */
export const createTodo = async (todo) => {
  return client.post('/todos', { todo });
};

/** 투두 수정 */
export const updateTodo = async (id, todo, isCompleted) => {
  return client.put(`/todos/${id}`, { todo, isCompleted });
};

/** 투두 삭제 */
export const deleteTodo = async (id) => {
  return client.delete(`/todos/${id}`);
};
