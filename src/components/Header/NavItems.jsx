// src/components/NavItems.jsx
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
} from "@mui/material"; // Import useTheme
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import { navItems } from "../../data/navData"; // Import the navigation data

const NavItems = ({ handleDrawerToggle }) => {
  const theme = useTheme(); // Access the theme object

  return (
    <List>
      {navItems.map((item) => (
        <ListItem
          key={item.text}
          component={NavLink} // Changed from Link to NavLink
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            textDecoration: "none",
            bgcolor: theme.palette.primary.dark, // Set transparent background
            "&:hover": {
              backgroundColor: theme.palette.action.hover, // Use theme action hover color
              boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`, // Add shadow on hover
            },
            "&.active": {
              backgroundColor: theme.palette.primary.main, // Active tab styling from theme
              fontWeight: "bold", // Optional: make active link bold
            },
            padding: theme.spacing(1.5), // Add some padding
            borderRadius: 2, // Optional: rounded corners
            transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          }}
        >
          <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ color: "inherit" }} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
