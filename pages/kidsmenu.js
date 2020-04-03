import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../components/CardItem";
import Dropdown from "../components/Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
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
    price: 4.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Beef Bowl",
    description: " ",
    price: 4.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Bulgogi Bowl",
    description: " ",
    price: 5.95,
    image: "../static/items/NoImage.jpg",
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
                  Kid's Menu
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
