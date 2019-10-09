import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

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

const kidsitems = [
  {
    id: 1,
    name: "Hot Tea",
    description: " ",
    price: 1.95,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Soda",
    description: "pepsi, diet pepsi, sierra mist, dr.pepper, lemonade",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "VOSS Sparkling Water",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "VOSS Bottled Water",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 5,
    name: "Iced Tea Regular",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 6,
    name: "Iced Tea Raspberry",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 7,
    name: "Ramune",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 8,
    name: "Iced Green Tea",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 9,
    name: "Arnold Palmer",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 10,
    name: "Shirley Temple",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 11,
    name: "Strawberry Lemonade",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  },
  {
    id: 12,
    name: "Apple Juice",
    description: " ",
    price: 2.95,
    image: "",
    largeImage: ""
  }
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
                  Beverages
                </Typography>
              </div>
            </Grid>

            {kidsitems.map(kidsitem => (
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
