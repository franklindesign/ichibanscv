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

  category: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const inariSushis = [
  {
    id: 1,
    name: "Beef Bulgogi",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/bulgogi.jpg",
    
  },
  {
    id: 2,
    name: "Spicy Tuna",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/spicytuna.jpg",
    
  },
  {
    id: 3,
    name: "Spicy Shrimp & Crab",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/spicyshrimpcrab.jpg",
    
  },
  {
    id: 4,
    name: "Grilled Eel",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/grilledeel.jpg",
    
  },
  {
    id: 5,
    name: "Spicy Shrimp",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/spicyshrimp.jpg",
    
  },
  {
    id: 6,
    name: "Octopus Wasabi",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/octopuswasabi.jpg",
    
  },
  {
    id: 7,
    name: "Spicy Salmon",
    description:
      "",
    price: 5.95,
    image: "../static/items/inariSushi/spicysalmon.jpg",
    
  },
];

export default function InariSushis() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.category}>
                <Typography variant="h4" id="inariSushis">
                  INARI SUSHI
                </Typography>
                <p>Inari sushi or inarizushi is a fried and seasoned tofu pocket stuffed with sushi rice. Select from a variety of topping with your inari sushi:</p>
              </div>
            </Grid>
            {inariSushis.map((inariSushi) => (
              <Grid item xs={12} sm={6} key={inariSushi.name}>
                <CardItem
                  itemName={{ text: `${inariSushi.name}` }}
                  title={{ text: `${inariSushi.name}` }}
                  itemDescription={{ text: `${inariSushi.description}` }}
                  itemPrice={{ price: `${inariSushi.price}` }}
                  itemImage={{ image: `${inariSushi.image}` }}
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
