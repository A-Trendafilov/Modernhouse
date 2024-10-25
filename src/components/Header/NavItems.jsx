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
            bgcolor: theme.palette.background.default, // Set transparent background
            "&:hover": {
              backgroundColor: theme.palette.action.hover, // Use theme action hover color
              boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2)`, // Add shadow on hover
            },
            "&.active": {
              backgroundColor: theme.palette.action.hover, // Active tab styling from theme
              fontWeight: "bold", // Optional: make active link bold
            },
            padding: theme.spacing(2), // Add some padding
            borderRadius: 5, // Optional: rounded corners
            transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          }}
        >
          <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              color: theme.palette.text.secondary,
            }}
            primary={item.text}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
