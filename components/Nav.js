import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "../src/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  nav: { background: "#000" },
  button: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  logo: { marginTop: 10, marginLeft: 10, maxWidth: 350, flexGrow: 1 },

  sectionDesktop: {
    marginRight: theme.spacing(5),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },

  ubereats: {
    background: "green",
    margin: theme.spacing(2),
    color: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Link href="/">
            <img
              src="../static/ichiban_logo.png"
              className={classes.logo}
            ></img>
          </Link>
          <Typography variant="h6" className={classes.title}>
            SUSHI & BAR
          </Typography>

          <div className={classes.sectionDesktop}>
            <Button
              color="inherit"
              className={classes.button}
              href="/menu"
              disableRipple="true"
            >
              Menu
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              href="/happyhour"
              disableRipple="true"
            >
              Happy Hour!
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              href="/ayce"
              disableRipple="true"
            >
              All You Can Eat
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              href="https://goo.gl/maps/qBwuJL1U36P6FE238"
              target="_blank"
              disableRipple="true"
            >
              Location
            </Button>
            <Button color="inherit" className={classes.button} href="/about">
              About
            </Button>
            <Button
              className={classes.ubereats}
              href="https://www.ubereats.com/en-US/los-angeles/food-delivery/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw/"
              target="_blank"
            >
              UberEats
            </Button>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Menu</MenuItem>
              <MenuItem onClick={handleClose}>AYCE</MenuItem>
              <MenuItem onClick={handleClose}>Location</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>UberEats</MenuItem>
            </Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
