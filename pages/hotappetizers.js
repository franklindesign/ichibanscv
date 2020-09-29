import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

const NoImage = "../static/items/NoImage.jpg";

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

const hotAppetizers = [
  {
    id: 1,
    name: "Baked Green Mussel (5 Pieces)",
    description: "5 pieces of baked green mussels",
    price: 5.95,
    image: "../static/items/hotAppetizers/BakedGreenMussels.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Steamed Edamame",
    description: " ",
    price: 3.95,
    image: "../static/items/hotAppetizers/SteamedEdamame.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Spicy Garlic Edamame",
    description: "delicately sauteed soybeans with sea salt and garlic",
    price: 6.95,
    image: "../static/items/hotAppetizers/GarlicEdamame.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Shrimp Tempura (3 Pieces)",
    description: " ",
    price: 6.95,
    image: "../static/items/hotAppetizers/ShrimpTempura.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Vegetable Tempura (5 Pieces)",
    description: " ",
    price: 3.95,
    image: "../static/items/hotAppetizers/VegetableTempura.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Calamari Tempura",
    description: " ",
    price: 7.95,
    image: "../static/items/hotAppetizers/CalamariTempura.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Mixed Tempura",
    description: "shrimp and tempura",
    price: 8.95,
    image: "../static/items/hotAppetizers/MixedTempura.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Gyoza",
    description: "lightly fried pork and vegetable pot stickers (6 pieces)",
    price: 5.95,
    image: "../static/items/hotAppetizers/Gyoza.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Shumai",
    description: "lightly fried shrimp and vegetable dumplings (6 pieces)",
    price: 5.95,
    image: "../static/items/hotAppetizers/Shumai.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Dynamite",
    description:
      "baked crab, scallop, shrimp, onion, mushroom with dynamite sauce",
    price: 9.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Lobster Dynamite",
    description: "baked lobster with dynamite sauce",
    price: 12.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 12,
    name: "Soft Shell Crab",
    description: "fried soft shell crab with ponzu sauce",
    price: 9.95,
    image: "../static/items/hotAppetizers/SoftShellCrab.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Deep Fried Tofu",
    description: "fried tofu with masago, bonito, green onion",
    price: 5.95,
    image: "../static/items/hotAppetizers/DeepFriedTofu.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Shishito Peppers",
    description: "",
    price: 6.95,
    image: "../static/items/hotAppetizers/Shishito.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Steamed Dimsum (5 Pieces)",
    description: "",
    price: 5.95,
    image: "../static/items/hotAppetizers/Dimsum.jpg",
    largeImage: "",
  },

  {
    id: 16,
    name: "Sesami Chicken",
    description: "lightly fried chicken marinated in sesame sauce",
    price: 6.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 17,
    name: "Salmon Collar",
    description: "broiled salmon collar",
    price: 6.95,
    image: "../static/items/hotAppetizers/SalmonCollar.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Yellowtail Collar",
    description: "broiled yellowtail collar",
    price: 8.95,
    image: "../static/items/hotAppetizers/YellowtailCollar.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Yakitori",
    description: "Japanese style skewers, shrimp, chicken, and beef",
    price: 5.95,
    image: "../static/items/hotAppetizers/Yakitori.jpg",
    largeImage: "",
  },
  {
    id: 20,
    name: "Spicy Tofu",
    description: " ",
    price: 6.95,
    image: "../static/items/hotAppetizers/SpicyTofu.jpg",
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
                <Typography variant="h4" id="HotAppetizers">
                  Hot Appetizers
                </Typography>
              </div>
            </Grid>

            {hotAppetizers.map((hotAppetizer) => (
              <Grid item xs={12} sm={6} key={hotAppetizer.name}>
                <CardItem
                  itemName={{ text: `${hotAppetizer.name}` }}
                  title={{ text: `${hotAppetizer.name}` }}
                  itemDescription={{ text: `${hotAppetizer.description}` }}
                  itemPrice={{ price: `${hotAppetizer.price}` }}
                  itemImage={{ image: `${hotAppetizer.image}` }}
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
