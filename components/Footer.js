import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#000",
    color: "white",
    height: 200,
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
      <Typography align="center" variant="body1">
        <strong>(661) 360-8526</strong>
      </Typography>
      <Typography align="center" variant="body1">
        <strong>Open Hours: 11:30 AM to 10 PM</strong>
      </Typography>
      <Typography align="center" variant="body1">
        <a
          href="https://goo.gl/maps/qBwuJL1U36P6FE238"
          target="_blank"
          style={{ color: "#fff" }}
        >
          27625 Shangri-La Dr, Santa Clarita, CA 91351
        </a>
      </Typography>
      <br></br>
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
