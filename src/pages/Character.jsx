import { useCharacter } from "../contexts/CharacterContext";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CardList from "../components/Card";
export default function Character() {
  const chara = useCharacter();

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
          {chara?.map((c) => (
            <CardList data={c} key={c.id} />
          ))}
        </div>
      </Box>
    </>
  );
}
