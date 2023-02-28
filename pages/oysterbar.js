import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";
// const NoImage = "../static/items/NoImage.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 50,
  },

  title: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const oysterbaritems = [
  {
    id: 1,
    name: "Pacific Oysters",
    description: "2 pieces",
    price: 6,
    image: "../static/items/oysterBar/pacificOyster.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Pacific Oysters",
    description: "6 pieces",
    price: 16,
    image: "../static/items/oysterBar/pacificOyster.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Kusshi Oysters",
    description: "2 pieces",
    price: 7,
    image: "../static/items/oysterBar/kusshiOyster.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Kusshi Oysters",
    description: "6 pieces",
    price: 19,
    image: "../static/items/oysterBar/kusshiOyster.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Kumamoto Oysters",
    description: "6 pieces",
    price: 10,
    image: "../static/items/oysterBar/kumamotoOyster.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Kumamoto Oysters",
    description: "6 pieces",
    price: 27,
    image: "../static/items/oysterBar/kumamotoOyster.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Oyster Ceviche",
    description: "Four pieces of oyster ceviche",
    price: 15,
    image: "../static/items/oysterBar/cevicheOysters.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Aguachile Shrimp",
    description:
      "Avocado, cucumber, red onions, cilantro, tomato, and aguachile sauce",
    price: 12,
    image: "../static/items/oysterBar/aguachileShrimp.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Spicy Cajun Seafood",
    description:
      "Lobster tail, jumbo scallop, shrimp, green mussels, and calamari",
    price: 25,
    image: "../static/items/oysterBar/spicyCajunSeafood.jpg",
    largeImage: "",
  },
];

export default function OysterBar() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.title}>
                <Typography variant="h4" id="oysterbar">
                  Oyster Bar Items
                </Typography>
                <p>Dine-in Only.</p>
              </div>
            </Grid>

            {oysterbaritems.map((oysterbaritem) => (
              <Grid item xs={12} sm={6} key={oysterbaritem.name}>
                <CardItem
                  itemName={{ text: `${oysterbaritem.name}` }}
                  title={{ text: `${oysterbaritem.name}` }}
                  itemDescription={{ text: `${oysterbaritem.description}` }}
                  itemPrice={{ price: `${oysterbaritem.price}` }}
                  itemImage={{ image: `${oysterbaritem.image}` }}
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
