변경한 것들

### 1. SignIn, SignUp을 Auth로 통합하고 State와 EventHandler 로직을 pages안에 Component에서 담당(Auth만)
- 기존 구조였던 common Components가 아니라면 State와 EventHandler도 Components 폴더에 있는 컴포넌트가 담당하는 로직 또한 타당한 이유가 있는 것 같아 Auth 부분만 전체 로직을 pages에서 담당하도록 구현하였습니다.

### 2. Styled 관리
- Styled로 만든 컴포넌트와 Custom으로 만든 컴포넌트를 구분하였습니다.

```
//styled-components
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
...
```

```
//구분 예시
 <S.ActionWrapper>
        <Button
          type="submit"
          disabled={isValidButton}
          data-testid={`${mode}-button`}
        >
          {BUTTON_TEXT}
        </Button>
        <ActionLink question={QUESTION} to={ACTION_LINK} text={ACTION_TEXT} />
      </S.ActionWrapper>
```
      
