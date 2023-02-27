import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";

const NoImage = "../static/items/NoImageSashimi.jpg";

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

const sashimis = [
  {
    id: 1,
    name: "Tuna (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Cajun Tuna",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Octopus",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Salmon",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Escolar (ono)",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Albacore",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Halibut",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Yellowtail",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Big Scallop",
    description: "5-6 pieces",
    price: "19.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Otoro",
    description: "6 pieces",
    price: "29.95",
    image: NoImage,
    largeImage: "",
  },
];

export default function Sashimis() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Dropdown></Dropdown>
            <Grid item xs={12}>
              <div className={classes.ayce}>
                <Typography variant="h4" id="sashimis">
                  Sashimi
                </Typography>
              </div>
            </Grid>

            {sashimis.map((sashimi) => (
              <Grid item xs={12} sm={6} key={sashimi.name}>
                <CardItem
                  itemName={{ text: `${sashimi.name}` }}
                  title={{ text: `${sashimi.name}` }}
                  itemDescription={{ text: `${sashimi.description}` }}
                  itemPrice={{ price: `${sashimi.price}` }}
                  itemImage={{ image: `${sashimi.image}` }}
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
