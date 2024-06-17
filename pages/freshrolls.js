import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItemRolls";
import Dropdown from "../components/Dropdown";
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
    name: "Ichiban Roll",
    descriptionIn: "spicy tuna, shrimp, avocado. ",
    descriptionOut: "tuna, blue crab, masago, green onions. ",
    descriptionSauce: "chili oil, and eel sauce.",
    price: 19.95,
    image: "../static/items/freshRolls/IchibanRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Love Roll",
    descriptionIn: "spicy yellowtail, cucumber, soy paper. ",
    descriptionOut: "avocado, jalapeno, masago, green onions ",
    descriptionSauce: "yuzu and chili oil",
    price: 18.95,
    image: "../static/items/freshRolls/LoveRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sakura Roll",
    descriptionIn: " salmon, yellowtail, white fish, tuna, crab, avocado. ",
    descriptionOut: "soy paper wrap.",
    descriptionSauce: "ponzu and house sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/SakuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Valentine Roll",
    descriptionIn: "crabmeat, shrimp, tuna, avocado",
    descriptionOut: "soy paper wrap.",
    descriptionSauce: "chili oil and eel sauce",
    price: 11.95,
    image: "../static/items/freshRolls/ValentineRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Albacore Delight Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "albacore, red onions, green onions, masago.",
    descriptionSauce: "ponzu sauce",
    price: 16.95,
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Yellowtail Delight Roll",
    descriptionIn: "spicy tuna, cucumber.",
    descriptionOut: "yellowtail, jalapeno, red onions, masago.",
    descriptionSauce: "ponzu sauce.",
    price: 18.95,
    image: "../static/items/freshRolls/YellowtailDelightRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Aguachile Roll",
    descriptionIn: "spicy shrimp, avocado, cucumber.",
    descriptionOut: "shrimp on top",
    descriptionSauce: "aguachile sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/AguachileRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "911 Roll",
    descriptionIn: "spicy tuna, cucumber",
    descriptionOut: "avocado.",
    descriptionSauce: "chili oil, hot, and sweet sauce",
    price: 11.95,
    image: "../static/items/freshRolls/911Roll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "X Girl Friend Roll",
    descriptionIn: "spicy crabmeat",
    descriptionOut: "tuna, salmon, yellowtail, green onion, masago.",
    descriptionSauce: "eel sauce and chili oil",
    price: 17.95,
    image: "../static/items/freshRolls/XGirlFriendRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Cucumber Sashimi Roll",
    descriptionIn: "four kinds of fish, avocado.",
    descriptionOut: "cucumber wrap.",
    descriptionSauce: "yuzu ponzu sauce.",
    price: 13.95,
    image: "../static/items/freshRolls/CucumberSashimiRoll.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Sexy Salmon Roll",
    descriptionIn: "salmon, crabmeat, avocado.",
    descriptionOut: "cucumber wrap. ",
    descriptionSauce: "ponzu sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/SexySalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Spicy Albacore Crunch Roll",
    descriptionIn: "shrimp tempura, spicy crabmeat.",
    descriptionOut: "albacore, fried garlic, tempura crunch. ",
    descriptionSauce: "spicy ponzu sauce.",
    price: 17.95,
    image: "../static/items/freshRolls/SpicyAlbacoreCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Red Dragon Roll",
    descriptionIn: "spicy crabmeat, fried jalapeno.",
    descriptionOut: "tuna, jalapeno. ",
    descriptionSauce: "spicy mayo, chili oil.",
    price: 16.95,
    image: "../static/items/freshRolls/RedDragonRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Mango Tango Roll",
    descriptionIn: "shrimp tempura, cucumber, mango.",
    descriptionOut: "salmon, avocado. ",
    descriptionSauce: "lemon sauce.",
    price: 16.95,
    image: "../static/items/freshRolls/MangoTangoRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Mango Mania Roll",
    descriptionIn: "mango, cucumber, avocado.",
    descriptionOut: "salmon, mango.",
    descriptionSauce: "lemon sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MangoManiaRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Mexican Roll",
    descriptionIn: "spicy shrimp, crabmeat.",
    descriptionOut: "avocado.",
    descriptionSauce: "spicy mayo and sriracha sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/MexicanRoll.jpg",
    largeImage: "",
  },

  {
    id: 17,
    name: "Hawaiian Roll",
    descriptionIn: "spicy tuna, cucumber.",
    descriptionOut: "tuna, masago, green onions. ",
    descriptionSauce: "goma sauce.",
    price: 16.95,
    image: "../static/items/freshRolls/HawaiianRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Alaskan Roll",
    descriptionIn: "spicy tuna, cucumber.",
    descriptionOut: "salmon.",
    descriptionSauce: "goma sauce",
    price: 16.95,
    image: "../static/items/freshRolls/AlaskanRoll.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Baja Roll",
    descriptionIn: "crabmeat, red onion, jalapeno. ",
    descriptionOut: "avocado, jalapeno, cilantro.  ",
    descriptionSauce: "garlic ponzu sauce.",
    price: 14.95,
    image: "../static/items/freshRolls/bajaRoll.jpg",
    largeImage: "",
  },

  {
    id: 20,
    name: "Lemon Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "salmon, sliced lemon on top. ",
    descriptionSauce: "lemon sauce.",
    price: 15.95,
    image: "../static/items/freshRolls/LemonRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Elmo Roll",
    descriptionIn: "spicy shrimp, crab, avocado, soy paper ",
    descriptionOut:
      "seared cajun tuna, masago, green onions, crispy onions on top",
    descriptionSauce: "chili oil and spicy ponzu sauce",
    price: 18.95,
    image: "../static/items/freshRolls/ElmoRoll.jpg",
    largeImage: "",
  },
  {
    id: 22,
    name: "Rainbow Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "four kinds of fish and avocado",
    descriptionSauce: "none",
    price: 16.95,
    image: "../static/items/freshRolls/RainbowRoll.jpg",
    largeImage: "",
  },
  {
    id: 23,
    name: "Albacore Special Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "albacore, masago, microgreens mix",
    descriptionSauce: "truffle oil, garlic, chili oil, and ponzu sauce",
    price: 18.95,
    image: "../static/items/freshRolls/AlbacoreSpecial.jpg",
    largeImage: "",
  },
  {
    id: 24,
    name: "Black Mamba Roll",
    descriptionIn: "spicy octopus, cucumber.",
    descriptionOut: "avocado, jalapeno, black tobiko on top",
    descriptionSauce: "yuzu, and chili oil.",
    price: 19.95,
    image: "../static/items/freshRolls/BlackMamba.jpg",
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
                  FRESH ROLLS
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
