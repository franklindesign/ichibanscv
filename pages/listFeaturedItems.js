import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
    marginTop: 25
  }
}));

const items = [
  {
    id: 1,
    title: "Sakura Roll",
    src: "../static/featuredItems/featuredItem01.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
  },
  {
    id: 2,
    title: "Spicy Tuna on Rice Cake",
    src: "../static/featuredItems/featuredItem02.jpg",
    categories: "Appetizer",
    link: "/freshrolls"
  },
  {
    id: 3,
    title: "Ramen Combo",
    src: "../static/featuredItems/featuredItem03.jpg",
    categories: "Combo Special",
    link: "/freshrolls"
  },
  {
    id: 4,
    title: "Aguachile Roll",
    src: "../static/featuredItems/featuredItem04.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
  },
  {
    id: 5,
    title: "Spicy Albacore Crunch Roll",
    src: "../static/featuredItems/featuredItem05.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
  },
  {
    id: 6,
    title: "Yellowtail Delight Roll",
    src: "../static/featuredItems/featuredItem06.jpg",
    categories: "Fresh Roll",
    link: "/freshrolls"
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
                <Chip
                  variant="outlined"
                  color="secondary"
                  size="small"
                  label={`${item.categories}`}
                ></Chip>
              </CardContent>

              <CardActions>
                <Link href={`${item.link}`}>
                  <Button size="small" color="primary">
                    More Items Like This
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
