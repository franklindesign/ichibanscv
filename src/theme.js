import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },
  palette: {
    type: "light",
    primary: { main: red[500] },
    secondary: {
      main: "#F46523"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
