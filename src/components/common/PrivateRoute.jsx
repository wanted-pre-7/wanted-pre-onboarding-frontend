import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const {
    state: { token },
  } = useContext(authContext);

  return token ? children : <Navigate to="/signin" />;
};
export default PrivateRoute;
