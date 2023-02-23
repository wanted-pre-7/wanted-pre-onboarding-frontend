import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';
import Heading from '../../components/common/Heading';
import { signIn, signUp } from '../../api/auth';
import { authContext, AUTH_ACTION } from '../../context/AuthProvider';

const SignIn = () => {
  const { dispatch } = useContext(authContext);
  const location = useLocation();
  const authMode = location.pathname;
  const navigate = useNavigate();
  const initialFormUser = { email: '', password: '' };
  const [formUser, setFormUser] = useState(initialFormUser);
  const [formError, setFormError] = useState(initialFormUser);
  const [isValidButton, setIsValidButton] = useState(true);
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const isValidForm = ({ email, password }) => {
    const error = { email: '', password: '' };
    if (!email.includes('@')) {
      error.email = '이메일 형식은 ___@___입니다';
    }
    if (password.length < 8) {
      error.password = '비밀번호는 8글자 이상이여야 합니다';
    }
    return error;
  };

  useEffect(() => {
    const error = isValidForm(formUser);
    setFormError(error);
    if (
      Object.values(error).every((msg) => msg.length === 0) &&
      formUser.email !== '' &&
      formUser.password !== ''
    ) {
      setIsValidButton(false);
    } else {
      setIsValidButton(true);
    }
  }, [formUser]);

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocus({
      ...focus,
      [name]: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authMode === '/signin') {
      const res = await signIn(formUser);

      if (res.status === 200) {
        dispatch({
          type: AUTH_ACTION.SET_TOKEN,
          token: res.data.access_token,
        });
        setFormUser({ email: '', password: '' });
        navigate('/todo');
      }
    }

    if (authMode === '/signup') {
      const res = await signUp(formUser);

      if (res.status === 201) {
        setFormUser({ email: '', password: '' });
        navigate('/signin');
      }
    }
  };

  return (
    <>
      <S.Header>
        <Heading title={location.pathname.replace('/', '')} />
      </S.Header>
      <AuthForm
        mode={location.pathname}
        handleFocus={handleFocus}
        handleSubmit={handleSubmit}
        formUser={formUser}
        setFormUser={setFormUser}
        formError={formError}
        isValidButton={isValidButton}
      />
    </>
  );
};

const S = {};
S.Header = styled.header`
  margin-bottom: 20px;
`;

export default SignIn;
