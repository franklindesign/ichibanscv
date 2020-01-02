import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
// import { Modal } from "@material-ui/core";
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

const freshRolls = [
  {
    id: 1,
    name: "X Girl Friend Roll",
    description:
      "spicy crab, tuna, salmon, yellowtail, green onion, masago, chili oil",
    price: 13.95,
    image: "../static/items/freshRolls/XGirlFriendRoll.jpg",
    largeImage: ""
  },
  {
    id: 2,
    name: "Aguachile Roll",
    description: "shrimp, avocado, cucumber, aguachile sauce",
    price: 12.95,
    image: "../static/items/freshRolls/AguachileRoll.jpg",
    largeImage: ""
  },
  {
    id: 3,
    name: "Yellowtail Delight Roll",
    description:
      "spicy tuna, cucumber, yellowtail, jalapeno, red onion, masago, and yuzu or ponzu sauce",
    price: 12.99,
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
    largeImage: ""
  },
  {
    id: 4,
    name: "Hawaiian Roll",
    description:
      "spicy tuna roll topped with tuna, masago, green onion and spicy goma sauce",
    price: 12.99,
    image: "../static/items/freshRolls/HawaiianRoll.jpg",
    largeImage: ""
  },
  {
    id: 5,
    name: "Cucumber Sashimi Roll",
    description: "four kinds of fish, avocado, cucumber wrap",
    price: 12.99,
    image: "../static/items/freshRolls/CucumberSashimiRoll.jpg",
    largeImage: ""
  },
  {
    id: 6,
    name: "Sakura Roll",
    description:
      "tuna, salmon, yellowtail, white fish, crab, asparagus, soy paper wrap, ponzu or yuzu sauce",
    price: 12.99,
    image: "../static/items/freshRolls/SakuraRoll.jpg",
    largeImage: ""
  },
  {
    id: 7,
    name: "Sexy Salmon Roll",
    description: "salmon, crab, avocado, cucumber wrap, and ponzu sauce",
    price: 12.95,
    image: "../static/items/freshRolls/SexySalmonRoll.jpg",
    largeImage: ""
  },
  {
    id: 8,
    name: "Lemon Roll",
    description: "California roll, salmon, sliced lemon, and mustard sauce",
    price: 11.95,
    image: "../static/items/freshRolls/LemonRoll.jpg",
    largeImage: ""
  },
  {
    id: 9,
    name: "Mexican Roll",
    description: "spicy shrimp, crab, avocado, spicy mayo and hot sauce",
    price: 10.95,
    image: "../static/items/freshRolls/MexicanRoll.jpg",
    largeImage: ""
  },
  {
    id: 10,
    name: "Spicy Albacore Crunch Roll",
    description:
      "shrimp tempura, crunch crab, albacore, deep fried garlic, and spicy ponzu sauce",
    price: 11.95,
    image: "../static/items/freshRolls/SpicyAlbacoreCrunchRoll.jpg",
    largeImage: ""
  },
  {
    id: 11,
    name: "Albacore Delight Roll",
    description:
      "albacore, crab, red onion, green onion, masago, garlic, and ponzu sauce",
    price: 11.95,
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
    largeImage: ""
  },
  {
    id: 12,
    name: "Mango Tango Roll",
    description:
      "shrimp tempura, cucumber, mango, salmon, avocado, goma and sweet mayo sauce",
    price: 10.95,
    image: "../static/items/freshRolls/MangoTangoRoll.jpg",
    largeImage: ""
  },
  {
    id: 13,
    name: "Mango Mania Roll",
    description:
      "avocado, cucumber, mango, fresh salmon on top, goma and sweet mayo sauce",
    price: 10.95,
    image: "../static/items/freshRolls/MangoManiaRoll.jpg",
    largeImage: ""
  },
  {
    id: 14,
    name: "Alaskan Roll",
    description: "spicy tuna roll topped with salmon, and spicy goma sauce",
    price: 11.95,
    image: "../static/items/freshRolls/AlaskanRoll.jpg",
    largeImage: ""
  },
  {
    id: 15,
    name: "Rainbow Roll",
    description: "California roll topped with four kinds of fish and avocado",
    price: 12.95,
    image: "../static/items/freshRolls/RainbowRoll.jpg",
    largeImage: ""
  },
  {
    id: 16,
    name: "911 Roll",
    description: "spicy tuna, avocado, chili oil, hot and sweet sauce",
    price: 10.95,
    image: "../static/items/freshRolls/911Roll.jpg",
    largeImage: ""
  },
  {
    id: 17,
    name: "Red Dragon Roll",
    description:
      "spicy California roll, deep fried jalapeno, tuna, spicy mayo, chili oil, and hot sauce",
    price: 12.95,
    image: "../static/items/freshRolls/RedDragonRoll.jpg",
    largeImage: ""
  },
  {
    id: 18,
    name: "Sun-Burn Roll",
    description:
      "Spicy mixed seafood, albacore, deep fried onion, and garlic ponzu sauce",
    price: 11.95,
    image: "../static/items/freshRolls/SunBurnRoll.jpg",
    largeImage: ""
  },
  {
    id: 19,
    name: "Baja Roll (NEW!)",
    description:
      "Crab meat, Jalapeno, red onion, avocado, cilantro with garlic ponzu.",
    price: 11.95,
    image: "../static/items/freshRolls/bajaRoll.jpg",
    largeImage: ""
  },
  {
    id: 20,
    name: "Superman Burrito Roll (NEW!)",
    description:
      "Spicy tuna, shrimp, asparagus tempura, avocado, cucumber, soy paper, with eel & spicy mayo sauce.",
    price: 10.95,
    image: "../static/items/freshRolls/SupermanBurrito.jpg",
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
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="freshrolls">
                  Fresh Rolls
                </Typography>
              </div>
            </Grid>

            {freshRolls.map(freshRoll => (
              <Grid item xs={12} sm={6} key={freshRoll.id}>
                <CardItem
                  key={freshRoll.id}
                  itemName={{ text: `${freshRoll.name}` }}
                  itemDescription={{ text: `${freshRoll.description}` }}
                  itemPrice={{ price: `${freshRoll.price}` }}
                  itemImage={{ image: `${freshRoll.image}` }}
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
