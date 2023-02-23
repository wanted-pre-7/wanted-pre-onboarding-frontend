import { createContext, useMemo, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const isTokenExist = !!localStorage.getItem('accessToken');
  const [token, setToken] = useState(isTokenExist);

  const value = useMemo(() => ({ token, setToken }), [token, setToken]);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
export default AuthProvider;
