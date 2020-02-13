import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
// import UberEats from "../components/UberEats";
import OrderWith from "../components/OrderWith";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 50
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25
  }
}));

const regularRolls = [
  {
    id: 1,
    name: "California (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Spicy Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 3,
    name: "Albacore (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 4,
    name: "Avocado (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 5,
    name: "Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },

  {
    id: 6,
    name: "Cucumber (Cut Roll)",
    description: "6-8 pieces",
    price: "4.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 7,
    name: "Eel (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 8,
    name: "Salmon (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 9,
    name: "Salmon Skin (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 10,
    name: "Scallop (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 11,
    name: "Shrimp & Crab (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 12,
    name: "Tuna (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 13,
    name: "Vegetable (Cut Roll)",
    description: "6-8 pieces",
    price: "6.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 14,
    name: "Yellowtail (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  },
  {
    id: 15,
    name: "Philadelphia (Cut Roll)",
    description: "6-8 pieces",
    price: "7.50",
    image: " ",
    largeImage: ""
  }
];

export default function RegularRolls() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="regularrolls">
                  Regular Cut Rolls
                </Typography>
              </div>
            </Grid>

            {regularRolls.map(regularRoll => (
              <Grid item xs={12} sm={6} key={regularRoll.name}>
                <CardItem
                  itemName={{ text: `${regularRoll.name}` }}
                  title={{ text: `${regularRoll.name}` }}
                  itemDescription={{ text: `${regularRoll.description}` }}
                  itemPrice={{ price: `${regularRoll.price}` }}
                  itemImage={{ image: `${regularRoll.image}` }}
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
