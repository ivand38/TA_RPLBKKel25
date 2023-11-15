import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export function useLogin() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  console.log(auth);
  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
