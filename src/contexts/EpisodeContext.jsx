import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const BASE_API_URL = `https://rickandmortyapi.com/api/episode`;

export const EpisodeContext = createContext();

export function useEpisode() {
  return useContext(EpisodeContext);
}

export function EpisodeProvider({ children }) {
  const [episode, setEps] = useState();
  useEffect(() => {
    async function getEps() {
      await axios
        .get(BASE_API_URL)
        .then((res) => {
          const responseData = res.data.results;
          setEps(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getEps();
  }, []);
  return (
    <EpisodeContext.Provider value={episode}>
      {children}
    </EpisodeContext.Provider>
  );
}
