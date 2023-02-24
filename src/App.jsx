import AuthProvider from './context/AuthProvider';
import Globalstyles from './Globalstyles';
import Router from './Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
      <Globalstyles />
    </AuthProvider>
  );
};

export default App;
