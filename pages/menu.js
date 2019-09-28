import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  ayce: {
    textAlign: "center"
  }
}));

const freshRolls = [
  {
    id: 1,
    name: "Yellowtail Delight Roll",
    description:
      "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
    price: 12.99,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Hawaiian Roll",
    description:
      "spicy tuna roll topped with tuna, masago, green onion and goma sauce",
    price: 12.99,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Cucumber Sashimi Roll",
    description: "four kinds of fish, avocado, cucumber wrap",
    price: 12.99,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Sakura Roll",
    description:
      "tuna, salmon, yellowtail, white fish, crab, asparagus, soy paper wrap, ponzu and house sauce.",
    price: 12.99,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 5,
    name: "Sexy Salmon Roll",
    description: "salmon, crab, avocado, and cucumber wrap",
    price: 12.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 6,
    name: "Lemon Roll",
    description: "California roll, salmon, sliced lemon on top",
    price: 11.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 7,
    name: "Mexican Roll",
    description: "spicy shrimp, crab roll, avocado, spicy mayo and hot sauce",
    price: 10.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 8,
    name: "Spicy Albacore Crunch Roll",
    description:
      "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and ponzu sauce",
    price: 11.95,
    image: "../static/ph.png",
    largeImage: ""
  },
  {
    id: 9,
    name: "Albacore Delight Roll",
    description:
      "albacore, crab, red onion, green onion, masago, garlic, and ponzu sauce",
    price: 11.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 10,
    name: "Mango Tango Roll",
    description: "shrimp tempura, cucumber, mango, avocado and salmon on top",
    price: 10.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 11,
    name: "Mango Mania Roll",
    description: "avocado, cucumber, mango, fresh salmon on top",
    price: 10.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 12,
    name: "Alaskan Roll",
    description: "spicy tuna roll topped with salmon",
    price: 11.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 13,
    name: "Rainbow Roll",
    description: "California roll topped with four kinds of fish and avocado",
    price: 12.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 14,
    name: "911 Roll",
    description: "spicy tuna, avocado, chili oil, hot and sweet sauce",
    price: 10.95,
    image: " ",
    largeImage: ""
  }
];

export default function menu() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h6">Fresh Rolls</Typography>
              </div>
            </Grid>

            {freshRolls.map(freshRoll => (
              <Grid item xs={12} sm={6}>
                <CardItem
                  key={freshRoll.id}
                  itemName={{ text: `${freshRoll.name}` }}
                  itemDescription={{ text: `${freshRoll.description}` }}
                  itemImage={{ image: `${freshRoll.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
