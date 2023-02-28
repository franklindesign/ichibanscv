import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

const NoImage = "../static/items/NoImageSushi.jpg";

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

const sushis = [
  {
    id: 1,
    name: "Albacore (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Crab (sushi)",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Escolar (ono sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Egg (tamago sushi)",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Fresh Water Eel (unagi sushi)",
    description: "2 pieces",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 6,
    name: "Inari (sushi)",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Mackerel (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Octopus (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Red Clam (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Salmon (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Salmon Egg (sushi)",
    description: "2 pieces",
    price: "7.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Scallop (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Shrimp (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Smelt Egg (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Squid (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 16,
    name: "Sweet Shrimp (sushi)",
    description: "2 pieces",
    price: "11.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 17,
    name: "Tuna (sushi)",
    description: "2 pieces",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 18,
    name: "Uni (sea urchin sushi)",
    description: "2 pieces",
    price: "11.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 19,
    name: "White Fish (sushi)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 20,
    name: "Yellowtail (sushi)",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 21,
    name: "Halibut (sushi)",
    description: "2 pieces",
    price: "6.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 22,
    name: "Chu-toro (medium fatty tuna sushi)",
    description: "2 pieces",
    price: "11.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 23,
    name: "Otoro (high fatty tuna sushi)",
    description: "2 pieces",
    price: "13.95",
    image: NoImage,
    largeImage: "",
  },
];

export default function Sushis() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="sushis">
                  Sushi
                </Typography>
              </div>
            </Grid>

            {sushis.map((sushi) => (
              <Grid item xs={12} sm={6} key={sushi.name}>
                <CardItem
                  itemName={{ text: `${sushi.name}` }}
                  title={{ text: `${sushi.name}` }}
                  itemDescription={{ text: `${sushi.description}` }}
                  itemPrice={{ price: `${sushi.price}` }}
                  itemImage={{ image: `${sushi.image}` }}
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
