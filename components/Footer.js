import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#000",
    color: "white",
    height: 100,
    padding: "30px 30px",

    left: "0",
    bottom: "0",
    width: "100%"
  }
});

export default function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" variant="body2">
        <a
          href="https://goo.gl/maps/qBwuJL1U36P6FE238"
          target="_blank"
          style={{ color: "#fff" }}
        >
          27625 Shangri-La Dr, Santa Clarita, CA 91351
        </a>
      </Typography>
      <Typography variant="body2" color="inherit" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://ichibanscv.com/">
          Ichiban Sushi & Bar
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
