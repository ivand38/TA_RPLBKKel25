import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const BASE_API_URL = `https://rickandmortyapi.com/api/location`;

export const LocContext = createContext();

export function useLocation() {
  return useContext(LocContext);
}

export function LocProvider({ children }) {
  const [location, setLocation] = useState();
  useEffect(() => {
    async function getLocation() {
      await axios
        .get(BASE_API_URL)
        .then((res) => {
          const responseData = res.data.results;
          setLocation(responseData);
        })
        .catch((error) => {
          console.log(error);
          window.alert(error);
        });
    }
    getLocation();
  }, []);
  return <LocContext.Provider value={location}>{children}</LocContext.Provider>;
}
