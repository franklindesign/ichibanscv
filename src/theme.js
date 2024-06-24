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
  typography: {
    fontFamily: "Nunito Sans"
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

theme.typography.h4 = {
  fontSize: '18px',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};
theme.typography.h6 = {
  fontSize: '16px',
  '@media (min-width:600px)': {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '21px',
  },
  
};
theme.typography.body1 = {
  fontSize: '14px',
  '@media (min-width:600px)': {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
};

theme.typography.subtitle1 = {
  fontSize: '12px',
  '@media (min-width:600px)': {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '12px',
  },
};


export default theme;
