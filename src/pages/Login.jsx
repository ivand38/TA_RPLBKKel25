import React, { useState } from "react";
import "./Login.css";
import { useLogin } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // const res = await axios.post("https://localhost:7192/login", formData, {
      //   headers: { "Content-Type": "application/json" },
      // });
      // const id = res.data.id;
      // const username = res.data.username;
      setAuth({ username: "farhan" });
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <h2>Login</h2>
        <form>
          <label>
            Username
            <input
              type="text"
              value={formData.username}
              onChange={(event) =>
                setFormData({ ...formData, username: event.target.value })
              }
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
