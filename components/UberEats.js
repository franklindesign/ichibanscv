import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "100%",
    marginTop: 25,
    height: "50px",
    textDecoration: "none",
    backgroundColor: "#3e9920",

    borderRadius: "50px",
    padding: 15,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "25%",
      marginLeft: "75%"
    },
    "&:hover": {
      background: "#000",
      color: "#3e9920",
      textDecoration: "none"
    }
  }
}));

export default function UberEats() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <a
          href="https://www.ubereats.com/en-US/los-angeles/food-delivery/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw/"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#ffffff"
          }}
        >
          Place an order with UberEats →{" "}
        </a>
      </div>
    </>
  );
}
