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
  category: {
    marginTop: 40,
    color: `#fff`,
  },
}));

const categories = [
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
    name: "Sushi Burritos",
    image: "../static/categories/sushiBurritos.jpg",
    link: "/sushiburritos",
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
    name: "Appetizers (Cold)",
    image: "../static/categories/coldAppetizers.jpg",
    link: "/coldappetizers",
  },
  {
    name: "Appetizers (Warm)",
    image: "../static/categories/warmAppetizers.jpg",
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
  {
    name: "Kid's Menu",
    image: "../static/categories/kids.jpg",
    link: "/kidsmenu",
  },
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
          <div style={{ marginTop: 50, marginBottom:25 }}>
              <Alert variant="outlined" severity="info">
                Consuming raw or undercooked meats, poultry, seafood, shellfish
                or eggs may increase your risk of foodborne illness, especially
                if you have certain medical conditions.Pictures shown may be
                different from actual orders. Prices are subject to change
                without prior notice. Please inform your server of any allergies
                you may have.
              </Alert>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
