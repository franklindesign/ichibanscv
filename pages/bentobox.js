import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dropdown from "../components/Dropdown";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginBottom: 50,
  },

  ayce: {
    textAlign: "left",
    marginBottom: 25,
  },
}));

const lunchBentoPrice = "18.95";
const dinnerBentoPrice = "20.95";



function createData(name, description, ) {
  return { name, description,  };
}

const rows = [
  createData('Grilled Chicken', "Grilled chicken with teriyaki sauce."),
  createData('Grilled Beef', "Grilled beef with teriyaki sauce."),
  createData('Salmon', "Broiled fresh salmon with teriyaki sauce." ),
  createData('Pork Cutlet', "tender pork breaded and deep fried with tonkatsu sauce" ),
  createData('Bulgogi', "Marinated Korean style beef." ),
  createData('Sesame Chicken', "Lightly fried chicken marinated in sesame sauce." ),
  createData('Sushi', "Chef's choice (5 pieces)." ),
  createData('Sashimi', "Chef's choice (6 pieces)." ),
  createData('California Roll', "" ),
  createData('Spicy Tuna Roll', "" ),
];

export default function BentoBox() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown></Dropdown>
              <div className={classes.ayce}>
                <Typography variant="h4" id="bentoboxes">
                  BENTO BOXES
                </Typography>
                <img
                src="../static/items/bentobox/bentobox_web.jpg"
                style={{ width: "100%", marginTop: 40, marginBottom: 20 }}
              ></img>
                <p>*Served with steamed rice, soup, salad & tempura.</p>
                <p>^(No substitutes and double order sushi & sashimi.)</p>
                {/* <p>
                  <strong>Lunch Special: {lunchBentoPrice}</strong>
                </p>
                <p>
                  <strong>Dinner: {dinnerBentoPrice}</strong>
                </p> */}
                
              </div>
            </Grid>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Choose 2 Items for your bento*^:</strong></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <img
                src="../static/items/bentobox/koreanBentoBox.jpg"
                style={{ width: "100%", marginTop: 40, marginBottom: 20 }}
              ></img>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
