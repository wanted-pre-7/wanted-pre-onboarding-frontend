import Globalstyle from './globalStyle';
import AuthProvider from './context/AuthProvider';
import Router from './Router';

const App = () => {
  return (
    <AuthProvider>
      <Globalstyle />
      <Router />
    </AuthProvider>
  );
};

export default App;
