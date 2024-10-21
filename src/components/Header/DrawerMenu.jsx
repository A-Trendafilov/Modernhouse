// DrawerMenu.jsx
import React from "react";
import { Box, useTheme } from "@mui/material"; // Import useTheme
import NavItems from "./NavItems";

const DrawerMenu = ({ handleDrawerToggle }) => {
  const theme = useTheme(); // Access the theme object

  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: theme.palette.background.paper, // Use theme background
        color: theme.palette.text.primary, // Use theme text color
        height: "100%", // Ensures full height of drawer
        padding: 2, // Adds padding
        boxShadow: theme.shadows[2], // Optional: adds a subtle shadow
      }}
    >
      <NavItems handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

export default DrawerMenu;
