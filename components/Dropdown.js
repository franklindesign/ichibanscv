import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Link from "../src/Link";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    zIndex: "1",
    right: "5%",
    [theme.breakpoints.up("md")]: {
      right: "5%"
    },
    [theme.breakpoints.up("lg")]: {
      right: "15%"
    },
    [theme.breakpoints.up("xl")]: {
      right: "20%"
    }
  },
  paper: {
    position: "absolute",
    top: 36,
    right: 0,
    left: 0,
    marginTop: 10,
    height: 610,
    width: 140,
    padding: 0
  },
  list: {
    listStyleType: "none",
    padding: 4,
    width: "100%",
    "&:hover": {
      backgroundColor: "#D1D2D4",
      color: "#000"
    }
  },
  link: {
    color: "#EE1C25"
  },
  droplist: {
    marginLeft: -30
  }
}));

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const categories = [
    {
      category: "Fresh Rolls",
      link: "/freshrolls"
    },
    {
      category: "Tempura Rolls",
      link: "/tempurarolls"
    },
    {
      category: "Baked Rolls",
      link: "/bakedrolls"
    },
    {
      category: "Regular Cut Rolls",
      link: "/regularrolls"
    },
    {
      category: "Hand Rolls",
      link: "/handrolls"
    },
    {
      category: "Sushi",
      link: "/sushis"
    },
    {
      category: "Special Sushi",
      link: "/specialsushis"
    },
    {
      category: "Sushi Combo",
      link: "/sushicombo"
    },
    {
      category: "Sashimi",
      link: "/sashimis"
    },
    {
      category: "Sashimi Combo",
      link: "/sashimicombo"
    },
    {
      category: "Cold Appetizers",
      link: "/coldappetizers"
    },
    {
      category: "Hot Appetizers",
      link: "/hotappetizers"
    },
    {
      category: "Soup & noodles",
      link: "/soupandnoodles"
    },
    {
      category: "Salads",
      link: "/salad"
    },
    {
      category: "Entrees",
      link: "/entrees"
    },
    {
      category: "Bento Box",
      link: "/bentobox"
    },
    {
      category: "Kid's Menu",
      link: "/kidsmenu"
    },
    {
      category: "Dessert",
      link: "/dessert"
    },
    {
      category: "Beverages",
      link: "/beverages"
    },
    {
      category: "Beer & Wine",
      link: "/beerwine"
    },
    {
      category: "Sake",
      link: "/sake"
    }
  ];

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}>
            Categories
            <ArrowDropDownIcon />
          </Button>

          {open ? (
            <Paper className={classes.paper}>
              <ul className={classes.droplist}>
                {categories.map((category, index) => (
                  <Link
                    href={`${category.link}`}
                    className={classes.link}
                    key={index}
                  >
                    <li className={classes.list}>{category.category}</li>
                  </Link>
                ))}
              </ul>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
