import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: red[500] },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#000"
    }
  }
});

export default theme;
