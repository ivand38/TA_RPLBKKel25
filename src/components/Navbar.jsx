import * as React from "react";
import { AppBar, Box, Button,Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/UserContext";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { setAuth, Auth } = useLogin();
  const handleLogout = () => {
    setAuth(null);
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1, position: "static" }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" onClick={() => handleLogout()} color="error" size="small" style={{marginLeft: "1rem", marginRight: "1rem"}}>
              Logout
            </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick & Morty
          </Typography>

          <div style={{ display: "flex" }}>
            <Link to="/">Character</Link>
            <Link
              to="/location"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              Location
            </Link>
            <Link to="/episode" style={{ marginLeft: "1rem", marginRight: "1rem" }}>Episode</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
