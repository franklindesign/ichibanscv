import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

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

const bentoboxes = [
  {
    id: 1,
    name: "Chicken",
    description: "grilled chicken with teriyaki sauce",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Beef",
    description: "grilled beef with teriyaki sauce",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Salmon",
    description: "broiled fresh salmon with teriyaki sauce",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Pork Cutlet",
    description: "tender pork breaded and deep fried with tonkatsu sauce",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 5,
    name: "Bulgogi",
    description: "marinated Korean style beef",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 6,
    name: "Sesame Chicken",
    description: "lightly fried chicken marinated in sesame sauce",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 7,
    name: "Sushi",
    description: "Chef's choice (5 pieces)",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 8,
    name: "Sashimi",
    description: "Chef's choice (6 pieces)",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 9,
    name: "California Roll",
    description: " ",
    price: null,
    image: "",
    largeImage: ""
  },
  {
    id: 10,
    name: "Spicy Tuna",
    description: " ",
    price: null,
    image: "",
    largeImage: ""
  }
];

export default function BentoBox() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="bentoboxes">
                  Bento Boxes
                </Typography>
                <p>Served with steamed rice, soup, salad & tempura.</p>
                <p>(No substitutes and double order sushi & sashimi</p>
                <p>
                  <strong>Lunch: 12.95</strong>
                </p>
                <p>
                  <strong>Dinner: 15.95</strong>
                </p>
                <p>
                  <strong>Choose 2 Items for your bento:</strong>{" "}
                </p>
              </div>
            </Grid>

            {bentoboxes.map(bentoboxe => (
              <Grid item xs={12} sm={6} key={bentoboxe.name}>
                <CardItem
                  itemName={{ text: `${bentoboxe.name}` }}
                  title={{ text: `${bentoboxe.name}` }}
                  itemDescription={{ text: `${bentoboxe.description}` }}
                  itemPrice={{}}
                  itemImage={{ image: `${bentoboxe.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
