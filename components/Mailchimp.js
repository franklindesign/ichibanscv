import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 20
  }
}));

export default function Mailchimp() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} item>
          <Typography variant="h6">
            Get offers and coupons, subscribe to Ichiban Emails.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            href="http://eepurl.com/gED0XT"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
