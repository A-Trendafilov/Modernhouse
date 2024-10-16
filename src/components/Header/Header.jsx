// Header.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AnimatedText from "../AnimatedText";
import Logo from "./Logo";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.4))",
          backdropFilter: "blur(15px)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          borderRadius: "15px 15px", // Rounded corners retained
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
            sx={{ display: "flex", cursor: "pointer", marginRight: "10px" }} // Show the hamburger menu on all devices
          >
            <MenuIcon sx={{ color: "black" }} />
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
