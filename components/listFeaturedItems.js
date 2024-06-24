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
    backgroundColor: "white",
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
    title: "Lobster & Crab Crunch Roll",
    src: "../static/FeaturedItems/01.jpg",
    categories: "Baked Rolls",
    link: "/bakedrolls",
  },
  {
    id: 2,
    title: "Baked Salmon Roll",
    src: "../static/FeaturedItems/02.jpg",
    categories: "Baked Rolls",
    link: "/bakedrolls",
  },
  {
    id: 3,
    title: "Albacore Delight Roll",
    src: "../static/FeaturedItems/03.jpg",
    categories: "Fresh Rolls",
    link: "/freshrolls",
  },
   
  {
    id: 4,
    title: "Rainbow Roll",
    src: "../static/FeaturedItems/04.jpg",
    categories: "Fresh Rolls",
    link: "/freshrolls",
  },
  {
    id: 5,
    title: "Alaskan Roll",
    src: "../static/FeaturedItems/05.jpg",
    categories: "Fresh Rolls",
    link: "/freshrolls",
  },
  {
    id: 6,
    title: "Sean's Roll",
    src: "../static/FeaturedItems/06.jpg",
    categories: "Tempura Rolls",
    link: "/tempurarolls",
  },
  {
    id: 7,
    title: "Bento Box",
    src: "../static/FeaturedItems/07.jpg",
    categories: "Bento Box",
    link: "/bentobox",
  },
  {
    id: 8,
    title: "View More Items",
    src: "../static/FeaturedItems/08.jpg",
    categories: "Menu",
    link: "/menu",
  },
];

export default function ListFeaturedItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h1">
        Featured Items
      </Typography>
      <p>Most ordered</p>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={6} sm={6} md={3} key={item.id}>
             <Link href={`${item.link}`} className={classes.link}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt={`${item.title}`}
                height="160"
                image={`${item.src}`}
                title={`${item.title}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>
                
                  <Chip
                  variant="outlined" 
                    color="primary"
                    size="small"
                    label={`${item.categories}`}
                  ></Chip>
                 
              </CardContent>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
