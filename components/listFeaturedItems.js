import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },

  card: {
    backgroundColor: "black",
    maxWidth: "100vw",
    marginTop: 25,
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transform: "translateY(-10px)",
    },
  },
  more: {
    color: "orange",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  },
  item: {
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "boxShadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    },
  },
}));

const items = [
  {
    id: 1,
    title: "Yummy Crunch Tuna",
    src: "../static/newFeaturedItems/newfeaturedItems_YummyCrunchTuna.jpg",
    categories: "Cold Appetizers",
    link: "/coldappetizers",
  },
  {
    id: 2,
    title: "Lobster Crab Crunch Roll",
    src:
      "../static/newFeaturedItems/newfeaturedItems_LobsterCrabCrunchRoll.jpg",
    categories: "Tempura Rolls",
    link: "/tempurarolls",
  },
  {
    id: 3,
    title: "Baked Crab Roll",
    src: "../static/newFeaturedItems/newfeaturedItems_BakedCrabRoll.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls",
  },
  {
    id: 4,
    title: "Iron Man Sushi Burrito",
    src: "../static/newFeaturedItems/newfeaturedItems_IronMan.jpg",
    categories: "Sushi Burritos",
    link: "/sushiburritos",
  },
  {
    id: 5,
    title: "Garlic Shrimp",
    src: "../static/newFeaturedItems/newfeaturedItems_GarlicShrimp.jpg",
    categories: "Entree",
    link: "/entrees",
  },
  {
    id: 6,
    title: "Korean BBQ Bento",
    src: "../static/newFeaturedItems/newfeaturedItems_KoreanBBQbento.jpg",
    categories: "Entree",
    link: "/entrees",
  },
];

export default function ListFeaturedItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h1">
        New Menu Items!
      </Typography>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt={`${item.title}`}
                height="240"
                image={`${item.src}`}
                title={`${item.title}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Link href={`${item.link}`} className={classes.link}>
                  <Chip
                    color="secondary"
                    size="medium"
                    label={`${item.categories}`}
                  ></Chip>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
