import { useEffect } from "react";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { initGA, logPageView } from "../utils/analytics";

function Layout(props) {
  const fullheight = {
    height: "100vh"
  };
  const navMargin = {
    marginTop: "80px"
  };
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <div style={fullheight}>
      <Nav />
      <div style={navMargin}>{props.children}</div>

      <Footer></Footer>
    </div>
  );
}

export default Layout;
