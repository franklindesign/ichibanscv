import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    backgroundColor: "#fff"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "150px",
    backgroundColor: "#fff"
  },
  content: {
    textAlign: "left"
  },
  cover: {
    display: "flex",
    flex: "0 0 150px",
    width: 125
  },
  price: {
    color: "#F46523"
  },
  description: {
    color: "#000",
    marginBottom: 5
  }
}));

export default function CardItem({
  itemName,
  itemDescription,
  itemImage,
  itemPrice,
  title
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {itemName.text}
          </Typography>
          <Typography className={classes.description} variant="body2">
            <i>{itemDescription.text}</i>
          </Typography>

          <Typography className={classes.price} variant="body2">
            {itemPrice.price}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${itemImage.image}`}
        title={`${itemName.text}`}
        loading="lazy"
      />
    </Card>
  );
}
