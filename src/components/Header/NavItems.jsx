// NavItems.jsx
import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import { navItems } from "../../data/navData"; // Import the navigation data

const NavItems = ({ handleDrawerToggle }) => (
  <List>
    {navItems.map((item) => (
      <ListItem
        key={item.text}
        component={NavLink} // Changed from Link to NavLink
        to={item.path}
        onClick={handleDrawerToggle}
        sx={{
          textDecoration: "none",
          color: "inherit",
          "&:hover": { backgroundColor: "rgba(52, 73, 94 , 0.2)" },
          "&.active": {
            backgroundColor: "rgba(133, 146, 158 , 0.4)", // Active tab styling
            fontWeight: "bold", // Optional: make active link bold
          },
        }}
      >
        <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} sx={{ color: "black" }} />
      </ListItem>
    ))}
  </List>
);

export default NavItems;
