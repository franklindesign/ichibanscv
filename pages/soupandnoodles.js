import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

const NoImage = "../static/items/NoImageNoodles.jpg";

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
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Chicken Udon",
    description: "chicken in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Beef Udon",
    description: "beef in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Seafood Udon",
    description: "various seafood in noodle soup",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Tonkotsu Ramen",
    description: "Choose regular or spicy flavor",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Miso Ramen",
    description: "Choose regular or spicy flavor",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Seafood Ramen",
    description: "shrimp, jumbo scallop, mussel, calamari, vegetables",
    price: 14.95,
    image: NoImage,
    largeImage: "",
  },

  {
    id: 9,
    name: "Yaki Soba (Vegetables)",
    description: "pan fried Japanese thin noodles with vegetables",
    price: 12.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Yaki Soba (Chicken)",
    description: "pan fried Japanese thin noodles with chicken",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Yaki Soba (Beef)",
    description: "pan fried Japanese thin noodles with beef",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Yaki Soba (Shrimp)",
    description: "pan fried Japanese thin noodles with shrimp",
    price: 15.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 13,
    name: "Sukiyaki",
    description: "beef, vegetables, tofu, yam noodle, egg with rice",
    price: 19.95,
    image: "../static/items/soupnoodles/sukiyaki.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Spicy Cajun Seafood",
    description:
      "Lobster tail, jumbo scallop, shrimp, green mussels, calamari and yam noodle.",
    price: 28,
    image: "../static/items/soupnoodles/spicycajunseafood.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Udon Pasta",
    description: "shrimp, jumbo scallops, mussel and calamari.",
    price: 19.95,
    image: "../static/items/soupnoodles/udonpasta.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Noodle Combo",
    description:
      "Choose udon or ramen, with 1 entree: sushi, sashimi, California cut roll or spicy tuna cut roll.",
    price: 20.95,
    image: "../static/items/soupnoodles/noodlecombo.jpg",
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
                  SOUP & NOODLES
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
