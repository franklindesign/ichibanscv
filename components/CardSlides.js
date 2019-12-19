import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  scrollingWrapperFlexbox: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    height: "80px",
    marginBottom: "20px",
    width: "100%",
    webkitOverflowScrolling: "touch",
    card: {
      flex: "0 0 auto",
      marginRight: "3px"
    }
  },
  card: {
    border: "2px solid red",
    width: "150px",
    height: "75px",
    background: "black"
  },
  scrollTouch: {
    overflowScrolling: "touch"
    /* Lets it scroll lazy */
  },
  scrollAuto: {
    overflowScrolling: "auto"
    /* Stops scrolling immediately */
  }
}));

export default function CardSlides() {
  const classes = useStyles();
  return (
    <div className={classes.scrollingWrapperFlexbox}>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
      <div className={classes.card}>
        <h2>Card</h2>
      </div>
    </div>
  );
}
