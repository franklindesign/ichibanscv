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
import MapIcon from "@material-ui/icons/Map";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: { background: "#fff" },
  button: {
    "&:hover": {
      color: "#000",
    },
    margin: theme.spacing(1),
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      margin: theme.spacing(0),
    },
  },
  link: {
    color: "primary",
    cursor: "pointer",
    "&:hover": {
      color: "secondary",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  logo: { marginTop: 10, maxWidth: 350, flexGrow: 1 },

  sectionDesktop: {
    marginRight: theme.spacing(5),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  ubereats: {
    background: "green",
    margin: theme.spacing(2),
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Link href="/">
            <img
              src="../static/ichiban_logo.png"
              className={classes.logo}
              alt="Ichiban Sushi Logo"
            ></img>
          </Link>
          <Typography variant="h6" className={classes.title}>
            SUSHI & BAR
          </Typography>

          <div className={classes.sectionDesktop}>
            <Link href="/menu" underline="none">
              <Button color="#000" className={classes.button}>
                Menu
              </Button>
            </Link>
            <Button
              color="#000"
              className={classes.button}
              href="https://instagram.com/ichibanscv/"
              target="_blank"
              rel="noopener"
            >
              <PhotoLibraryIcon style={{ marginRight: 5 }}></PhotoLibraryIcon>{" "}
              Photos
            </Button>
            <Button
              color="#000"
              className={classes.button}
              href="https://goo.gl/maps/qBwuJL1U36P6FE238"
              target="_blank"
              rel="noopener"
            >
              <MapIcon style={{ marginRight: 5 }}></MapIcon> Location
            </Button>
          </div>
          <div >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#000"
              aria-label="menu"
              onClick={handleClick}
               
            >
              <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href="/" className={classes.link}>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link href="/menu" className={classes.link}>
                  <MenuItem onClick={handleClose}>Menu</MenuItem>
                </Link>

                <a
                  href="https://instagram.com/ichibanscv/"
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  <MenuItem onClick={handleClose}>Photos</MenuItem>{" "}
                </a>
                <a
                  href="https://goo.gl/maps/qBwuJL1U36P6FE238"
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  <MenuItem onClick={handleClose}>Location</MenuItem>{" "}
                </a>
                <a
                  href="https://grubhub.com/restaurant/r/1437256"
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  <MenuItem onClick={handleClose}>GrubHub</MenuItem>
                </a>
                <a
                  href="https://www.ubereats.com/en-US/los-angeles/food-delivery/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw/"
                  target="_blank"
                  rel="noopener"
                  className={classes.link}
                >
                  <MenuItem onClick={handleClose}>UberEats</MenuItem>
                </a>
              </Menu>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
