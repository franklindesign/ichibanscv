import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Link from "../src/Link";
// import BigSlider from "../components/BigSlider";
import ListFeaturedItems from "./listFeaturedItems";
import Hero from "..//components/Hero";

export default function Index() {
  return (
    <Layout>
      <div>
        <Hero></Hero>
        {/* <BigSlider></BigSlider> */}
      </div>
      <Container maxWidth="lg" style={{ marginBottom: 50 }}>
        <ListFeaturedItems></ListFeaturedItems>
      </Container>
    </Layout>
  );
}
