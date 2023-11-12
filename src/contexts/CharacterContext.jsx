import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const BASE_API_URL = `https://rickandmortyapi.com/api/character`;

export const CharContext = createContext();

export function useCharacter() {
  return useContext(CharContext);
}

export function CharProvider({ children }) {
  const [character, setCharacter] = useState();
  useEffect(() => {
    async function getCharacter() {
      await axios
        .get(BASE_API_URL)
        .then((res) => {
          const responseData = res.data.results;
          console.log(res.data);
          setCharacter(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getCharacter();
  }, []);
  return (
    <CharContext.Provider value={character}>{children}</CharContext.Provider>
  );
}
