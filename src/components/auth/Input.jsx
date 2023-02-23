import styled from 'styled-components';

const Input = ({ type, placeholder, id, formUser, setFormUser }) => {
  console.log('formUser: ', formUser);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  return (
    <S.Input
      type={type}
      id={id}
      placeholder={placeholder}
      name={id}
      onChange={onChange}
      value={formUser[id]}
      data-testid={`${id}-input`}
    />
  );
};

const S = {};
S.Input = styled.input`
  padding: 8px;
  border: 1px solid #777;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #555;
  }
`;

export default Input;
