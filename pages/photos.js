import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Galleries from "../components/Galleries";

export default function Photos() {
  return (
    <Layout>
      <Container maxWidth="lg" style={{ marginTop: 50, marginBottom: 50 }}>
        <Typography variant="h4" id="freshrolls">
          Photo Gallery
        </Typography>
        <p>Featuring selected customer's photos from our social channels.</p>

        <Galleries />
      </Container>
    </Layout>
  );
}
