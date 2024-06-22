import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
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

const kidsitems = [
  {
    id: 1,
    name: "Hot Tea",
    description: " ",
    price: 1.95,
    image: "../static/items/beverages/hottea.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Soda",
    description: "pepsi, diet pepsi, sierra mist, dr.pepper, lemonade",
    price: 2.95,
    image: "../static/items/beverages/soda.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Sparkling Water ",
    description: "Perrier",
    price: 3.5,
    image: "../static/items/beverages/perrier.jpg",
    largeImage: "",
  },
  {
    id: 4,
    name: "Bottled Water ",
    description: "VOSS OR FIJI",
    price: 3.5,
    image: "../static/items/beverages/bottle.jpg",
    largeImage: "",
  },
  {
    id: 5,
    name: "Iced Tea ",
    description: "Regular or Raspberry",
    price: 2.95,
    image: "../static/items/beverages/raspberry.jpg",
    largeImage: "",
  },

  {
    id: 6,
    name: "Ramune",
    description: "Japanese carbonated soft drink",
    price: 2.95,
    image: "../static/items/beverages/ramune.jpg",
    largeImage: "",
  },
  {
    id: 7,
    name: "Iced Green Tea",
    description: " ",
    price: 2.95,
    image: "../static/items/beverages/icedgreentea.jpg",
    largeImage: "",
  },
  {
    id: 8,
    name: "Arnold Palmer",
    description: "non-alcoholic ",
    price: 3.5,
    image: "../static/items/beverages/arnoldpalmer.jpg",
    largeImage: "",
  },
  {
    id: 10,
    name: "Shirley Temple",
    description: "non-alcoholic",
    price: 3.5,
    image: "../static/items/beverages/sherley.jpg",
    largeImage: "",
  },
  {
    id: 11,
    name: "Strawberry Lemonade",
    description: " ",
    price: 3.5,
    image: "../static/items/beverages/strawberrylemonade.jpg",
    largeImage: "",
  },
  {
    id: 12,
    name: "Apple Juice",
    description: " ",
    price: 2.95,
    image: "../static/items/beverages/applejuice.jpg",
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
                <Typography variant="h4" id="kidsMenu">
                  BEVERAGES
                </Typography>
              </div>
            </Grid>

            {kidsitems.map((kidsitem) => (
              <Grid item xs={12} sm={6} key={kidsitem.name}>
                <CardItem
                  itemName={{ text: `${kidsitem.name}` }}
                  title={{ text: `${kidsitem.name}` }}
                  itemDescription={{ text: `${kidsitem.description}` }}
                  itemPrice={{ price: `${kidsitem.price}` }}
                  itemImage={{ image: `${kidsitem.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
