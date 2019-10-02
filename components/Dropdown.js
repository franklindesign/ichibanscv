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
    height: 460,
    width: 130
  },
  list: {
    margin: theme.spacing(1)
    // Selects every two elements among any group of siblings.
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
              <div className={classes.list}>
                <Link href="/freshrolls">Fresh Rolls</Link>{" "}
              </div>{" "}
              <div className={classes.list}>
                <Link href="/tempurarolls">Tempura Rolls</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/bakedrolls">Baked Rolls</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/sushicombo">Sushi Combos</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/sashimicombo">Sashimi Combo</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/coldappetizers">Appetizers (Cold)</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/hotappetizers">Appetizers (Hot)</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/soupandnoodles">Soup & noodles</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/salad">Salads</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/entrees">Entrees</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/bentobox">Bento Box</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/kidsmenu">Kid's Menu</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/dessert">Dessert</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/beverages">Beverages</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/beerwine">Beer & Wine</Link>{" "}
              </div>
              <div className={classes.list}>
                <Link href="/sake">Sake</Link>{" "}
              </div>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
