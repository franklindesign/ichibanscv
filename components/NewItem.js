import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    backgroundColor: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
      transform: "translateY(-10px)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "150px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: "180px",
    },
  },
  content: {
    textAlign: "left",
    color: "#000",
  },
  cover: {
    display: "flex",
    flex: "0 0 150px",
    width: 125,
  },
  price: {
    color: "#000", // price $ color
  },
  description: {
    color: "#000", // text color
    marginBottom: 5,
  },
}));

export default function NewItem({
  itemName,
  itemDescription,
  itemImage,
  itemPrice,
  title,
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
