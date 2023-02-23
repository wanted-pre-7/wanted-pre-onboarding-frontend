import { useState } from 'react';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../../api/todo';
import { TODO_ACTION_TYPE } from '../../context/TodoProvider';

const List = ({ todo: { todo, id, isCompleted }, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo);

  const handleChange = (e) => setEditedTitle(e.target.value);
  const handleEditClick = () => setIsEditing((prev) => !prev);

  const handleCheckBox = async (id, title, isCompleted) => {
    const res = await updateTodo(id, title, !isCompleted);

    if (res.status === 200) {
      dispatch({
        type: TODO_ACTION_TYPE.UPDATE,
        id,
        todo: res.data,
      });
    }
  };

  const handleUpdate = async (id, title, isCompleted) => {
    try {
      const res = await updateTodo(id, title, isCompleted);

      if (res.status === 200) {
        dispatch({
          type: TODO_ACTION_TYPE.UPDATE,
          id,
          todo: res.data,
        });
      }

      setIsEditing(false);
    } catch (error) {
      alert('내용을 확인해 주세요.');
    }
  };

  const handleClickDelete = async (id) => {
    const res = await deleteTodo(id);

    if (res.status === 204) {
      dispatch({ type: TODO_ACTION_TYPE.DELETE, id });
    }
  };

  if (isEditing) {
    return (
      <S.TodoList>
        <div>
          <S.TextInput
            type="text"
            value={editedTitle}
            onChange={handleChange}
            autoFocus
            data-testid="modify-input"
          />
        </div>
        <S.ButtonWrapper>
          <S.Button
            type="button"
            onClick={() => handleUpdate(id, editedTitle, isCompleted)}
            data-testid="submit-button"
          >
            ✔️
          </S.Button>
          <S.Button
            type="button"
            onClick={handleEditClick}
            data-testid="cancel-button"
          >
            ❌
          </S.Button>
        </S.ButtonWrapper>
      </S.TodoList>
    );
  }

  return (
    <S.TodoList>
      <S.CheckInputWrapper>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckBox(id, editedTitle, isCompleted)}
        />
        <S.TodoTitle isCompleted={isCompleted}>{todo}</S.TodoTitle>
      </S.CheckInputWrapper>
      <S.ButtonWrapper>
        <S.Button
          type="button"
          onClick={handleEditClick}
          data-testid="modify-button"
        >
          📝
        </S.Button>
        <S.Button
          type="button"
          onClick={() => handleClickDelete(id)}
          data-testid="delete-button"
        >
          ❌
        </S.Button>
      </S.ButtonWrapper>
    </S.TodoList>
  );
};

const S = {};
S.TodoList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 8px;
  padding: 8px 16px;
  margin: 0 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #f3f4f6;
  color: #4b5563;
  margin: 8px 0;
`;

S.CheckInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type='checkbox'] {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 2px solid #9ca3af;
    border-radius: 2px;
  }
`;

S.TodoTitle = styled.span`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`;

S.TextInput = styled.input`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #9ca3af;
  color: #4b5563;
  font-size: 16px;
  width: 80%;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

S.Button = styled.button`
  padding: 8px;
  font-size: 16px;
`;

export default List;
