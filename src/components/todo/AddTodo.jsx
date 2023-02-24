import { useState } from 'react';
import styled from 'styled-components';
import { createTodo } from '../../api/todo';
import Button from '../common/Button';
import { TODO_ACTION_TYPE } from '../../constant/todoConstant';

const AddTodo = ({ todoDispatch }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isTodoValid = todoTitle.trim().length > 0;
    if (isTodoValid) {
      const res = await createTodo(todoTitle);
      if (res.status === 201) {
        todoDispatch({ type: TODO_ACTION_TYPE.POST, todo: res.data });
        setTodoTitle('');
      }
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

const Form = styled.form`
  display: flex;
  gap: 16px;
  padding-top: 16px;
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

export default AddTodo;
