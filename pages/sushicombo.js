import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

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

const sushicombos = [
  {
    id: 1,
    name: "Chirashi",
    description: "mixed sashimi on a bowl of sushi rice",
    price: 25.95,
    image: "../static/items/sushiCombo/chirashi.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Unagi Donburi (Eel Bowl)",
    description: "sushi rice with broiled eel and avocado",
    price: 22.95,
    image: "../static/items/sushiCombo/unagiBowl.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sashimi Donburi",
    description:
      "Korean-style poke bowl with tuna, salmon on sushi rice & spring mix with masago, seaweed salad, hot sauce and sesame oil & seed",
    price: 19.95,
    image: "../static/items/sushiCombo/sashimiDonburi.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Ichiban Poke Bowl",
    description:
      "tuna, salmon, scallop on sushi rice & spring mix top with seaweed salad, crab meat and avocado",
    price: 19.95,
    image: "../static/items/sushiCombo/ichibanPokeBowl.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Special Sushi Combo",
    description: "10 pieces of sushi with California or spicy tuna roll",
    price: 25.95,
    image: "../static/items/sushiCombo/specialSushi.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Special Sashimi Combo",
    description:
      "12 pieces sashimi: tuna, salmon, albacore, ocean striped bass",
    price: 25.95,
    image: "../static/items/sushiCombo/specialSashimi.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Big Scallops Sashimi",
    description: "Multiple pieces of big scallops",
    price: 19.95,
    image: "../static/items/sushiCombo/bigScallops.jpg",
    largeImage: "",
  },
];

export default function SushiCombo() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="sushicombo">
                  Sushi Combo
                </Typography>
                <Typography>*served with miso soup</Typography>
              </div>
            </Grid>

            {sushicombos.map((sushicombo) => (
              <Grid item xs={12} sm={6} key={sushicombo.name}>
                <CardItem
                  itemName={{ text: `${sushicombo.name}` }}
                  title={{ text: `${sushicombo.name}` }}
                  itemDescription={{ text: `${sushicombo.description}` }}
                  itemPrice={{ price: `${sushicombo.price}` }}
                  itemImage={{ image: `${sushicombo.image}` }}
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
