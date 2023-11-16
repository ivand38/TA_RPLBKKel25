import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardList(props) {
  const characterDetal = props.data;
  return (
    <Link
      className="linkToDetail"
      to={props.page == "char" ? `/detail/${props.data.id}` : null}
      key={props.data.id}
      sx={{ padding: 0 }}
    >
      <Card key={props.data.id} className="scale-up">
        <CardContent key={props.data.id}>
          <Typography
            sx={{ color: "#fefae0", textDecoration: "none" }}
            key={props.data.id}
          >
            {props.data.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
