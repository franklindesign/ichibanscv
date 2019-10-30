import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: 50,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100vw",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  mobile: {
    width: "100vw",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const tileData = [
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 },
  { img: "../static/photos/default.jpg", title: " ", author: " ", cols: 1 }
];

export default function PhotoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={450} className={classes.gridList} cols={3 || 1}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                ></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <GridList cellHeight={600} className={classes.mobile} cols={1}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                ></IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
