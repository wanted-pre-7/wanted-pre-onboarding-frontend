import { useCallback, useContext, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Heading from '../../components/common/Heading';
import Lists from '../../components/todo/Lists';
import TodoForm from '../../components/todo/TodoForm';
import { AUTH_ACTION, TODO_ACTION_TYPE } from '../../constant/actionTypes';
import { authContext } from '../../context/AuthProvider';

const initialState = [];

const reducer = (state, action) => {
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

const Todo = () => {
  const { dispatch: authDispatch } = useContext(authContext);
  const [todos, dispatch] = useReducer(reducer, initialState);

  // 로그아웃
  const handleClickLogOut = useCallback(() => {
    authDispatch({
      type: AUTH_ACTION.RESET_TOKEN,
    });
  }, []);

  return (
    <Wrapper>
      <Header>
        <Heading title="Todo ✔️" />
        <TodoForm dispatch={dispatch} />
        <Button onClick={handleClickLogOut}>로그아웃</Button>
      </Header>
      <Lists dispatch={dispatch} todos={todos} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default Todo;
