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
import { LocProvider } from "./contexts/LocationContext";
import Episode from "./pages/Episode";
import { EpisodeProvider } from "./contexts/EpisodeContext";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/UserContext";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";

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
                      path="/location"
                      exact
                      element={<Location />}
                    ></Route>
                    <Route path="/episode" exact element={<Episode />}></Route>
                    <Route
                      path="/detail/:id"
                      exact
                      element={<Detail />}
                    ></Route>
                    <Route path="/profile" exact element={<Profile />}></Route>
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
