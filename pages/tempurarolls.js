import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

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

const tempuraRolls = [
  {
    id: 1,
    name: "Lobster & Crab Crunch Roll",
    description: "deep fried lobster and crab, soy paper",
    price: 14.95,
    image: "../static/items/tempuraRolls/LobsterCrabCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Spicy Shrimp & Crab Crunch Roll",
    description: "spicy shrimp, crab, hot sauce on top",
    price: 9.95,
    image: "../static/items/tempuraRolls/SpicyShrimpCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "California Tempura Roll",
    description: "deep fried California roll and eel sauce",
    price: 9.95,
    image: "../static/items/tempuraRolls/CaliforniaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Avocado Crunch Roll",
    description: "deep fried avocado roll, spicy mayo, and eel sauce.",
    price: 9.95,
    image: "../static/items/tempuraRolls/AvocadoCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Shrimp Tempura Roll",
    description:
      "shrimp tempura topped with avocado with spicy mayo and eel sauce",
    price: 10.95,
    image: "../static/items/tempuraRolls/ShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Crunch Roll",
    description: "shrimp tempura with avocado and crunch on top",
    price: 10.95,
    image: "../static/items/tempuraRolls/CrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Amber Roll",
    description: "shrimp tempura topped with spicy crab",
    price: 12.95,
    image: "../static/items/tempuraRolls/AmberRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Spicy Tuna Tempura Roll",
    description: "deep fried spicy tuna roll, spicy mayo and eel",
    price: 9.95,
    image: "../static/items/tempuraRolls/SpicyTunaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Monkey Roll",
    description: "mushroom with spicy tuna deep fried, spicy mayo and eel",
    price: 9.95,
    image: "../static/items/tempuraRolls/MonkeyRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Dragon Roll",
    description:
      "shrimp tempura, eel and spicy tuna topped with avocado and eel sauce",
    price: 13.95,
    image: "../static/items/tempuraRolls/DragonRoll.jpg",
    largeImage: "",
  },

  {
    id: 11,
    name: "Vegas Roll",
    description:
      "Deep fried spicy seafood with avocado, cream cheese, topped with eel and hot sauce",
    price: 10.95,
    image: "../static/items/tempuraRolls/VegasRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Spider Roll",
    description:
      "Deep fried, soft shell crab, gobo, avocado, masago, and eel sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpiderRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Popcorn Lobster Roll",
    description: "California roll topped with deep fried lobster and eel sauce",
    price: 13.95,
    image: "../static/items/tempuraRolls/PopcornLobsterRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Crunch Scallop Roll",
    description: "California roll, deep fried scallop on top",
    price: 12.95,
    image: "../static/items/tempuraRolls/CrunchScallopRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Tiger Roll",
    description:
      "shrimp tempura & spicy tuna, avocado topped with spicy mayo, and eel sauce.",
    price: 11.95,
    image: "../static/items/tempuraRolls/TigerRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Fire Fire Roll",
    description:
      "spicy crab, spicy tuna, spicy crunch and jalapeno with chili oil",
    price: 11.95,
    image: "../static/items/tempuraRolls/FireFireRoll.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Sun Burn Roll",
    description:
      "Spicy mixed seafood, albacore, deep fried onion, and garlic ponzu sauce",
    price: 11.95,
    image: "../static/items/tempurarolls/SunBurnRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Heart Attack Roll",
    description:
      "Spicy tuna, cream cheese, deep fried jalapeno, with eel and spicy mayo sauce",
    price: 8.95,
    image: "../static/items/tempurarolls/HeartAttack.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Vegetable Tempura Roll",
    description: "Avocado, cucumber, and fried vegetables",
    price: 8.95,
    image: "../static/items/tempurarolls/vegetableTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 20,
    name: "Sean's Roll",
    description:
      "Salmon, avocado, tempura shrimp, crabmeat, with spicy mayo sauce",
    price: 11.95,
    image: "../static/items/tempurarolls/seanRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Hot Night Roll",
    description: "Spicy tuna with crunch on top, shrimp tempura and crabmeat.",
    price: 11.95,
    image: "../static/items/tempurarolls/hotNightRoll.jpg",
    largeImage: "",
  },
];

export default function TempuraRolls() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="freshrolls">
                  Tempura Rolls
                </Typography>
              </div>
            </Grid>

            {tempuraRolls.map((tempuraRoll) => (
              <Grid item xs={12} sm={6} key={tempuraRoll.name}>
                <CardItem
                  itemName={{ text: `${tempuraRoll.name}` }}
                  title={{ text: `${tempuraRoll.name}` }}
                  itemDescription={{ text: `${tempuraRoll.description}` }}
                  itemPrice={{ price: `${tempuraRoll.price}` }}
                  itemImage={{ image: `${tempuraRoll.image}` }}
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
