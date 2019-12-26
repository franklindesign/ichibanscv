import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "../src/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },

  card: {
    maxWidth: "100vw",
    marginTop: 25,
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transform: "translateY(-10px)"
    }
  },
  more: {
    color: "orange"
  },
  link: {
    color: "black",
    cursor: "pointer"
  },
  item: {
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    transition: "boxShadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
    }
  }
}));

const items = [
  {
    id: 1,
    title: "Baja Roll (NEW!)",
    src: "../static/featuredItems/featuredItem01.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
  },
  {
    id: 2,
    title: "Superman Roll (NEW!)",
    src: "../static/featuredItems/featuredItem02.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
  },
  {
    id: 3,
    title: "Fire Fire Roll",
    src: "../static/featuredItems/featuredItem03.jpg",
    categories: "Tempura Roll",
    link: "/tempurarolls"
  },
  {
    id: 4,
    title: "Monkey Roll",
    src: "../static/featuredItems/featuredItem04.jpg",
    categories: "Tempura Roll",
    link: "/tempurarolls"
  },
  {
    id: 5,
    title: "Sunset Roll",
    src: "../static/featuredItems/featuredItem05.jpg",
    categories: "Baked Roll",
    link: "/bakedrolls"
  },
  {
    id: 6,
    title: "Sun Burn Roll",
    src: "../static/featuredItems/featuredItem06.jpg",
    categories: "Tempura Roll",
    link: "/tempurarolls"
  }
];

export default function ListFeaturedItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h1">
        Featured Items
      </Typography>
      <Grid container spacing={1}>
        {items.map(item => (
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
                    color="black"
                    size="medium"
                    label={`${item.categories}`}
                  ></Chip>
                </Link>
              </CardContent>

              {/* <CardActions>
                <Link href={`${item.link}`}>
                  <Button size="large" className={classes.more}>
                    More Items Like This
                  </Button>
                </Link>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
