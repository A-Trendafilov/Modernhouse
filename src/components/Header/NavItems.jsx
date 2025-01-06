import PropTypes from "prop-types"; // Import PropTypes
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling

import { navItems } from "../../data/navData.jsx"; // Import the navigation data

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
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow on hover
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
            primary={
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                {item.text}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

// Prop validation
NavItems.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired, // handleDrawerToggle should be a function and required
};

export default NavItems;
