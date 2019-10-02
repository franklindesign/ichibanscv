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

const desserts = [
  {
    id: 1,
    name: "Ice Cream",
    description: "green tea or vanilla",
    price: 2.5,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Mochi Ice Cream",
    description: "green tea, mango, or strawberry",
    price: 2.5,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Tempura Ice Cream",
    description: "green tea or vanilla",
    price: 5.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Tempura Cheese Cake",
    description: "green tea or vanilla",
    price: 6.95,
    image: "",
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
                <Typography variant="h6" id="dessert">
                  Dessert
                </Typography>
              </div>
            </Grid>

            {desserts.map(dessert => (
              <Grid item xs={12} sm={6} key={dessert.name}>
                <CardItem
                  itemName={{ text: `${dessert.name}` }}
                  title={{ text: `${dessert.name}` }}
                  itemDescription={{ text: `${dessert.description}` }}
                  itemPrice={{ price: `${dessert.price}` }}
                  itemImage={{ image: `${dessert.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}