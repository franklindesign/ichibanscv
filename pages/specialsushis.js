// import Layout from "../components/Layout";
// import Container from "@material-ui/core/Container";
// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import CardItem from "../components/CardItem";
// import Dropdown from "../components/Dropdown";
// // import UberEats from "../components/UberEats";
// import OrderWith from "../components/OrderWith";

// const NoImage = "../static/items/NoImage.jpg";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginTop: 100,
//     marginBottom: 50,
//   },

//   ayce: {
//     textAlign: "left",
//     marginBottom: 25,
//   },
// }));

// const specialSushis = [
//   {
//     id: 1,
//     name: "Spicy Tuna",
//     description: "2 pieces, tuna with avocado and chili oil",
//     price: "5.50",
//     image: NoImage,
//     largeImage: "",
//   },
//   {
//     id: 2,
//     name: "Spicy Salmon",
//     description: "2 pieces, salmon with avocado and chili oil",
//     price: "5.50",
//     image: NoImage,
//     largeImage: "",
//   },
//   {
//     id: 3,
//     name: "Spicy Yellowtail",
//     description: "2 pieces, yellowtail with jalapeno yuzu sauce",
//     price: "5.50",
//     image: NoImage,
//     largeImage: "",
//   },
//   {
//     id: 4,
//     name: "Escolar (ono)",
//     description: "2 pieces, ono with lemon pepper and fried onion",
//     price: "4.95",
//     image: NoImage,
//     largeImage: "",
//   },
//   {
//     id: 5,
//     name: "Big Scallop",
//     description: "Large sizes of scallops",
//     price: "8.50",
//     image: NoImage,
//     largeImage: "",
//   },
//   {
//     id: 6,
//     name: "Cajun Tuna",
//     description:
//       "Spicy Cajun style sashimi tuna with avocado, ponzu and chili oil",
//     price: "5.50",
//     image: NoImage,
//     largeImage: "",
//   },
// ];

// export default function SpecialSushis() {
//   const classes = useStyles();
//   return (
//     <Layout>
//       <Container maxWidth="lg">
//         <div className={classes.root}>
//           <Grid container spacing={2}>
//             <Dropdown></Dropdown>
//             <Grid item xs={12}>
//               <div className={classes.ayce}>
//                 <Typography variant="h4" id="specialSushis">
//                   Special Sushis
//                 </Typography>
//               </div>
//             </Grid>

//             {specialSushis.map((specialSushi) => (
//               <Grid item xs={12} sm={6} key={specialSushi.name}>
//                 <CardItem
//                   itemName={{ text: `${specialSushi.name}` }}
//                   title={{ text: `${specialSushi.name}` }}
//                   itemDescription={{ text: `${specialSushi.description}` }}
//                   itemPrice={{ price: `${specialSushi.price}` }}
//                   itemImage={{ image: `${specialSushi.image}` }}
//                 ></CardItem>
//               </Grid>
//             ))}
//           </Grid>
//           <OrderWith></OrderWith>
//         </div>
//       </Container>
//     </Layout>
//   );
// }
