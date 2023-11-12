import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: "static" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick & Morty
          </Typography>

          <div style={{ display: "flex" }}>
            <a href="/">Character</a>
            <a
              href="/Location"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              Location
            </a>
            <a href="/Episode">Episode</a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
