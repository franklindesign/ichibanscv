import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import PhotoGrid from "../components/PhotoGrid";

import Typography from "@material-ui/core/Typography";
import Galleries from "../components/Galleries";

export default function Photos() {
  return (
    <Layout>
      <Container maxWidth="lg" style={{ marginTop: 50, marginBottom: 50 }}>
        <Typography variant="h4" id="freshrolls">
          Photos
        </Typography>
        <p>
          Select customer photos from our social channels including Yelp &
          Google.
        </p>

        <Galleries />
      </Container>
    </Layout>
  );
}
