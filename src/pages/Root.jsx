import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthProvider';

const Root = () => {
  const {
    state: { token },
  } = useContext(authContext);

  return token ? <Navigate to="todo" /> : <Navigate to="signin" />;
};
export default Root;
