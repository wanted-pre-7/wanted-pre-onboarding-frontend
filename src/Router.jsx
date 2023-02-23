import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import TodoProvider from './context/TodoProvider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import { authContext } from './context/AuthProvider';

const Router = () => {
  const {
    state: { token },
  } = useContext(authContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={token ? <Navigate to="/todo" replace /> : <SignIn />}
          />
          <Route
            path="signin"
            element={token ? <Navigate to="/todo" replace /> : <SignIn />}
          />
          <Route
            path="signup"
            element={token ? <Navigate to="/todo" replace /> : <SignUp />}
          />
          <Route
            path="todo"
            element={
              token ? (
                <TodoProvider>
                  <Todo />
                </TodoProvider>
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
