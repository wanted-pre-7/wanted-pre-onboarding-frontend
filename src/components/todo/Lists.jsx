import styled from 'styled-components';

import List from './List';

const Lists = ({ todos, todoDispatch }) => {
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <List key={todo.id} todo={todo} todoDispatch={todoDispatch} />
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

export default Lists;
