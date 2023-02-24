import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../../api/todo';
import { TODO_ACTION_TYPE } from '../../reducer/todoReducer';
import List from './List';

const Lists = ({ todos, dispatch }) => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getTodos();
      if (res.status === 200) {
        dispatch({ type: TODO_ACTION_TYPE.GET, todo: res.data });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <List key={todo.id} todo={todo} dispatch={dispatch} />
          ))
        ) : (
          <H4>할 일을 추가해 보세요!</H4>
        )}
      </ul>
    </div>
  );
};

const H4 = styled.h4`
  text-align: center;
`;

export default memo(Lists);
