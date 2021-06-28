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

  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const tempuraRolls = [
  {
    id: 1,
    name: "Lobster & Crab Crunch Roll",
    descriptionIn: "lobster and crab ",
    descriptionOut: "soy paper",
    descriptionSauce: "spicy mayo.",
    price: 14.95,
    image: "../static/items/tempuraRolls/LobsterCrabCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Spicy Shrimp & Crab Crunch Roll",
    descriptionIn: "spicy shrimp, crab",
    descriptionOut: "tempura.",
    descriptionSauce: "hot sauce",
    price: 9.95,
    image: "../static/items/tempuraRolls/SpicyShrimpCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "California Tempura Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "tempura.",
    descriptionSauce: "eel sauce.",
    price: 9.95,
    image: "../static/items/tempuraRolls/CaliforniaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Avocado Crunch Roll",
    descriptionIn: "avocado. ",
    descriptionOut: "seaweed.",
    descriptionSauce: "spicy mayo, eel sauce.",
    price: 9.95,
    image: "../static/items/tempuraRolls/AvocadoCrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Shrimp Tempura Roll",
    descriptionIn: "shrimp tempura, crabmeat.",
    descriptionOut: "avocado.",
    descriptionSauce: "spicy mayo, eel sauce",
    price: 10.95,
    image: "../static/items/tempuraRolls/ShrimpTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Crunch Roll",
    descriptionIn: "shrimp tempura, avocado.",
    descriptionOut: "tempura crunch.",
    descriptionSauce: "eel sauce.",
    price: 10.95,
    image: "../static/items/tempuraRolls/CrunchRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Amber Roll",
    descriptionIn: "shrimp tempura. ",
    descriptionOut: "spicy crabmeat.",
    descriptionSauce: "none",
    price: 12.95,
    image: "../static/items/tempuraRolls/AmberRoll.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Spicy Tuna Tempura Roll",
    descriptionIn: "spicy tuna.",
    descriptionOut: "tempura.",
    descriptionSauce: "spicy mayo and eel sauce.",
    price: 9.95,
    image: "../static/items/tempuraRolls/SpicyTunaTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 9,
    name: "Monkey Roll",
    descriptionIn: "mushroom, spicy tuna, cream cheese.",
    descriptionOut: "",
    descriptionSauce: "spicy mayo and eel sauce.",
    price: 9.95,
    image: "../static/items/tempuraRolls/MonkeyRoll.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Dragon Roll",
    descriptionIn: "shrimp tempura, spicy tuna. ",
    descriptionOut: "Out: eel, avocado. ",
    descriptionSauce: "eel sauce.",
    price: 13.95,
    image: "../static/items/tempuraRolls/DragonRoll.jpg",
    largeImage: "",
  },

  {
    id: 11,
    name: "Vegas Roll",
    descriptionIn: "deep fried spicy seafood, avocado, cream cheese.",
    descriptionOut: "seaweed.",
    descriptionSauce: "eel and hot sauce.",
    price: 10.95,
    image: "../static/items/tempuraRolls/VegasRoll.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Spider Roll",
    descriptionIn:
      "deep fried soft shell crab, gobo, avocado, masago, crabmeat. ",
    descriptionOut: "seaweed.",
    descriptionSauce: "eel sauce",
    price: 12.95,
    image: "../static/items/tempuraRolls/SpiderRoll.jpg",
    largeImage: "",
  },
  {
    id: 13,
    name: "Popcorn Lobster Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "deep fried langostino.",
    descriptionSauce: "eel sauce.",
    price: 14.95,
    image: "../static/items/tempuraRolls/PopcornLobsterRoll.jpg",
    largeImage: "",
  },
  {
    id: 14,
    name: "Crunch Scallop Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "deep fried scallops.",
    descriptionSauce: "spicy mayo and eel sauce.",
    price: 12.95,
    image: "../static/items/tempuraRolls/CrunchScallopRoll.jpg",
    largeImage: "",
  },
  {
    id: 15,
    name: "Tiger Roll",
    descriptionIn: "shrimp tempura, spicy tuna.",
    descriptionOut: "avocado, spicy tuna.",
    descriptionSauce: "spicy mayo, eel sauce.",
    price: 11.95,
    image: "../static/items/tempuraRolls/TigerRoll.jpg",
    largeImage: "",
  },
  {
    id: 16,
    name: "Fire Fire Roll",
    descriptionIn: "spicy crab.",
    descriptionOut: "spicy tuna, spicy crunch, jalapeno.",
    descriptionSauce: "chili oil.",
    price: 11.95,
    image: "../static/items/tempuraRolls/FireFireRoll.jpg",
    largeImage: "",
  },
  {
    id: 17,
    name: "Sun Burn Roll",
    descriptionIn: "Spicy mixed seafood, spicy crab. ",
    descriptionOut: "albacore, fried onions.",
    descriptionSauce: "garlic ponzu sauce",
    price: 11.95,
    image: "../static/items/tempurarolls/SunBurnRoll.jpg",
    largeImage: "",
  },
  {
    id: 18,
    name: "Heart Attack Roll",
    descriptionIn: "Spicy tuna, cream cheese, deep fried jalapeno.",
    descriptionOut: "tempura.",
    descriptionSauce: "spicy mayo and eel sauce.",
    price: 8.95,
    image: "../static/items/tempurarolls/HeartAttack.jpg",
    largeImage: "",
  },
  {
    id: 19,
    name: "Vegetable Tempura Roll",
    descriptionIn: "vegetable tempura.",
    descriptionOut: "seaweed.",
    descriptionSauce: "none.",
    price: 8.95,
    image: "../static/items/tempurarolls/vegetableTempuraRoll.jpg",
    largeImage: "",
  },
  {
    id: 20,
    name: "Sean's Roll",
    descriptionIn: "tempura shrimp, crabmeat. ",
    descriptionOut: "salmon, avocado. ",
    descriptionSauce: "spicy mayo sauce",
    price: 11.95,
    image: "../static/items/tempurarolls/seanRoll.jpg",
    largeImage: "",
  },
  {
    id: 21,
    name: "Hot Night Roll",
    descriptionIn: "crabmeat, avocado, shrimp tempura. ",
    descriptionOut: "spicy tuna, jalapeno, tempura crunch. ",
    descriptionSauce: "spicy mayo and eel sauce.",
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
                  itemDescriptionIn={{ text: `${tempuraRoll.descriptionIn}` }}
                  itemDescriptionOut={{ text: `${tempuraRoll.descriptionOut}` }}
                  itemDescriptionSauce={{
                    text: `${tempuraRoll.descriptionSauce}`,
                  }}
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
