import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "100%",
    marginTop: 5,
    height: "50px",
    textDecoration: "none",
    backgroundColor: "#F93039",

    borderRadius: "50px",
    padding: 15,
    fontSize: 16,
    "&:hover": {
      background: "#000",
      color: "#3e9920",
      textDecoration: "none"
    }
  }
}));

export default function GrubHub() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <a
          href="https://grubhub.com/restaurant/r/1437256"
          target="_blank"
          rel="noopener"
          style={{
            textDecoration: "none",
            color: "#ffffff"
          }}
        >
          Order with GrubHub
        </a>
      </div>
    </>
  );
}
