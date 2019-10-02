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

const sashimicombos = [
  {
    id: 1,
    name: "Small Combo",
    description: "6 pieces of sashimi",
    price: 14.95,
    image: "",
    largeImage: ""
  },
  {
    id: 2,
    name: "Medium Combo",
    description: "16 pieces of sashimi",
    price: 34.95,
    image: "",
    largeImage: ""
  },
  {
    id: 3,
    name: "Large Combo",
    description: "24 pieces of sashimi",
    price: 59.95,
    image: "",
    largeImage: ""
  }
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
                  Sashimi Combo
                </Typography>
              </div>
            </Grid>

            {sashimicombos.map(sashimicombo => (
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
