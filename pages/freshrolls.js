import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItemRolls";
import Dropdown from "../components/Dropdown";
// import { Modal } from "@material-ui/core";
import OrderWith from "../components/OrderWith";

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

const freshRolls = [
  {
    id: 1,
    name: "X Girl Friend Roll",
    descriptionIn: "spicy crabmeat",
    descriptionOut: "tuna, salmon, yellowtail, green onion, masago.",
    descriptionSauce: "chili oil",
    price: 13.95,
    image: "../static/items/freshRolls/XGirlFriendRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Aguachile Roll",
    descriptionIn: "shrimp, avocado, cucumber.",
    descriptionOut: "shrimp.",
    descriptionSauce: "aguachile sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/AguachileRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Yellowtail Delight Roll",
    descriptionIn: "spicy tuna, cucumber.",
    descriptionOut: "yellowtail, jalapeno, red onion, masago.",
    descriptionSauce: " ponzu sauce.",
    price: 12.99,
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Hawaiian Roll",
    descriptionIn: "spicy tuna, cucumber. ",
    descriptionOut: "Out: tuna, masago, green onion. ",
    descriptionSauce: "goma sauce.",
    price: 12.99,
    image: "../static/items/freshRolls/HawaiianRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Cucumber Sashimi Roll",
    descriptionIn: "four kinds of fish, avocado. ",
    descriptionOut: "cucumber wrap. ",
    descriptionSauce: "yuzu ponzu sauce.",
    price: 12.99,
    image: "../static/items/freshRolls/CucumberSashimiRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Sakura Roll",
    descriptionIn: " tuna, salmon, yellowtail, white fish, crab, asparagus. ",
    descriptionOut: "soy paper wrap.",
    descriptionSauce: "ponzu and house sauce.",
    price: 12.99,
    image: "../static/items/freshRolls/SakuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Sexy Salmon Roll",
    descriptionIn: "salmon, crab, avocado. ",
    descriptionOut: "cucumber wrap. ",
    descriptionSauce: "ponzu sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/SexySalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Lemon Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "salmon, sliced lemon on top. ",
    descriptionSauce: "lemon sauce.",
    price: 11.95,
    image: "../static/items/freshRolls/LemonRoll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Mexican Roll",
    description: "spicy shrimp, crab. ",
    description: "avocado.",
    description: "spicy mayo and sriracha sauce.",

    price: 10.95,
    image: "../static/items/freshRolls/MexicanRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Spicy Albacore Crunch Roll",
    descriptionIn: "shrimp tempura, spicy crab. ",
    descriptionOut: "albacore, fried garlic, tempura crunch. ",
    descriptionSauce: "spicy ponzu sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/SpicyAlbacoreCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Albacore Delight Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "albacore, red onion, green onion, masago.",
    descriptionSauce: "ponzu sauce",
    price: 12.95,
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Mango Tango Roll",
    descriptionIn: "shrimp tempura, cucumber, mango. ",
    descriptionOut: "salmon, avocado. ",
    descriptionSauce: "lemon sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/MangoTangoRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Mango Mania Roll",
    descriptionIn: "mango, cucumber, avocado. ",
    descriptionOut: "salmon, avocado.",
    descriptionSauce: "lemon sauce.",
    price: 12.95,
    image: "../static/items/freshRolls/MangoManiaRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Alaskan Roll",
    descriptionIn: "spicy tuna, cucumber.",
    descriptionOut: "salmon.",
    descriptionSauce: "goma sauce",
    price: 12.95,
    image: "../static/items/freshRolls/AlaskanRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Rainbow Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "four kinds of fish and avocado",
    descriptionSauce: "none",
    price: 12.95,
    image: "../static/items/freshRolls/RainbowRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "911 Roll",
    descriptionIn: "spicy tuna. ",
    descriptionOut: "avocado. ",
    descriptionSauce: "chili oil, hot and sweet sauce",
    price: 10.95,
    image: "../static/items/freshRolls/911Roll.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Red Dragon Roll",
    descriptionIn: "spicy crabmeat, fried jalapeno.",
    descriptionOut: "tuna, jalapeno. ",
    descriptionSauce: "spicy mayo, chili oil.",
    price: 12.95,
    image: "../static/items/freshRolls/RedDragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Baja Roll",
    descriptionIn: "crabmeat, red onion, jalapeno. ",
    descriptionOut: "avocado, jalapeno, cilantro. Sauce: garlic ponzu.",
    descriptionSauce: "garlic ponzu.",
    price: 11.95,
    image: "../static/items/freshRolls/bajaRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Ichiban Roll",
    descriptionIn: "spicy tuna, shrimp, avocado. ",
    descriptionOut: "tuna, masago, green onion, blue crab. ",
    descriptionSauce: "chili oil, and eel sauce.",
    price: 18.95,
    image: "../static/items/freshRolls/IchibanRoll.jpg",
    largeImage: "",
  },
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
              <div className={classes.title}>
                <Typography variant="h4" id="freshrolls">
                  Fresh Rolls
                </Typography>
              </div>
            </Grid>

            {freshRolls.map((freshRoll) => (
              <Grid item xs={12} sm={6} key={freshRoll.id}>
                <CardItem
                  key={freshRoll.id}
                  itemName={{ text: `${freshRoll.name}` }}
                  itemDescriptionIn={{ text: `${freshRoll.descriptionIn}` }}
                  itemDescriptionOut={{ text: `${freshRoll.descriptionOut}` }}
                  itemDescriptionSauce={{
                    text: `${freshRoll.descriptionSauce}`,
                  }}
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
