import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";
import OrderWith from "../components/OrderWith";
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
    name: "Chicken Bowl",
    description: " ",
    price: 7.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 2,
    name: "Beef Bowl",
    description: " ",
    price: 9.95,
    image: NoImage,
    largeImage: "",
  },
  {
    id: 3,
    name: "Bulgogi Bowl",
    description: " ",
    price: 9.95,
    image: NoImage,
    largeImage: "",
  },
];

export default function KidsMenu() {
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
                  KIDS' MENU
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
          <OrderWith></OrderWith>
        </div>
      </Container>
    </Layout>
  );
}
