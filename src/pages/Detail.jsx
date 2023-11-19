import { Button, Divider, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useCharacter } from "../contexts/CharacterContext";

export default function Detail() {
  const { id } = useParams();
  const charId = parseInt(id, 10);
  const chara = useCharacter();
  const navigate = useNavigate();
  

  const dataItem = chara?.filter((obj) => {
    return obj.id === charId;
  });

  console.log(dataItem[0]?.name);
  return (
    <>
      <div className="detail">
        <Paper elevation={24}>
          <div className="detailTitle">
            <Button variant="contained" onClick={() =>navigate("/") } color="error" size="small">
              back
            </Button>
            <h1>Character Detail</h1>
          </div>
          <Divider />
          <div className="detailList">
            <h2>Name</h2>
            <h3>{dataItem[0]?.name}</h3>
            <h2>Gender</h2>
            <h3>{dataItem[0]?.gender}</h3>
            <h2>Origin</h2>
            <h3>{dataItem[0]?.origin?.name}</h3>
            <h2>Species</h2>
            <h3>{dataItem[0]?.species}</h3>
            <h2>status</h2>
            <h3>{dataItem[0]?.status}</h3>
          </div>
        </Paper>
      </div>
    </>
  );
}
