import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#000"
  },
  list: {
    listStyleType: "none"
  }
}));

const sushi = [
  "Tuna",
  "Salmon",
  "Escolar(ono)",
  "Albacore",
  "Halibut",
  "Yellowtail",
  "Crab",
  "Egg",
  "Fresh Water Eel",
  "Inari",
  "Mackerel",
  "Octopus",
  "Red Clam",
  "Salmon",
  "Egg",
  "Scallop",
  "Sea Urchin",
  "Shrimp",
  "Smelt Egg",
  "Squid",
  "Sweet Shrimp",
  "White Fish"
];

const listSushi = sushi.map((sushi, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {sushi}
  </li>
));

const specialSushis = [
  "Spicy Tuna (with avocado & chili oil)",
  "Toro",
  "Yellowtail (with jalapeno yuzu sauce)",
  "Escolar (ono, with lemon pepper and fried onion)",
  "Big Scallop",
  "Cajun Tuna",
  "Spanish Mackerel"
];

const listSpecialSushi = specialSushis.map((specialSushi, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {specialSushi}
  </li>
));

const regularRolls = [
  "California Roll",
  "Spicy Tuna Roll",
  "Albacore Roll",
  "Avocado Roll",
  "Crab Roll",
  "Cucumber Roll",
  "Eel Roll",
  "Salmon Roll",
  "Salmon Skin Roll",
  "Scallop Roll",
  "Shrimp Crab Roll",
  "Shrimp Roll",
  "Tuna Roll",
  "Vegetable Roll",
  "Yellowtail Rol",
  "Philadelphia Roll"
];

const listRegularRolls = regularRolls.map((regularRoll, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {regularRoll}
  </li>
));

const freshRolls = [
  "911 Roll",
  "Alaskan Roll",
  "Albacore Delight Roll",
  "Cucumber Sashimi Roll",
  "Hawaiian Roll",
  "Mexican Roll",
  "Rainbow Roll",
  "Sakura Roll",
  "Sexy Salmon Roll",
  "Spicy Albacore Crunch Roll",
  "Yellowtail Delight Roll",
  "X Girl Friend Roll",
  "Aguachile Roll",
  "Lemon Roll",
  "Mango Tango Roll",
  "Mango Mania Roll"
];

const listFreshRolls = freshRolls.map((freshRoll, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {freshRoll}
  </li>
));

const tempuraRolls = [
  "California Tempura Roll",
  "Crunch Roll",
  "Avocado Crunch Roll",
  "Crunch Scallop Roll",
  "Dragon Roll",
  "Popcorn Lobster Roll",
  "Shrimp Tempura Roll",
  "Spider Roll",
  "Tiger Roll",
  "Vegas Roll",
  "Shrimp & Crab Crunch Roll",
  "Amber Roll",
  "Monkey Roll",
  "Sun-Burn Roll"
];

const listTempuraRolls = tempuraRolls.map((tempuraRoll, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {tempuraRoll}
  </li>
));

const bakedRolls = [
  "B.S.C.R. Roll",
  "Baked Salmon Roll",
  "Caterpillar Roll",
  "Volcano Roll",
  "Lobster Roll",
  "Sunset Roll"
];

const listBakedRolls = bakedRolls.map((bakedRoll, index) => (
  <li style={{ padding: "5px" }} key={index}>
    {bakedRoll}
  </li>
));

export default function happyhour() {
  const classes = useStyles();
  return (
    <Layout>
      <img
        src="../static/ichiban-happyhour-1440x600.jpg"
        width="100%"
        loading="lazy"
        alt="Happy Hour"
      ></img>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Please inform a server about any food allergies. All crabmeat is
              imitation.
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Sushi (2 Pieces)</Typography>{" "}
                <ul className={classes.list}>{listSushi}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Special Sushi </Typography>{" "}
                <ul className={classes.list}>{listSpecialSushi}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Regular Rolls (Cut/Hand)</Typography>{" "}
                <ul className={classes.list}>{listRegularRolls}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Fresh Rolls</Typography>{" "}
                <ul className={classes.list}>{listFreshRolls}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Tempura Rolls</Typography>{" "}
                <ul className={classes.list}>{listTempuraRolls}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Baked Rolls</Typography>{" "}
                <ul className={classes.list}>{listBakedRolls}</ul>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <p style={{ marginBottom: "50px" }}>
                We are participating in a Designated Driver Program. We provide
                free soft drink to the designated driver of a group.
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
