import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 5
  },
  signup: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 20
  }
}));

export default function SpecialDiscount() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.signup}>
        <Grid container spacing={1}>
          <Grid xs={12} md={10}>
            <Typography variant="h6">
              Monday Night Football Special: <br></br>50% OFF ALL DRINKS.
              Monday, 4pm - 10pm. Must Show Offer.
            </Typography>
          </Grid>
          <Grid xs={12} md={2}>
            <Button
              size="large"
              variant="contained"
              href="../static/coupons/MNF_Special.png"
              rel="noopener"
              style={{ margin: 5 }}
              target="_blank"
            >
              View Offer
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
