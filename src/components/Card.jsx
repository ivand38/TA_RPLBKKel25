import { Button, Card, CardContent, Typography } from "@mui/material";

export default function CardList(props) {
  return (
    <Button key={props.data.id}>
      <Card key={props.data.id}>
        <CardContent key={props.data.id}>
          <Typography sx={{ color: "#fefae0" }} key={props.data.id}>
            {props.data.name}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
