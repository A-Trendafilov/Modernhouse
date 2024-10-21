// Header.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Box, Drawer, useTheme } from "@mui/material"; // Import useTheme
import MenuIcon from "@mui/icons-material/Menu";
import AnimatedText from "../AnimatedText";
import Logo from "./Logo";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); // Access the theme object

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`, // Use theme colors
          backdropFilter: "blur(15px)",
          boxShadow: theme.shadows[4], // Use theme shadow for elevation
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
        >
          <Logo />
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <AnimatedText />
          </Box>
          <Box
            component="span"
            onClick={handleDrawerToggle}
            sx={{ display: "flex", cursor: "pointer", marginRight: "10px" }}
          >
            <MenuIcon sx={{ color: theme.palette.text.primary }} />{" "}
            {/* Use theme text color */}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <DrawerMenu handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
};

export default Header;
