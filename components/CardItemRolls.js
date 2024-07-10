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
    height: "160px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: "180px",
    },
  },
  content: {
    textAlign: "left",
  },
  cover: {
    display: "flex",
    flex: "0 0 150px",
    width: 125,
  },
  product: { color: "#e92b2e", textAlign: "left" },
  price: {
    color: "#000", // price $ color
    textAlign: "right",
    position: "absolute",
    top: 20,
    right: 10,
  },
  description: {
    color: "#000", // text color
    marginBottom: 5,
  },
}));

export default function CardItem({
  itemName,
  itemDescriptionIn,
  itemDescriptionOut,
  itemDescriptionSauce,
  itemImage,
  itemPrice,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={`${itemImage.image}`}
        title={`${itemName.text}`}
        loading="lazy"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div style={{ display: "inline" }}>
            <Typography className={classes.product} component="h6" variant="h6">
              {itemName.text}
            </Typography>
            <Typography className={classes.price} variant="subtitle1">
              {itemPrice.price}
            </Typography>
          </div>
          <Typography className={classes.description} variant="body1">
            <strong>In:</strong> {itemDescriptionIn.text}
          </Typography>
          <Typography className={classes.description} variant="body1">
            <strong>Out:</strong> {itemDescriptionOut.text}
          </Typography>
          <Typography className={classes.description} variant="body1">
            <strong>Sauce:</strong> {itemDescriptionSauce.text}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
