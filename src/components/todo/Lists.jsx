import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../../apis/todo';
import { TODO_ACTION_TYPE } from '../../constant/actionTypes';

import List from './List';

const Lists = ({ dispatch, todos }) => {
  // 마운트 되었을 때 todo 목록을 조회하여 todos에 할당
  useEffect(() => {
    (async () => {
      const res = await getTodos();
      if (res.status === 200) {
        dispatch({ type: TODO_ACTION_TYPE.GET, todo: res.data });
      }
    })();
  }, []);

  return (
    <div>
      <ul>
        {todos?.length > 0 ? (
          todos?.map((todo) => (
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
