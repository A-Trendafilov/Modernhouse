import { AppBar, Toolbar, Box, Drawer, useTheme } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import AnimatedText from "../utils/AnimatedText.jsx";
import Logo from "./Logo.jsx";
import DrawerMenu from "./DrawerMenu.jsx";

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
          background: "transparent", // Make the background transparent
          backdropFilter: "blur(10px)", // Add a blur effect
          boxShadow: "none", // Remove box shadow if you want a flat look
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
        >
          <Logo />
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <AnimatedText />
          </Box>
          <Box
            component="span"
            onClick={handleDrawerToggle}
            sx={{ display: "flex", cursor: "pointer", marginRight: "10px" }}
          >
            <MenuIcon sx={{ color: theme.palette.text.secondary }} />{" "}
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
