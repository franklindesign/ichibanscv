import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

const NoImage = "../static/items/NoImage.jpg";
const NoPrice = "Ask server for price";

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

const sakes = [
  {
    id: 1,
    name: "House Hot Sake (Small)",
    description: "",
    price: 4.5,
    image: "../static/items/sake/hotsake.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "House Hot Sake (Large)",
    description: " ",
    price: 7.5,
    image: "../static/items/sake/sake.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Plum Hot Sake (Large)",
    description: " ",
    price: 11.95,
    image: "../static/items/sake/plumHotSake.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Soju",
    description: "Chamisul Original (375ml)",
    price: 12,
    image: "../static/items/sake/jinro_chamisul.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Soju (Flavored)",
    description: "Peach, Pineapple (375ml)",
    price: 12,
    image: "../static/items/sake/chamisul_flavored.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Nigori Sake",
    description: "cold sake, (300ml)",
    price: 12,
    image: "../static/items/sake/nigori.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Nigori Sakura Sake",
    description: "Sakura sake, (300ml)",
    price: 12,
    image: "../static/items/sake/nigoriSakuraSake.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Ginjo Sake",
    description: "cold sake, (300ml)",
    price: 14,
    image: "../static/items/sake/ginjo.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Kikusui (Small)",
    description: "cold sake, (300ml)",
    price: 17,
    image: "../static/items/sake/kikusui.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Kikusui (Large)",
    description: "cold sake, (720ml)",
    price: 38,
    image: "../static/items/sake/kikusui_large.jpg",
    largeImage: "",
  },

  {
    id: 11,
    name: "Hana Flavored Sake",
    description: "Pineapple or peach.",
    price: 14,
    image: "../static/items/sake/flavored-sake.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Junmai Daiginjo (180ml)",
    description: "cold sake, (180ml)",
    price: 12,
    image: "../static/items/sake/junmaiDaiginjoS_small.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Junmai Daiginjo (500ml)",
    description: "cold sake, (500ml)",
    price: 28,
    image: "../static/items/sake/junmaiDaiginjoS_large.jpg",
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
                <Typography variant="h4" id="sake">
                  Sake
                </Typography>
                <p>Must be 21 or older to drink sake.</p>
              </div>
            </Grid>

            {sakes.map((sake) => (
              <Grid item xs={12} sm={6} key={sake.name}>
                <CardItem
                  itemName={{ text: `${sake.name}` }}
                  title={{ text: `${sake.name}` }}
                  itemDescription={{ text: `${sake.description}` }}
                  itemPrice={{ price: `${sake.price}` }}
                  itemImage={{ image: `${sake.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
