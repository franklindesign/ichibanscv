import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
// import UberEats from "../components/UberEats";
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

const handRolls = [
  {
    id: 1,
    name: "California (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Spicy Tuna (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Albacore (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Avocado (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Crab (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },

  {
    id: 6,
    name: "Cucumber (Hand Roll)",
    description: "1 piece",
    price: "3.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Eel (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Salmon Skin (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Scallop (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Shrimp & Crab (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Tuna (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Vegetable (Hand Roll)",
    description: "1 piece",
    price: "5.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 14,
    name: "Yellowtail (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 15,
    name: "Philadelphia (Hand Roll)",
    description: "1 piece",
    price: "6.50",
    image: NoImage,
    largeImage: "",
  },
];

export default function HandRolls() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="handrolls">
                  Hand Rolls
                </Typography>
              </div>
            </Grid>

            {handRolls.map((handRoll) => (
              <Grid item xs={12} sm={6} key={handRoll.name}>
                <CardItem
                  itemName={{ text: `${handRoll.name}` }}
                  title={{ text: `${handRoll.name}` }}
                  itemDescription={{ text: `${handRoll.description}` }}
                  itemPrice={{ price: `${handRoll.price}` }}
                  itemImage={{ image: `${handRoll.image}` }}
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
