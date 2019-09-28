import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
const fullheight = {
  height: "100vh"
};

const Layout = props => (
  <div style={fullheight}>
    <Nav />
    {props.children}
    <Footer></Footer>
  </div>
);

export default Layout;
