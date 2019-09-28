import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    backgroundColor: "#1c1c1c"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "150px"
  },
  content: {
    textAlign: "left"
  },
  cover: {
    display: "flex",
    flex: "0 0 150px",
    width: 125
  }
}));

export default function CardItem({ itemName, itemDescription, itemImage }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {itemName.text}
          </Typography>
          <Typography color="white" variant="body2">
            {itemDescription.text}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${itemImage.image}`}
        title="Live from space album cover"
      />
    </Card>
  );
}
