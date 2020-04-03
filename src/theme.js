import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  palette: {
    type: "dark",
    primary: { main: red[50] },
    secondary: {
      main: "#F46523",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#050505", // preferred background color
    },
  },
});

export default theme;
