// import { createMuiTheme } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },

  palette: {
    type: "light",
    primary: { main: "#ed2227" }, // [brand]red
    secondary: {
      main: "#f6a8ca", // [brand]pink
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fffff", // preferred background color
    },
  },
});

export default theme;
