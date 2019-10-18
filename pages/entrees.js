import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import UberEats from "../components/UberEats";
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

const entrees = [
  {
    id: 1,
    name: "Chicken Teriyaki",
    description: "grilled chicken with teriyaki sauce",
    price: 11.95,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Beef Teriyaki",
    description: "grilled beef with teriyaki sauce",
    price: 13.95,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Salmon Teriyaki",
    description: "grilled salmon with teriyaki sauce",
    price: 13.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Don Katsu",
    description: "pork, chicken or fish",
    price: 12.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 5,
    name: "Bulgogi Don",
    description: "marinated Korean style beef with vegetable",
    price: 9.95,
    image: "",
    largeImage: ""
  },
  {
    id: 6,
    name: "Chicken Don",
    description: "chicken teriyaki over rice",
    price: 8.95,
    image: "",
    largeImage: ""
  },
  {
    id: 7,
    name: "Beef Don",
    description: "grilled beef with teriyaki sauce, rice on top",
    price: 9.95,
    image: " ",
    largeImage: ""
  },
  {
    id: 8,
    name: "Korean BBQ",
    description: "grilled tender marinated beef short ribs on hibachi",
    price: 16.95,
    image: ". ",
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
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="entrees">
                  Entrees
                </Typography>
              </div>
            </Grid>

            {entrees.map(entree => (
              <Grid item xs={12} sm={6} key={entree.name}>
                <CardItem
                  itemName={{ text: `${entree.name}` }}
                  title={{ text: `${entree.name}` }}
                  itemDescription={{ text: `${entree.description}` }}
                  itemPrice={{ price: `${entree.price}` }}
                  itemImage={{ image: `${entree.image}` }}
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
