import React, { useState } from "react";
import "./Login.css";
import { useLogin } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rickandmorty from "../assets/images.jpeg";
import { Button, TextField } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const { setAuth, Auth } = useLogin();
  const navigate = useNavigate();
  const formRef = React.createRef();

  const showPassword = () => {
    setShowPass(!showPass);
  };
  
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5246/login", formData, {
        headers: { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" },
      });
      const id = res.data.Id;
      const username = res.data.Username;
      setAuth({ id, username});
      navigate("/");
      localStorage.setItem("username", res.data.Username);
      localStorage.setItem("password", formData.password);
    } catch {
      console.log("error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Submit the form when Enter key is pressed
      handleLogin();
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <div>
          <h2>Login</h2>
          <form ref={formRef}>
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              value={formData.username}
              onChange={(event) =>
                setFormData({ ...formData, username: event.target.value })
              }
              onKeyDown={handleKeyPress}
            />
            <br />
            <TextField
              label="Password"
              variant="outlined"
              type={showPass ? "text" : "password"}
              size="small"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              onKeyDown={handleKeyPress}
            />
            <div style={{ alignSelf: "start" }}>
              <input
                id="showPassword"
                type="checkbox"
                checked={showPass}
                onChange={showPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
            <br />
            <Button variant="outlined" onClick={handleLogin} fullWidth>
              Login
            </Button>
          </form>
        </div>
        <div className="image">
          <img src={rickandmorty} />
        </div>
      </div>
    </div>
  );
}

export default Login;
