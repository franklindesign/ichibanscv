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

  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const entrees = [
  {
    id: 1,
    name: "Garlic Shrimp",
    description:
      "sauteed jumbo shrimp with garlic includes miso soup, salad, and rice",
    price: 22.95,
    image: "../static/items/entrees/GarlicShrimp.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Korean BBQ Bento",
    description:
      "Korean style BBQ bento with miso soup, salad, rice, tempura, and gyoza",
    price: 22.95,
    image: "../static/items/entrees/KoreanBBQBento.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Chicken Teriyaki",
    description: "grilled chicken with teriyaki sauce",
    price: 14.95,
    image: "../static/items/entrees/ChickenTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Beef Teriyaki",
    description: "grilled beef with teriyaki sauce",
    price: 18.95,
    image: "../static/items/entrees/BeefTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Salmon Teriyaki",
    description: "grilled salmon with teriyaki sauce",
    price: 18.95,
    image: "../static/items/entrees/SalmonTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Don Katsu",
    description:
      "Deep fried breaded pork or chicken. Includes miso soup, salad, and rice.",
    price: 14.95,
    image: "../static/items/entrees/donKatsu.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Bulgogi Don",
    description:
      "Marinated Korean style beef with vegetable over rice. Includes miso soup.",
    price: 13.95,
    image: "../static/items/entrees/BulgogiBowl.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Chicken Don",
    description: "Chicken teriyaki over rice. Includes miso soup.",
    price: 11.95,
    image: "../static/items/entrees/ChickenBowl.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Beef Don",
    description:
      "grilled beef with teriyaki sauce over rice. Includes miso soup.",
    price: 13.95,
    image: "../static/items/entrees/BeefBowl.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Beef Galbi (Korean BBQ)",
    description:
      "grilled tender marinated beef short ribs on hibachi. Includes miso soup and rice.",
    price: 24.95,
    image: "../static/items/entrees/KBBQ.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Beef Teppanyaki",
    description:
      "grilled tender stripe with vegetables over rice. Includes miso soup.",
    price: 16.95,
    image: "../static/items/entrees/BeefTeppanyaki.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Chicken Teppanyaki",
    description:
      "grilled chicken with vegetables over rice. Includes miso soup.",
    price: 14.95,
    image: "../static/items/entrees/ChickenTeppanyaki.jpg",
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
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="entrees">
                  Entrees
                </Typography>
              </div>
            </Grid>

            {entrees.map((entree) => (
              <Grid item xs={12} sm={6} key={entree.name}>
                <CardItem
                  itemName={{ text: `${entree.name}` }}
                  title={{ text: `${entree.name}` }}
                  itemDescription={{ text: `${entree.description}` }}
                  itemPrice={{ price: `${entree.price}` }}
                  itemImage={{ image: `${entree.image}` }}
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
