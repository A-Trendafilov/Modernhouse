import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { FaHome, FaInfoCircle, FaEnvelope, FaWarehouse } from "react-icons/fa";
import { GiModernCity, GiSteelClaws } from "react-icons/gi";
import { BsImages } from "react-icons/bs";
import logo from "../assets/logo.png";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        <img
          src={logo}
          alt="Firm Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
      </Typography>
      <List>
        {[
          { text: "Начало", icon: <FaHome />, path: "/" },
          { text: "За нас", icon: <FaInfoCircle />, path: "/about" },
          { text: "Контакти", icon: <FaEnvelope />, path: "/contact" },
          { text: "Контейнери", icon: <FaWarehouse />, path: "/container" },
          { text: "Галерия", icon: <BsImages />, path: "/gallery" },
          // Direct links to Houses
          {
            text: "Стоманени къщи",
            icon: <GiSteelClaws />,
            path: "/house/steel",
          },
          {
            text: "Сглобяеми къщи",
            icon: <GiModernCity />,
            path: "/house/modern",
          },
        ].map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              textDecoration: "none",
              color: "inherit",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "black" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
            }}
          >
            <img
              src={logo}
              alt="Firm Logo"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
          </Box>

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
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
