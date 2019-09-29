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
    marginTop: 50
  },

  ayce: {
    textAlign: "center"
  }
}));

const bakedRolls = [
  {
    id: 1,
    name: "Shrimp Tempura Roll",
    description: "shrimp tempura topped with avocado, spicy, and eel",
    price: 10.95,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Crunch Roll",
    description: "shrimp tempura with avocado and crunch on top",
    price: 9.95,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Amber Roll",
    description: "shrimp tempura topped with spicy crab",
    price: 11.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Spicy Tuna Tempura Roll",
    description: "deep fried spicy tuna roll, spicy mayo and eel",
    price: 9.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 5,
    name: "Monkey Roll",
    description: "mushroom with spicy tuna deep fried, spicy mayo and eel",
    price: 8.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 6,
    name: "Dragon Roll",
    description:
      "shrimp tempura, eel and spicy tuna topped with avocado and eel sauce",
    price: 13.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 7,
    name: "Sun-Burn Roll",
    description:
      "Mixed seafood, albacore, deep fried onion, garlic ponzu sauce",
    price: 11.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 8,
    name: "Vegas Roll",
    description:
      "Deep fried spicy seafood with avocado, cream cheese, topped with eel and hot sauce",
    price: 10.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 9,
    name: "Spider Roll",
    description:
      "Deep fried soft shell crab, gobo, avocado, masago, and eel sauce",
    price: 12.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 10,
    name: "Popcorn Lobster Roll",
    description: "California roll topped with deep fried lobster and eel sauce",
    price: 13.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 11,
    name: "Crunch Scallop Roll",
    description: "California roll, deep fried scallop on top",
    price: 12.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 12,
    name: "Tiger Roll",
    description:
      "shrimp tempura & spicy tuna, avocado topped with spicy mayo, and eel sauce.",
    price: 11.95,
    image: " ",
    largeImage: ""
  }
];

export default function BakedRollss() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h6" id="freshrolls">
                  Baked Rolls
                </Typography>
              </div>
            </Grid>

            {bakedRolls.map(bakedRoll => (
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
        </div>
      </Container>
    </Layout>
  );
}
