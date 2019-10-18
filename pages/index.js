import Head from "next/head";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Link from "../src/Link";
// import BigSlider from "../components/BigSlider";
import ListFeaturedItems from "./listFeaturedItems";
import Hero from "..//components/Hero";
import Mailchimp from "../components/Mailchimp";
import OrderWith from "../components/OrderWith";

export default function Index() {
  return (
    <>
      <Head>
        <title>ICHIBAN SUSHI & BAR (SANTA CLARITA VALLEY)</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ichiban Sushi & Bar Website" />
        <meta
          name="keywords"
          content="Ichiban Sushi, Ichiban Sushi & Bar, Santa Clarita Sushi, Sushi, Ichiban Canyon Country, Ichiban Santa Clarita, Ichiban SCV, ichibanscv, Ichiban Sushi Rolls, Ichiban Bar, Ichiban All You Can Eat, Ichiban ayce, Ichiban all-you-can-eat, ayce sushi santa clarita, ayce sushi, ayce scv, ichiban sushi delivery, ubereats ichiban, ubereats, ichiban happy hour"
        ></meta>
        <meta
          name="google-site-verification"
          content="OINQBuObmtSiXbJalJ3dmBaSvK0lJaUUybkptctbx80"
        />
        <meta name="author" content="FranklinDesign (designbyfranklin.com)" />
      </Head>
      <Layout>
        <div>
          <Hero></Hero>
          {/* <BigSlider></BigSlider> */}
        </div>

        <Container maxWidth="lg" style={{ marginBottom: 50 }}>
          <Mailchimp></Mailchimp>
          <ListFeaturedItems></ListFeaturedItems>
          <div style={{ marginTop: 40, marginBottom: 20 }}>
            <OrderWith></OrderWith>
          </div>
        </Container>
      </Layout>
    </>
  );
}
