import { createContext, useState, useContext, useEffect } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext();

export function useLogin() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  console.log(auth);
  const value = { auth, setAuth };
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (username && password) {
      fetch ("http://localhost:5246/login", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
          "username": username,
          "password": password
       }),
   })
    }
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
