import { Box, Card } from "@mui/material";
import { useEpisode } from "../contexts/EpisodeContext";
import CardList from "../components/Card";
import ButtonAppBar from "../components/Navbar";
import { useLogin } from "../contexts/UserContext";
export default function Episode() {
  const episode = useEpisode();
  return (
    <>
      <ButtonAppBar />
      <Box>
        <div className="list-container">
          {episode?.map((c) => (
            <CardList data={c} key={c.id}/>
          ))}
        </div>
      </Box>
    </>
  );
}
