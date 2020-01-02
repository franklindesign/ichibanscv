import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// import ScrollableTabsButtonAuto from "../components/AyceMenu";
// import Ayce from "../components/NewAyceMenu";

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
    padding: 20,
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      width: "50vw"
    },
    [theme.breakpoints.up("md")]: {
      width: "40vw"
    }
  }
}));

export default function ayce() {
  const classes = useStyles();
  const ayceFreshRolls = "../static/ayceMenu/ayceFreshRolls.jpg";
  const ayceTempuraRolls = "../static/ayceMenu/ayceTempuraRolls.jpg";
  const ayceBakedRolls = "../static/ayceMenu/ayceBakedRolls.jpg";
  const ayceSpecialItems = "../static/ayceMenu/ayceSpecialItems.jpg";

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#000",
          paddingTop: 20
        }}
      >
        {" "}
        <img src="../static/ayce.png" className={classes.banner}></img>
      </div>
      <Container maxWidth="md">
        <p style={{ textAlign: "center" }}>
          All Items Listed are Included with All You Can Eat.
        </p>
        <p style={{ textAlign: "center" }}>
          Please inform a server about any food allergies. All crabmeat is
          imitation.
        </p>

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <div>
                {" "}
                <img
                  src={ayceFreshRolls}
                  loading="lazy"
                  alt="Fresh Rolls"
                ></img>
                <img
                  src={ayceTempuraRolls}
                  loading="lazy"
                  alt="Tempura Rolls"
                ></img>
                <img
                  src={ayceBakedRolls}
                  loading="lazy"
                  alt="Baked Rolls"
                ></img>
                <img
                  src={ayceSpecialItems}
                  loading="lazy"
                  alt="Special Items"
                ></img>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
