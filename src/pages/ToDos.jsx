import { useContext, useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { createTodo, getTodos } from '../api/todo';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import Item from '../components/todo/Item';

import { authContext, AUTH_ACTION } from '../context/AuthProvider';
import { reducer, TODO_ACTION_TYPE } from '../reducer';

const Todos = () => {
  const { dispatch: authDispatch } = useContext(authContext);
  const [todoTitle, setTodoTitle] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  // 추가 예외 처리
  const isAddValid = todoTitle.trim().length > 0;

  // 목록 불러오기 함수
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTodos();
      if (res.status === 200) {
        dispatch({ type: TODO_ACTION_TYPE.GET, todo: res.data });
      }
    };

    fetchData();
  }, []);

  // 목록 추가 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createTodo(todoTitle);
    if (res.status === 201) {
      dispatch({ type: TODO_ACTION_TYPE.POST, todo: res.data });
      setTodoTitle('');
    }
  };

  const handleClickLogOut = () => {
    authDispatch({
      type: AUTH_ACTION.RESET_TOKEN,
    });
  };

  return (
    <div>
      <Header>
        <Heading title="Todo ✔️" />
        <Button type="button" onClick={handleClickLogOut}>
          로그아웃
        </Button>
      </Header>
      <div>
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Item key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          ) : (
            <H4>할 일을 추가해 보세요!</H4>
          )}
        </ul>
      </div>
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
          disabled={!isAddValid}
          data-testid="new-todo-add-button"
        >
          제출
        </Button>
      </Form>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

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

const H4 = styled.h4`
  text-align: center;
`;

export default Todos;
