import { useEffect } from "react";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { initGA, logPageView } from "../utils/analytics";

function Layout(props) {
  const fullheight = {
    height: "100vh"
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
      {props.children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
