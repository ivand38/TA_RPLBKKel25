import { Box, Card } from "@mui/material";
import { useLocation } from "../contexts/LocationContext";
import CardList from "../components/Card";

export default function Location() {
  const location = useLocation();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="list-container">
          {location?.map((c) => (
            <CardList data={c} key={c.id} />
          ))}
        </div>
      </Box>
    </>
  );
}
