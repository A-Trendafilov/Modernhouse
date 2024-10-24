// src/components/DrawerMenu.jsx
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
        height: "100%", // Ensures full height of drawer
        padding: 2, // Adds padding
        bgcolor: theme.palette.primary.dark,
      }}
    >
      <NavItems handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

export default DrawerMenu;
