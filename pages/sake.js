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

const sakes = [
  {
    id: 1,
    name: "House Hot Sake (Small)",
    description: "",
    price: 3.5,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "House Hot Sake (Large)",
    description: " ",
    price: 6.5,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Plum Hot Sake (Large)",
    description: " ",
    price: 8.5,
    image: "",
    largeImage: ""
  },
  {
    id: 4,
    name: "Soju",
    description: "Chamisul Original (375ml)",
    price: 12,
    image: "",
    largeImage: ""
  },
  {
    id: 5,
    name: "Soju (Flavored)",
    description: "Pineapple, Peach, or Blueberry (375ml)",
    price: 12,
    image: "",
    largeImage: ""
  },
  {
    id: 6,
    name: "Nigori",
    description: "cold sake, (300ml)",
    price: 12,
    image: "",
    largeImage: ""
  },
  {
    id: 7,
    name: "Ginjo",
    description: "cold sake, (300ml)",
    price: 12,
    image: "",
    largeImage: ""
  },
  {
    id: 8,
    name: "Kikusui (Small)",
    description: "cold sake, (375ml)",
    price: 16,
    image: "",
    largeImage: ""
  },
  {
    id: 9,
    name: "Kikusui (Large)",
    description: "cold sake, (720ml)",
    price: 30,
    image: "",
    largeImage: ""
  },

  {
    id: 10,
    name: "Kubota",
    description:
      "premium cold sake (300ml), Junmai Daiginjo, soft and smooth texture",
    price: "Ask Server",
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
                  Sake
                </Typography>
              </div>
            </Grid>

            {sakes.map(sake => (
              <Grid item xs={12} sm={6} key={sake.name}>
                <CardItem
                  itemName={{ text: `${sake.name}` }}
                  title={{ text: `${sake.name}` }}
                  itemDescription={{ text: `${sake.description}` }}
                  itemPrice={{ price: `${sake.price}` }}
                  itemImage={{ image: `${sake.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
