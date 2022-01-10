import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

const NoImage = "../static/items/NoImage.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 50,
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const coldAppetizers = [
  {
    id: 1,
    name: "Yummy Crunch Tuna",
    description: "Tuna with tomato salsa, spicy mayo, and masago.",
    price: 11.95,
    image: "../static/items/coldAppetizers/YummyCrunchTuna.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Yummy Crunch Salmon",
    description: "Fresh salmon with mango salsa",
    price: 11.95,
    image: "../static/items/coldAppetizers/YummyCrunchSalmon.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Tuna on Rice Crispy ",
    description:
      "4 pieces of crunchy rice cakes with avocado, masago, spicy tuna on top, spicy mayo, and eel sauce",
    price: 12.95,
    image: "../static/items/coldAppetizers/SpicyTunaOnRiceCrispy.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Fresh Oyster (2 pieces) ",
    description: "2 pieces of fresh oyster",
    price: 5.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Fresh Oyster (6 pieces) ",
    description: "6 pieces of fresh oyster",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Sexy on the Beach",
    description:
      "spicy crab, shrimp with avocado, wrapped in tuna, masago, green onions, ponzu sauce, and chili oil on top.",
    price: 14.95,
    image: "../static/items/coldAppetizers/SexyOnTheBeach.jpg",
    largeImage: " ",
  },
  {
    id: 7,
    name: "Oyster Shooter",
    description: "oyster with masago, green onions with ponzu and sake",
    price: 5.95,
    image: "../static/items/coldAppetizers/SexyOnTheBeach.jpg",
    largeImage: " ",
  },
  {
    id: 8,
    name: "Yellowtail Carpaccio (6 Pieces)",
    description: "yellowtail with jalapeno, yuzu sauce, and chili oil",
    price: 16.95,
    image: "../static/items/coldAppetizers/YellowtailCappaccio.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Albacore Carpaccio (6 Pieces)",
    description: "albacore with ponzu and fried onion",
    price: 16.95,
    image: "../static/items/coldAppetizers/AlbacoreCappaccio.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Cajun Spicy Tuna Sashimi",
    description: "Cajun style spicy sashimi with avocado, ponzu, and chili oil",
    price: 16.95,
    image: NoImage,
    largeImage: "",
  },
];

export default function Entrees() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="coldAppetizers">
                  Appetizers (Cold)
                </Typography>
              </div>
            </Grid>

            {coldAppetizers.map((coldAppetizer) => (
              <Grid item xs={12} sm={6} key={coldAppetizer.name}>
                <CardItem
                  itemName={{ text: `${coldAppetizer.name}` }}
                  title={{ text: `${coldAppetizer.name}` }}
                  itemDescription={{ text: `${coldAppetizer.description}` }}
                  itemPrice={{ price: `${coldAppetizer.price}` }}
                  itemImage={{ image: `${coldAppetizer.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
          <OrderWith></OrderWith>
        </div>
      </Container>
    </Layout>
  );
}
