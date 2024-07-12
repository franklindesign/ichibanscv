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
    title: "Inari Sushi: Spicy Salmon",
    src: "../static/newItems/01.jpg",
    categories: "Inari Sushi",
    link: "/inarisushi",
  },
  {
    id: 2,
    title: "Inari Sushi: Spicy Shrimp",
    src: "../static/newItems/02a.jpg",
    categories: "Inari Sushi",
    link: "/inarisushi",
  },
  {
    id: 3,
    title: "Salmon Truffle",
    src: "../static/newItems/02.jpg",
    categories: "Appetizer (Cold)",
    link: "/coldappetizers",
  },
  {
    id: 4,
    title: "Albacore Special Roll",
    src: "../static/newItems/03.jpg",
    categories: "Fresh Rolls",
    link: "/freshrolls",
  },
   
  {
    id: 5,
    title: "Black Mamba Roll",
    src: "../static/newItems/04.jpg",
    categories: "Fresh Rolls",
    link: "/freshrolls",
  },
  {
    id: 6,
    title: "Oyster Ceviche",
    src: "../static/newItems/05.jpg",
    categories: "Appetizer (Cold)",
    link: "/coldappetizers",
  },
  {
    id: 7,
    title: "Octopus Wasabi",
    src: "../static/newItems/06.jpg",
    categories: "Appetizer (Cold)",
    link: "/coldappetizers",
  },
  {
    id: 8,
    title: "Octopus Salad",
    src: "../static/newItems/07.jpg",
    categories: "Salad",
    link: "/salad",
  },
  
];

export default function NewItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h1">
        New on the menu:
      </Typography>
       
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
