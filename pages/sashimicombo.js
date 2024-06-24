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
    marginTop: 100,
    marginBottom: 50,
    height: "100vh"
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const sashimicombos = [
  {
    id: 1,
    name: "Small Combo",
    description: "6 pieces of sashimi",
    price: 18.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 2,
    name: "Medium Combo",
    description: "16 pieces of sashimi",
    price: 39.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
  {
    id: 3,
    name: "Large Combo",
    description: "24 pieces of sashimi",
    price: 69.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },{
    id: 4,
    name: "Large Combo",
    description: "24 pieces of sashimi + sweet shrimp & uni",
    price: 89.95,
    image: "../static/items/NoImage.jpg",
    largeImage: "",
  },
];

export default function SashimiCombo() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="sashimicombo">
                  SASHIMI COMBO
                </Typography>
              </div>
              <img
                src="../static/items/sashimiCombo/sashimicombo_banner.jpg"
                style={{ width: "100%", marginBottom: 20 }}
              ></img>
            </Grid>

            {sashimicombos.map((sashimicombo) => (
              <Grid item xs={12} sm={6} key={sashimicombo.name}>
                <CardItem
                  itemName={{ text: `${sashimicombo.name}` }}
                  title={{ text: `${sashimicombo.name}` }}
                  itemDescription={{ text: `${sashimicombo.description}` }}
                  itemPrice={{ price: `${sashimicombo.price}` }}
                  itemImage={{ image: `${sashimicombo.image}` }}
                ></CardItem>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
