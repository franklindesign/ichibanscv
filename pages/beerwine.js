import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

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

const beerAndWines = [
  {
    id: 1,
    name: "Beer Bottles",
    description: "Kirin, Kirin Light, Sapporo, and Asahi",
    price: 7,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Draft Sapporo Beer (Glass)",
    description: "draft beer, glass",
    price: 4.5,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Draft Sapporo Beer (Pitcher)",
    description: "draft beer, pitcher",
    price: 14,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Draft Sapporo Beer (Tower)",
    description: "draft beer, pitcher",
    price: 25,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Rose (Glass)",
    description: "white wine, glass",
    price: 8,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Rose (Bottle)",
    description: "white wine, glass",
    price: 28,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Chardonnay (Glass)",
    description: "Kendall Jackson, white wine, glass",
    price: 8,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Chardonnay (Bottle)",
    description: "Kendall Jackson, white wine, bottle",
    price: 28,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },

  {
    id: 10,
    name: "Plum Wine",
    description: "white wine, glass",
    price: 6,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Cabernet Sauvignon (Glass)",
    description: "Clos Du Bois, red wine, glass",
    price: 6,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Cabernet Sauvignon (Bottle)",
    description: "Clos Du Bois, red wine, bottle",
    price: 18,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Pinot Noir (Glass)",
    description: "red wine, glass",
    price: 8,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Pinot Noir (Bottle)",
    description: "red wine, glass",
    price: 20,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
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
                <Typography variant="h4" id="beerAndWine">
                  Beer & Wine
                </Typography>
                <p>Must be 21 or older to drink beer and wine.</p>
              </div>
            </Grid>

            {beerAndWines.map((beerAndWine) => (
              <Grid item xs={12} sm={6} key={beerAndWine.name}>
                <CardItem
                  itemName={{ text: `${beerAndWine.name}` }}
                  title={{ text: `${beerAndWine.name}` }}
                  itemDescription={{ text: `${beerAndWine.description}` }}
                  itemPrice={{ price: `${beerAndWine.price}` }}
                  itemImage={{ image: `${beerAndWine.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
