import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
  featured: {
    marginTop: 50
  },

  link: {
    color: "black",
    cursor: "pointer"
  }
}));

export default function FeaturedVideo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h1">
        Featured Video
      </Typography>

      <Container maxWidth="sm" className={classes.featured}>
        <Typography gutterBottom variant="h6" component="h1">
          Grand Opening
        </Typography>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/7m9Olyoe9EU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Typography gutterBottom variant="h6" component="h1">
          <a
            href="https://www.youtube.com/watch?v=7m9Olyoe9EU"
            target="_blank"
            rel="noopener"
          >
            Vlog by Clem Tube{" "}
          </a>
        </Typography>
      </Container>
    </div>
  );
}
