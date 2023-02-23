import { useState } from 'react';
import styled from 'styled-components';
import { createTodo } from '../../apis/todo';
import { TODO_ACTION_TYPE } from '../../constant/actionTypes';
import Button from '../common/Button';

const TodoForm = ({ dispatch }) => {
  const [todoTitle, setTodoTitle] = useState('');

  // todo 생성
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createTodo(todoTitle);
    if (res.status === 201) {
      dispatch({ type: TODO_ACTION_TYPE.POST, todo: res.data });
      setTodoTitle('');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={todoTitle}
        autoFocus
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="할 일을 입력해 주세요."
        data-testid="new-todo-input"
      />
      <Button
        type="submit"
        disabled={todoTitle.length < 1}
        data-testid="new-todo-add-button"
      >
        제출
      </Button>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  font-size: 16px;
`;
