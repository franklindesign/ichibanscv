import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    marginBottom: 50
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25
  }
}));

const coldAppetizers = [
  {
    id: 1,
    name: "Fresh Oyster (2 Pieces)",
    description: "",
    price: 5.95,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Fresh Oyster (6 Pieces)",
    description: " ",
    price: 14.95,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Oyster Shooter",
    description: "",
    price: 5.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Spicy Tuna on Rice Crispy",
    description: "crunchy rice cake with spicy tuna on top",
    price: 9.95,
    image: "../static/items/coldAppetizers/SpicyTunaOnRiceCrispy.jpg",
    largeImage: ""
  },
  {
    id: 5,
    name: "Yellowtail Carpaccio (6 Pieces)",
    description: "jalapeno, yuzu, and chili oil",
    price: 14.95,
    image: "../static/items/coldAppetizers/YellowtailCappaccio.jpg",
    largeImage: ""
  },
  {
    id: 6,
    name: "Albacore Carpaccio (8 Pieces)",
    description: "ponzu and fried onion",
    price: 14.95,
    image: "../static/items/coldAppetizers/AlbacoreCappaccio.jpg",
    largeImage: ""
  },
  {
    id: 7,
    name: "Cajun Spicy Tuna Sashimi",
    description: "avocado, ponzu, and chili oil",
    price: 14.95,
    image: "",
    largeImage: ""
  },
  {
    id: 8,
    name: "Sexy on the Beach",
    description: "avocado, ponzu, and chili oil",
    price: "",
    image: "../static/items/coldAppetizers/SexyOnTheBeach.jpg",
    largeImage: ""
  }
];

export default function Entrees() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="coldAppetizers">
                  Appetizers (Cold)
                </Typography>
              </div>
            </Grid>

            {coldAppetizers.map(coldAppetizer => (
              <Grid item xs={12} sm={6} key={coldAppetizer.name}>
                <CardItem
                  itemName={{ text: `${coldAppetizer.name}` }}
                  title={{ text: `${coldAppetizer.name}` }}
                  itemDescription={{ text: `${coldAppetizer.description}` }}
                  itemPrice={{ price: `${coldAppetizer.price}` }}
                  itemImage={{ image: `${coldAppetizer.image}` }}
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
