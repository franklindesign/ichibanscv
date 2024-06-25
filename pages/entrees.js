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

const entrees = [
  
   
  {
    id: 1,
    name: "Chicken Teriyaki",
    description: "Grilled chicken with teriyaki sauce",
    price: 16.95,
    image: "../static/items/entrees/ChickenTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Beef Teriyaki",
    description: "Grilled beef with teriyaki sauce",
    price: 19.95,
    image: "../static/items/entrees/BeefTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Salmon Teriyaki",
    description: "Grilled salmon with teriyaki sauce",
    price: 19.95,
    image: "../static/items/entrees/SalmonTeriyaki.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Don Katsu",
    description:
      "Deep fried breaded pork or chicken. Includes miso soup, salad, and rice.",
    price: 16.95,
    image: "../static/items/entrees/donKatsu.jpg",
    largeImage: "",
  },

  {
    id: 5,
    name: "Chicken Don",
    description: "Chicken teriyaki over rice. Includes miso soup.",
    price: 12.95,
    image: "../static/items/entrees/ChickenBowl.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Beef Don",
    description:
      "Grilled beef with teriyaki sauce over rice. Includes miso soup.",
    price: 14.95,
    image: "../static/items/entrees/BeefBowl.jpg",
    largeImage: "",
  },
  
  {
    id: 7,
    name: "Beef Teppanyaki",
    description:
      "Grilled tender stripe with vegetables over rice. Includes miso soup.",
    price: 18.95,
    image: "../static/items/entrees/BeefTeppanyaki.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Chicken Teppanyaki",
    description:
      "Grilled chicken with vegetables over rice. Includes miso soup.",
    price: 15.95,
    image: "../static/items/entrees/ChickenTeppanyaki.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Garlic Shrimp",
    description:
      "Sauteed jumbo shrimp with garlic includes miso soup, salad, and rice.",
    price: 25.95,
    image: "../static/items/entrees/GarlicShrimp.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Bulgogi",
    description:
      "Korean style marinated slices of beef with vegetables over rice. Includes miso soup.",
    price: 16.95,
    image: "../static/items/entrees/bulgogi.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Beef Galbi (Korean BBQ)",
    description:
      "grilled tender marinated beef short ribs on hibachi. Includes miso soup and rice.",
    price: 27.95,
    image: "../static/items/entrees/KBBQ.jpg",
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
                  ENTRÉES
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
