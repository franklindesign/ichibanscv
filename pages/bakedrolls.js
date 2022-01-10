import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItemRolls";
import Dropdown from "../components/Dropdown";
import UberEats from "../components/UberEats";
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

const bakedRolls = [
  {
    id: 1,
    name: "Snow Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked white fish, soy paper.",
    descriptionSauce: "none",
    price: 12.95,
    image: "../static/items/bakedRolls/SnowRoll.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Baked Crab Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked snow crab.",
    descriptionSauce: "none",
    price: 15.95,
    image: "../static/items/bakedRolls/BakedCrabRoll.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Baked Salmon Roll",
    descriptionIn: "crabmeat, avocado. ",
    descriptionOut: "baked salmon.",
    descriptionSauce: "eel sauce.",
    price: 12.95,
    image: "../static/items/bakedRolls/BakedSalmonRoll.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Sunset Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked eel, avocado.  ",
    descriptionSauce: "eel sauce.",
    price: 13.95,
    image: "../static/items/bakedRolls/SunsetRoll.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Volcano Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked scallop, shrimp, crab.",
    descriptionSauce: "creamy sauce.",
    price: 12.95,
    image: "../static/items/bakedRolls/VolcanoRoll.jpg",
    largeImage: "",
  },
  {
    id: 6,
    name: "Caterpillar Roll",
    descriptionIn: "eel, cucumber.",
    descriptionOut: "avocado.",
    descriptionSauce: "eel sauce.",
    price: 13.95,
    image: " ../static/items/bakedRolls/CaterpillarRoll.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Lobster Roll",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked lobster, masago.",
    descriptionSauce: "lobster sauce.",
    price: 16.95,
    image: "../static/items/bakedRolls/LobsterRoll.jpg",
    largeImage: "",
  },

  {
    id: 8,
    name: "BSCR",
    descriptionIn: "crabmeat, avocado.",
    descriptionOut: "baked scallop, masago",
    descriptionSauce: "eel sauce",
    price: 12.95,
    image: "../static/items/bakedRolls/BSCRoll.jpg",
    largeImage: "",
  },
];

export default function BakedRolls() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="bakedrolls">
                  Baked Rolls
                </Typography>
              </div>
            </Grid>
            {bakedRolls.map((bakedRoll) => (
              <Grid item xs={12} sm={6} key={bakedRoll.name}>
                <CardItem
                  itemName={{ text: `${bakedRoll.name}` }}
                  title={{ text: `${bakedRoll.name}` }}
                  itemDescriptionIn={{ text: `${bakedRoll.descriptionIn}` }}
                  itemDescriptionOut={{ text: `${bakedRoll.descriptionOut}` }}
                  itemDescriptionSauce={{
                    text: `${bakedRoll.descriptionSauce}`,
                  }}
                  itemPrice={{ price: `${bakedRoll.price}` }}
                  itemImage={{ image: `${bakedRoll.image}` }}
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
