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

function App() {
  return (
    <>
      <ButtonAppBar />
      <BrowserRouter>
        <CharProvider>
          <LocProvider>
            <EpisodeProvider>
              <Routes>
                <Route path="/" exact element={<Character />}></Route>
                <Route path="/Location" exact element={<Location />}></Route>
                <Route path="/Episode" exact element={<Episode />}></Route>
              </Routes>
            </EpisodeProvider>
          </LocProvider>
        </CharProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
