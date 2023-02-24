import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const PublicRoute = ({ children }) => {
  const {
    state: { token },
  } = useContext(authContext);

  return token ? <Navigate to="/todo" /> : children;
};
export default PublicRoute;
