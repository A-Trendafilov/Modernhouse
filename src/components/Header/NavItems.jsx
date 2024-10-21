// NavItems.jsx
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
            color: theme.palette.text.primary, // Use theme color for text
            "&:hover": {
              backgroundColor: theme.palette.action.hover, // Use theme action hover color
            },
            "&.active": {
              backgroundColor: theme.palette.primary.light, // Active tab styling from theme
              color: theme.palette.primary.contrastText, // Change text color for active link
              fontWeight: "bold", // Optional: make active link bold
            },
          }}
        >
          <ListItemIcon sx={{ color: theme.palette.text.primary }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} sx={{ color: "inherit" }} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
