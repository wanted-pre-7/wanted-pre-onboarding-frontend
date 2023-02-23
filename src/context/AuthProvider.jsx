import { createContext, useMemo, useReducer } from "react";

export const authContext = createContext();

export const AUTH_ACTION = {
  SET_TOKEN: "SET_TOKEN",
  RESET_TOKEN: "RESET_TOKEN",
};

const initialState = {
  token: localStorage.getItem("accessToken") || "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.SET_TOKEN:
      localStorage.setItem("accessToken", action.token);
      return { ...state, token: action.token };
    case AUTH_ACTION.RESET_TOKEN:
      localStorage.removeItem("accessToken");
      return { ...state, token: "" };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
export default AuthProvider;
