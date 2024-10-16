// NavItems.jsx
import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "../../data/navData"; // Import the navigation data

const NavItems = ({ handleDrawerToggle }) => (
  <List>
    {navItems.map((item) => (
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
);

export default NavItems;
