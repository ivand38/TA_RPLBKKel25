import { Box, Card } from "@mui/material";
import { useEpisode } from "../contexts/EpisodeContext";
import CardList from "../components/Card";

export default function Episode() {
  const episode = useEpisode();
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
          {episode?.map((c) => (
            <CardList data={c} key={c.id} />
          ))}
        </div>
      </Box>
    </>
  );
}
