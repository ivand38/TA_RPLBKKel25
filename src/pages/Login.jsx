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

  const showPassword = () => {
    setShowPass(!showPass);
  };

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
        <div>
          <h2>Login</h2>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              value={formData.username}
              onChange={(event) =>
                setFormData({ ...formData, username: event.target.value })
              }
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
