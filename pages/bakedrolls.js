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

const bakedRolls = [
  {
    id: 1,
    name: "Baked Salmon Roll",
    description: "California roll, baked salmon, and eel sauce.",
    price: 11.95,
    image: "../static/items/bakedRolls/BakedSalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Sunset Roll",
    description: "California roll, eel, avocado, and eel sauce",
    price: 12.95,
    image: "../static/items/bakedRolls/SunsetRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Volcano Roll",
    description:
      "California roll, baked scallop, shrimp, crab, creamy and eel sauce",
    price: 12.95,
    image: "../static/items/bakedRolls/VolcanoRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Caterpillar Roll",
    description: "fresh eel, cucumber, avocado, and eel sauce",
    price: 11.95,
    image: " ../static/items/bakedRolls/CaterpillarRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Lobster Roll",
    description: "California roll, baked lobster, and lobster sauce",
    price: 13.95,
    image: "../static/items/bakedRolls/LobsterRoll.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "B.S.C. Roll",
    description: "California roll, baked scallop, masago, and eel sauce",
    price: 12.95,
    image: "../static/items/bakedRolls/BSCRoll.jpg",
    largeImage: "",
  },
];

export default function BakedRolls() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="bakedrolls">
                  Baked Rolls
                </Typography>
              </div>
            </Grid>
            {bakedRolls.map((bakedRoll) => (
              <Grid item xs={12} sm={6} key={bakedRoll.name}>
                <CardItem
                  itemName={{ text: `${bakedRoll.name}` }}
                  title={{ text: `${bakedRoll.name}` }}
                  itemDescription={{ text: `${bakedRoll.description}` }}
                  itemPrice={{ price: `${bakedRoll.price}` }}
                  itemImage={{ image: `${bakedRoll.image}` }}
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
