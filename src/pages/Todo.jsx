import { useContext, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import Lists from '../components/todo/Lists';
import AddTodo from '../components/todo/AddTodo';
import { TODO_ACTION_TYPE } from '../constant/todoConstant';
import { authContext, AUTH_ACTION } from '../context/AuthProvider';
import { getTodos } from '../api/todo';

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
  const [todos, dispatch] = useReducer(reducer, initialState);

  const fetchTodoList = async () => {
    const res = await getTodos();
    if (res) dispatch({ type: TODO_ACTION_TYPE.GET, todo: res.data });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const { dispatch: authDispatch } = useContext(authContext);

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
      <Lists todos={todos} todoDispatch={dispatch} />
      <AddTodo todoDispatch={dispatch} />
    </div>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default Todo;
