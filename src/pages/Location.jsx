import { Box, Card } from "@mui/material";
import { useLocation } from "../contexts/LocationContext";
import CardList from "../components/Card";
import ButtonAppBar from "../components/Navbar";

export default function Location() {
  const location = useLocation();
  return (
    <>
      <ButtonAppBar />
      <Box>
        <div className="list-container">
          {location?.map((c) => (
            <CardList data={c} key={c.id} />
          ))}
        </div>
      </Box>
    </>
  );
}
