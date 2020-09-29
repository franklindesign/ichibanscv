import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "../src/Link";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },

  ayce: {
    textAlign: "left",
  },
  card: {
    maxWidth: "100vw",
    minHeight: "150px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
      transform: "translateY(-10px)",
    },
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  alerts: {
    marginTop: 20,
  },
  category: {
    marginTop: 40,
    color: `#fff`,
  },
}));

const categories = [
  // {
  //   name: "Lunch Specials",
  //   image: "",
  //   link: "/lunchspecials",
  // },
  {
    name: "Fresh Rolls",
    image: "../static/categories/freshRolls.jpg",
    link: "/freshrolls",
  },
  {
    name: "Tempura Rolls",
    image: "../static/categories/tempuraRolls.jpg",
    link: "/tempurarolls",
  },
  {
    name: "Baked Rolls",
    image: "../static/categories/bakedRolls.jpg",
    link: "/bakedrolls",
  },
  {
    name: "Regular Cut Rolls",
    image: "../static/categories/regularCutRolls.jpg",
    link: "/regularrolls",
  },
  {
    name: "Hand Rolls",
    image: "../static/categories/handRolls.jpg",
    link: "/handrolls",
  },
  {
    name: "Sushi",
    image: "../static/categories/sushi.jpg",
    link: "/sushis",
  },
  {
    name: "Special Sushi",
    image: "",
    link: "/specialsushis",
  },
  {
    name: "Sushi Combo",
    image: "../static/categories/sushiCombo.jpg",
    link: "/sushicombo",
  },
  {
    name: "Sashimi",
    image: "../static/categories/sashimi.jpg",
    link: "/sashimis",
  },
  {
    name: "Sashimi Combo",
    image: "../static/categories/sashimiCombo.jpg",
    link: "/sashimicombo",
  },
  {
    name: "Cold Appetizers",
    image: "../static/categories/coldAppetizers.jpg",
    link: "/coldappetizers",
  },
  {
    name: "Hot Appetizers",
    image: "../static/categories/hotAppetizers.jpg",
    link: "/hotappetizers",
  },
  {
    name: "Soup & Noodles",
    image: "../static/categories/soupAndNoodles.jpg",
    link: "/soupandnoodles",
  },
  { name: "Salad", image: "../static/categories/salad.jpg", link: "/salad" },
  {
    name: "Entree",
    image: "../static/categories/entrees.jpg",
    link: "/entrees",
  },
  {
    name: "Bento Box",
    image: "../static/categories/bentobox.jpg",
    link: "/bentobox",
  },
  { name: "Kid's Menu", image: "", link: "/kidsmenu" },
  {
    name: "Dessert",
    image: "../static/categories/dessert.jpg",
    link: "/dessert",
  },
  {
    name: "Beverages",
    image: "../static/categories/beverages.jpg",
    link: "/beverages",
  },
  {
    name: "Beer & Wine",
    image: "../static/categories/beerAndWine.jpg",
    link: "/beerwine",
  },
  {
    name: "Sake & Soju",
    image: "../static/categories/sake.jpg",
    link: "/sake",
  },
];

export default function menu() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Typography variant="h4" id="freshrolls">
            Categories
          </Typography>
          <div className={classes.alerts}>
            <Alert variant="outlined" severity="info">
              Menu is subject to changes. Items may vary from photos. Please
              inform us of any food allergies. All crabmeat is imitation.
            </Alert>
          </div>

          <Grid
            container
            spacing={3}
            style={{ marginTop: "20px", marginBottom: "50px" }}
          >
            {categories.map((category) => (
              <Grid item xs={6} sm={6} md={3} key={category.name}>
                <Link href={`${category.link}`}>
                  <Card
                    className={classes.card}
                    style={{
                      backgroundImage: "url( " + `${category.image}` + " )",
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`,
                      backgroundColor: `#000`,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        align="center"
                        className={classes.category}
                      >
                        {category.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
