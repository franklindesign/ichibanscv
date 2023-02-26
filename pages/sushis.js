import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
// import Alert from "@material-ui/lab/Alert";
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
    name: "Tuna",
    description: "2 pieces",
    price: "5.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Salmon",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Escolar (ono)",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Albacore",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Halibut",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 6,
    name: "Yellowtail",
    description: "2 pieces",
    price: "5.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Crab",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Egg",
    description: "2 pieces",
    price: "3.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Fresh Water Eel (Unagi)",
    description: "2 pieces",
    price: "5.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Inari",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Mackerel",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Octopus",
    description: "2 pieces",
    price: "4.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Red Clam",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Salmon Egg",
    description: "2 pieces",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Scallop",
    description: "2 pieces",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 16,
    name: "Sea Urchin (Uni)",
    description: "2 pieces",
    price: "9.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 17,
    name: "Shrimp",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 18,
    name: "Smelt Egg",
    description: "2 pieces",
    price: "4.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 19,
    name: "Squid",
    description: "2 pieces",
    price: "4.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 20,
    name: "Sweet Shrimp",
    description: "2 pieces",
    price: "9.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 21,
    name: "White Fish",
    description: "2 pieces",
    price: "4.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 22,
    name: "Toro",
    description: "2 pieces",
    price: "9.95",
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
                {/* <div className={classes.alerts}>
                  <Alert variant="outlined" severity="warning">
                    Out of Stock: Halibut and Sea Urchin (Uni)
                  </Alert>
                </div> */}
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
