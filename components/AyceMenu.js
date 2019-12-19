import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sushis = [
    { id: 1, item: "Tuna" },
    { id: 2, item: "Salmon" },
    { id: 3, item: "Escolar (Ono)" },
    { id: 4, item: "Albacore" },
    { id: 5, item: "Halibut" },
    { id: 6, item: "Yellowtail" },
    { id: 7, item: "Shrimp" },
    { id: 8, item: "White Fish" },
    { id: 9, item: "Crab" },
    { id: 10, item: "Red Clam" },
    { id: 11, item: "Octopus" },
    { id: 12, item: "Egg" },
    { id: 13, item: "Smelt Egg" },
    { id: 14, item: "Squid" },
    { id: 15, item: "Fresh Water Eel" },
    { id: 16, item: "Salmon Egg" },
    { id: 17, item: "Ocean Striped Bass" },
    { id: 18, item: "Scallop" },
    { id: 19, item: "Mackerel" }
  ];
  const listSushis = sushis.map(sushi => <li key={sushi.id}>{sushi.item}</li>);

  const regularRolls = [
    { id: 1, item: "Tuna Roll" },
    { id: 2, item: "Crab Roll" },
    { id: 3, item: "Eel Roll" },
    { id: 4, item: "Scallop Roll" },
    { id: 5, item: "Avocado Roll" },
    { id: 6, item: "Shrimp Roll" },
    { id: 7, item: "Cucumber Roll" },
    { id: 8, item: "Yellowtail Roll" },
    { id: 9, item: "California Roll" },
    { id: 10, item: "Salmon Roll" },
    { id: 11, item: "Vegetable Roll" },
    { id: 12, item: "Spicy Tuna Roll" },
    { id: 13, item: "Salmon Skin Roll" },
    { id: 14, item: "Shrimp Crab Roll" },
    { id: 15, item: "Asparagus Roll" },
    { id: 16, item: "Albacore Roll" },
    { id: 17, item: "Philly Roll" }
  ];

  const listRegularRolls = regularRolls.map(regularRoll => (
    <li key={regularRoll.id}>{regularRoll.item}</li>
  ));

  const freshRolls = [
    { id: 1, item: "Sexy on the Beach" },
    { id: 2, item: "Spicy Tuna on Rice" },
    { id: 3, item: "X Girl Friend Roll" },
    { id: 4, item: "Aguachile Roll" },
    { id: 5, item: "Yellowtail Delight Roll" },
    { id: 6, item: "Hawaiian Roll" },
    { id: 7, item: "Cucumber Sashimi Roll" },
    { id: 8, item: "Sakura Roll" },
    { id: 9, item: "Sexy Salmon Roll" },
    { id: 10, item: "Lemon Roll" },
    { id: 11, item: "Mexican Roll" },
    { id: 12, item: "Spicy Albacore Crunch Roll" },
    { id: 13, item: "Albacore Delight Roll" },
    { id: 14, item: "Mango Tango Roll" },
    { id: 15, item: "Mango Mania Roll" },
    { id: 16, item: "Alaskan Roll" },
    { id: 17, item: "Rainbow Roll" },
    { id: 18, item: "911 Roll" },
    { id: 19, item: "Red Dragon Roll" },
    { id: 20, item: "Baja Roll (NEW!)" },
    { id: 21, item: "Superman Burrito Roll (NEW!)" }
  ];
  const listFreshRolls = freshRolls.map(freshRoll => (
    <li key={freshRoll.id}>{freshRoll.item}</li>
  ));

  const tempuraRolls = [
    { id: 1, item: "Spicy Shrimp & Crab Crunch Roll" },
    { id: 2, item: "California Tempura Roll" },
    { id: 3, item: "Avocado Crunch Roll" },
    { id: 4, item: "Shrimp Tempura Roll" },
    { id: 5, item: "Crunch Roll" },
    { id: 6, item: "Amber Roll" },
    { id: 7, item: "Spicy Tuna Tempura Roll" },
    { id: 8, item: "Monkey Roll" },
    { id: 9, item: "Dragon Roll" },
    { id: 10, item: "Vegas Roll" },
    { id: 11, item: "Spider Roll" },
    { id: 12, item: "Popcorn Lobster Roll" },
    { id: 13, item: "Crunch Scallop Roll" },
    { id: 14, item: "Tiger Roll" },
    { id: 15, item: "Fire Fire Roll" },
    { id: 16, item: "Sun Burn Roll" },
    { id: 17, item: "Heart Attack" }
  ];

  const listTempuraRolls = tempuraRolls.map(tempuraRoll => (
    <li key={tempuraRoll.id}>{tempuraRoll.item}</li>
  ));

  const bakedRolls = [
    { id: 1, item: "Baked Salmon Roll" },
    { id: 2, item: "Sunset Roll" },
    { id: 3, item: "Volcano Roll" },
    { id: 4, item: "Caterpillar Roll" },
    { id: 5, item: "Lobster Roll" },
    { id: 6, item: "BSC Roll" }
  ];

  const listBakedRolls = bakedRolls.map(bakedRoll => (
    <li key={bakedRoll.id}>{bakedRoll.item}</li>
  ));

  const specialtyItems = [
    { id: 1, item: "Big Scallop Sushi" },
    { id: 2, item: "Salmon Sashimi (4 pieces)" },
    { id: 3, item: "Uni (Sea Urchin)" },
    { id: 4, item: "Sweet Shrimp" },
    { id: 5, item: "Soft Shell Crab" },
    { id: 6, item: "Oyster (2 Pieces)" },
    { id: 7, item: "Oyster Ceviche (2 Pieces)" }
  ];

  const listSpecialtyItems = specialtyItems.map(specialtyItem => (
    <li key={specialtyItem.id}>{specialtyItem.item}</li>
  ));

  const appetizers = [
    { id: 1, item: "Edamame" },
    { id: 2, item: "Shumai" },
    { id: 3, item: "Gyoza" },
    { id: 4, item: "Baked Mussel" },
    { id: 5, item: "Dynamite" },
    { id: 6, item: "Calamari Tempura" },
    { id: 7, item: "Mixed Tempura" },
    { id: 8, item: "Shrimp Tempura" },
    { id: 9, item: "Vegetable Tempura" },
    { id: 10, item: "Spicy Garlic Edamame" },
    { id: 11, item: "Shishito Peppers" },
    { id: 12, item: "Spicy Tuna on Rice Cake" }
  ];

  const listAppetizers = appetizers.map(appetizer => (
    <li key={appetizer.id}>{appetizer.item}</li>
  ));

  const saladAndKitchens = [
    {
      id: 1,
      item: "House Salad"
    },
    {
      id: 2,
      item: "Cucumber Salad"
    },
    {
      id: 3,
      item: "Seaweed Salad"
    },
    {
      id: 4,
      item: "Chicken Teriyaki"
    },
    {
      id: 5,
      item: "Beef Teriyaki"
    },
    {
      id: 6,
      item: "Sesami Chicken"
    },
    {
      id: 7,
      item: "Bulgogi"
    },
    {
      id: 8,
      item: "Rice (fried/steam)"
    },
    {
      id: 9,
      item: "Miso Soup"
    },
    {
      id: 10,
      item: "Udon"
    },
    {
      id: 11,
      item: "Ramen"
    }
  ];

  const listSaladAndKitchens = saladAndKitchens.map(saladAndKitchen => (
    <li key={saladAndKitchen.id}>{saladAndKitchen.item}</li>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Sushi" {...a11yProps(0)} />
          <Tab label="Regular Rolls" {...a11yProps(1)} />
          <Tab label="Fresh Rolls" {...a11yProps(2)} />
          <Tab label="Tempura Rolls" {...a11yProps(3)} />
          <Tab label="Baked Rolls" {...a11yProps(4)} />
          <Tab label="Specialty Item" {...a11yProps(5)} />
          <Tab label="Appetizers" {...a11yProps(6)} />
          <Tab label="Salad and Kitchen" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ul>{listSushis}</ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>{listRegularRolls}</ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>{listFreshRolls}</ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ul>{listTempuraRolls}</ul>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ul>{listBakedRolls}</ul>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ul>{listSpecialtyItems}</ul>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ul>{listAppetizers}</ul>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ul>{listSaladAndKitchens}</ul>
      </TabPanel>
    </div>
  );
}
