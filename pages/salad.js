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
    marginTop: 100,
    marginBottom: 50,
    height: "100%"
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25
  }
}));

const salads = [
  {
    id: 1,
    name: "House Salad",
    description: "ginger dressing",
    price: 4.5,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Cucumber Salad",
    description: "cucumber in a vinagrette with sesame seed",
    price: 4.5,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Seaweed Salad",
    description: "marinated seaweed with sesame oil and seed",
    price: 4.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Salmon Skin Salad",
    description: "broiled salmon skin, gobo, bonito",
    price: 7.95,
    image: "",
    largeImage: ""
  },
  {
    id: 5,
    name: "Spicy Tuna Salad",
    description:
      "spicy tuna, cucumber with gobo, masago, green onion, sesame oil and seed",
    price: 12.95,
    image: "../static/items/salad/spicyTunaSalad.jpg",
    largeImage: ""
  },
  {
    id: 6,
    name: "Sashimi Salad",
    description: "green salad with 8 pieces of sashimi",
    price: 12.95,
    image: "",
    largeImage: ""
  },
  {
    id: 7,
    name: "Calamari Tempura Salad",
    description: "",
    price: 11.95,
    image: "../static/items/salad/calamariTempuraSalad.jpg",
    largeImage: ""
  }
];

export default function Salad() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="salad">
                  Salad
                </Typography>
              </div>
            </Grid>

            {salads.map(salad => (
              <Grid item xs={12} sm={6} key={salad.name}>
                <CardItem
                  itemName={{ text: `${salad.name}` }}
                  title={{ text: `${salad.name}` }}
                  itemDescription={{ text: `${salad.description}` }}
                  itemPrice={{ price: `${salad.price}` }}
                  itemImage={{ image: `${salad.image}` }}
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
