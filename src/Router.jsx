import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authContext } from './context/AuthProvider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

const Router = () => {
  const {
    state: { token },
  } = useContext(authContext);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={token ? <Navigate to="/todo" replace /> : <SignIn />}
      />
      <Route
        path="/signin"
        element={token ? <Navigate to="/todo" replace /> : <SignIn />}
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/todo" replace /> : <SignUp />}
      />
      <Route
        path="/todo"
        element={token ? <Todo /> : <Navigate to="/signin" replace />}
      />
      <Route
        path="*"
        element={token ? <Todo /> : <Navigate to="/signin" replace />}
      />
    </Routes>
  );
};

export default Router;
