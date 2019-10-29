import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 20
  },
  signup: {
    backgroundColor: "#ccc",
    padding: 20
  }
}));

export default function Mailchimp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.signup}>
        <Grid container spacing={1}>
          <Grid xs={12} md={10}>
            <Typography variant="h6">
              Subscribe to Ichiban Emails for news, specials offers, and
              discount coupons.
            </Typography>
          </Grid>
          <Grid xs={12} md={2}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              href="http://eepurl.com/gED0XT"
              rel="noopener"
              style={{ margin: 5 }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
