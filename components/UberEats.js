import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    marginTop: 5,
    height: "50px",
    textDecoration: "none",
    backgroundColor: "#3e9920",

    borderRadius: "50px",
    padding: 15,
    fontSize: 16,

    "&:hover": {
      background: "#000",
      color: "#3e9920",
      textDecoration: "none",
    },
  },
}));

export default function UberEats() {
  const classes = useStyles();
  return (
    <>
      <button className={classes.root}>
        <a
          href="https://order.ubereats.com/los-angeles/food-delivery/Ichiban%20Sushi%20%26%20Bar/SSFugl8EQyqLzEvZdvo-Sw/?utm_source=web-restaurant-manager"
          target="_blank"
          rel="noopener"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          Order with UberEats
        </a>
      </button>
    </>
  );
}
