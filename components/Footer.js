import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import CallIcon from "@material-ui/icons/Call";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MapIcon from "@material-ui/icons/Map";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    color: "white",
    height: 200,
    padding: "30px 30px",
    left: "0",
    bottom: "0",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: 400,
    },
  },
  links: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div align="center">
              <AccessTimeIcon />
            </div>
            <Typography align="center" variant="body1">
              Sun-Thur, Sun: 12 PM to 9:30 PM <br></br>Fri-Sat: 12 PM to 10 PM
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <a
              href="https://goo.gl/maps/qBwuJL1U36P6FE238"
              target="_blank"
              rel="noopener"
              className={classes.links}
            >
              <div align="center">
                <MapIcon />
              </div>

              <Typography align="center" variant="body1">
                27625 Shangri-La Dr. <br></br>Santa Clarita, CA 91351
              </Typography>
            </a>
          </Grid>

          <Grid item xs={12} sm={4}>
            <a href="tel:+16613608526" className={classes.links}>
              <div align="center">
                <CallIcon />
              </div>
              <Typography align="center" variant="body1">
                Give us a call: <br></br>(661) 360-8526
              </Typography>
            </a>
          </Grid>
        </Grid>

        <br></br>
        <Typography variant="body2" color="inherit" align="center">
          {"Copyright © "}
          <MuiLink color="inherit" href="https://ichibanscv.com/">
            Ichiban Sushi & Bar
          </MuiLink>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
}
