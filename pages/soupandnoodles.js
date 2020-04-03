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

const soupAndNoodles = [
  {
    id: 1,
    name: "Tempura Udon",
    description: "shrimp tempura in noodle soup",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Chicken Udon",
    description: "chicken in noodle soup",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Beef Udon",
    description: "beef in noodle soup",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Seafood Udon",
    description: " ",
    price: 11.95,
    image: " ../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Tonkatsu Ramen",
    description: " ",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Miso Ramen",
    description: "",
    price: 9.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Seafood Ramen",
    description: "shrimp, jumbo scallop, mussel, calamari, vegetables",
    price: 11.95,
    image: " ../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Udon / Ramen Combo",
    description:
      "Choose 1 item with Ramen or Udon: Sushi (5), Sashimi (6), California Cut Roll, or Spicy Tuna Cut Roll",
    price: 13.95,
    image: "../static/items/NoImage.jpg ",
    largeImage: "",
  },
  {
    id: 9,
    name: "Yaki Soba (Vegetables)",
    description: "pan fried Japanese thin noodles with vegetables",
    price: 7.95,
    image: " ../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Yaki Soba (Chicken)",
    description: "pan fried Japanese thin noodles with chicken",
    price: 9.95,
    image: " ../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Yaki Soba (Beef)",
    description: "pan fried Japanese thin noodles with beef",
    price: 9.95,
    image: "../static/items/NoImage.jpg ",
    largeImage: "",
  },
  {
    id: 12,
    name: "Sukiyaki",
    description: "beef, vegetables, tofu, yam noodle, egg with rice",
    price: 14.95,
    image: " ../static/items/NoImage.jpg",
    largeImage: "",
  },
];

export default function SoupAndNoodles() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="soupAndNoodles">
                  Soup & Noodles
                </Typography>
              </div>
            </Grid>

            {soupAndNoodles.map((soupAndNoodle) => (
              <Grid item xs={12} sm={6} key={soupAndNoodle.name}>
                <CardItem
                  itemName={{ text: `${soupAndNoodle.name}` }}
                  title={{ text: `${soupAndNoodle.name}` }}
                  itemDescription={{ text: `${soupAndNoodle.description}` }}
                  itemPrice={{ price: `${soupAndNoodle.price}` }}
                  itemImage={{ image: `${soupAndNoodle.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
