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
    name: "Albacore (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Big Scallop (sashimi)",
    description: "5-6 pieces",
    price: "19.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Cajun Tuna (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 4,
    name: "Escolar (ono sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 5,
    name: "Halibut (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 6,
    name: "Octopus (sashimi)",
    description: "5-6 pieces",
    price: "14.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 7,
    name: "Tuna (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 8,
    name: "Salmon (sashimi)",
    description: "5-6 pieces",
    price: "16.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 9,
    name: "Yellowtail (sashimi)",
    description: "5-6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Halibut (sashimi)",
    description: "6 pieces",
    price: "18.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 10,
    name: "Chu-toro (sashimi)",
    description: "6 pieces",
    price: "24.95",
    image: NoImage,
    largeImage: "",
  },
  {
    id: 11,
    name: "Otoro (sashimi)",
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
                  SASHIMI
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
