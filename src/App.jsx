import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { CharProvider } from "./contexts/CharacterContext";
import Character from "./pages/Character";
import Location from "./pages/Location";
import ButtonAppBar from "./components/Navbar";
import { LocProvider } from "./contexts/LocationContext";
import Episode from "./pages/Episode";
import { EpisodeProvider } from "./contexts/EpisodeContext";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/UserContext";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CharProvider>
            <LocProvider>
              <EpisodeProvider>
                <Routes>
                  <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<Login />}></Route>
                  </Route>
                </Routes>

                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route path="/" exact element={<Character />}></Route>
                    <Route
                      path="/Location"
                      exact
                      element={<Location />}
                    ></Route>
                    <Route path="/Episode" exact element={<Episode />}></Route>
                  </Route>
                </Routes>
              </EpisodeProvider>
            </LocProvider>
          </CharProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
