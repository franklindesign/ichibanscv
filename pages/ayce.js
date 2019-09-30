import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ScrollableTabsButtonAuto from "../components/AyceMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  banner: { margin: "auto", width: "50%" },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  banner: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50vw"
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "40vw"
    }
  }
}));

export default function ayce() {
  const classes = useStyles();
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#000",
          paddingTop: 20
        }}
      >
        {" "}
        <img src="../static/ayce.jpg" className={classes.banner}></img>
      </div>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
