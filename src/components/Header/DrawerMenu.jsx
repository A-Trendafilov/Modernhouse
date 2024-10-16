// DrawerMenu.jsx
import React from "react";
import { Box } from "@mui/material";
import NavItems from "./NavItems";

const DrawerMenu = ({ handleDrawerToggle }) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <NavItems handleDrawerToggle={handleDrawerToggle} />
  </Box>
);

export default DrawerMenu;
