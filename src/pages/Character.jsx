import { useCharacter } from "../contexts/CharacterContext";
import { Box } from "@mui/material";
import CardList from "../components/Card";
import ButtonAppBar from "../components/Navbar";
import "../app.css";

export default function Character() {
  const chara = useCharacter();

  return (
    <>
      <ButtonAppBar />
      <Box>
        <div className="list-container">
          {chara?.map((c) => (
            <CardList data={c} key={c.id} />
          ))}
        </div>
      </Box>
    </>
  );
}
