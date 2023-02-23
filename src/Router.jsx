import { useContext } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { authContext } from './context/AuthProvider';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import Layout from './components/common/Layout';

const Router = () => {
  const {
    state: { token },
  } = useContext(authContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/signin"
            element={token ? <Navigate to="/todo" replace /> : <Auth />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/todo" replace /> : <Auth />}
          />
          <Route
            path="/todo"
            element={token ? <Todo /> : <Navigate to="/signin" replace />}
          />
          <Route
            path="*"
            element={token ? <Todo /> : <Navigate to="/signin" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
