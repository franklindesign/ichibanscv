import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 50,
  },
  alerts: { marginTop: 20 },
  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const lunchSpecials = [
  {
    id: 1,
    name: "Ramen or Udon Combo",
    description:
      "Choose Ramen or Udon for a combo with 1 item of your choice: Sushi (5 pieces), Sashimi (6 pieces), California Cut Roll, Spicy Tuna Cut Roll, or Mixed Tempura.",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Bento Box",
    description:
      "Choose two items: Chicken/Beef/Salmon Teriyaki, Pork Cutlet, Bulgogi, Sesame Chicken, Sushi (5), Sashimi (6), California Roll, and Spicy Tuna Roll. ",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Miso / Tonkotsu / Seafood",
    description: "Choose from miso, tonkotsu or seafood for your ramen.",
    price: 7.95,
    image: "../static/items/lunchSpecials/seafoodRamen.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Chicken or Pork Tonkatsu",
    description:
      "Choice of chicken or pork tonkatsu. Served with rice and salad",
    price: 7.95,
    image: " ../static/items/lunchSpecials/tonkatsu.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Ichiban Poke Bowl",
    description:
      "Tuna, salmon, scallop on sushi rice, spring mix, topped with seaweed salad, crab meat and avocado.",
    price: 7.95,
    image: "../static/items/lunchSpecials/pokeBowl.jpg",
    largeImage: "",
  },
];

export default function LunchSpecials() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="lunchspecials">
                  Lunch Specials
                </Typography>
                <div className={classes.alerts}>
                  <Alert variant="outlined" severity="info">
                    Bento Box is available for take-out.
                  </Alert>
                </div>
              </div>
            </Grid>
            {lunchSpecials.map((lunchSpecial) => (
              <Grid item xs={12} sm={6} key={lunchSpecial.name}>
                <CardItem
                  itemName={{ text: `${lunchSpecial.name}` }}
                  title={{ text: `${lunchSpecial.name}` }}
                  itemDescription={{ text: `${lunchSpecial.description}` }}
                  itemPrice={{ price: `${lunchSpecial.price}` }}
                  itemImage={{ image: `${lunchSpecial.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
