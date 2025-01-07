import PropTypes from "prop-types"; // Import PropTypes
import { Box, useTheme } from "@mui/material";

import NavItems from "./NavItems.jsx";

const DrawerMenu = ({ handleDrawerToggle }) => {
  const theme = useTheme(); // Access the theme object

  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100vh", // Ensures full height of drawer
        padding: 2, // Adds padding
        bgcolor: theme.palette.background.main,
        overflow: "auto",
      }}
    >
      <NavItems handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

// Prop validation
DrawerMenu.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired, // handleDrawerToggle should be a function and required
};

export default DrawerMenu;
