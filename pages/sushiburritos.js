import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import UberEats from "../components/UberEats";
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

const sushiBurritos = [
  {
    id: 1,
    name: "Iron Man",
    description:
      "inside: spicy tuna, shrimp tempura, avocado, special crab meat, jalapeno, green lettuce. outside: hot cheetos, chili oil, and spicy mayo",
    price: 11.95,
    image: "../static/items/sushiBurritos/IronManBurrito.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Spider Man",
    description:
      "inside: salmon, spicy tuna, avocado. outside: crispy onion, masago, green onion, yuzu ponzu sauce",
    price: 11.95,
    image: "../static/items/sushiBurritos/SpiderManBurrito.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Batman",
    description:
      "inside: eel, crab meat, avocado, cucumber. outside: eel sauce.",
    price: 11.95,
    image: "../static/items/sushiBurritos/BatmanBurrito.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Superman",
    description:
      "Spicy tuna, shrimp, asparagus tempura, avocado, cucumber, soy paper, with eel & spicy mayo sauce.",
    price: 11.95,
    image: "../static/items/sushiBurritos/SupermanBurrito.jpg",
    largeImage: "",
  },
];

export default function SushiBurritos() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.category}>
                <Typography variant="h4" id="sushiBurritos">
                  Sushi Burritos
                </Typography>
              </div>
            </Grid>
            {sushiBurritos.map((sushiBurrito) => (
              <Grid item xs={12} sm={6} key={sushiBurrito.name}>
                <CardItem
                  itemName={{ text: `${sushiBurrito.name}` }}
                  title={{ text: `${sushiBurrito.name}` }}
                  itemDescription={{ text: `${sushiBurrito.description}` }}
                  itemPrice={{ price: `${sushiBurrito.price}` }}
                  itemImage={{ image: `${sushiBurrito.image}` }}
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
