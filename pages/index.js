import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import BigSlider from "../components/BigSlider";

export default function Index() {
  return (
    <Layout>
      <div>
        <BigSlider></BigSlider>
      </div>
      <Container maxWidth="lg">
        <Box my={4}>
          <Link href="/menu">
            <Typography variant="h6" component="h1" gutterBottom>
              View Menu
            </Typography>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
