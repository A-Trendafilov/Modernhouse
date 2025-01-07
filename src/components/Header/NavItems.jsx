import { useState } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import { navItems } from "../../data/navData.jsx";
import { getNavItemsStyle } from "./NavItemStyle.js";

const NavItems = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const styles = getNavItemsStyle(theme);
  const [open, setOpen] = useState({});

  const handleItemClick = (item, e) => {
    if (item.subItems) {
      e.preventDefault();
      setOpen((prevState) => ({
        ...prevState,
        [item.text]: !prevState[item.text],
      }));
    } else {
      handleDrawerToggle();
    }
  };

  return (
    <List>
      {navItems.map((item) => (
        <div key={item.text}>
          <ListItem
            component={item.subItems ? "div" : NavLink}
            to={item.subItems ? undefined : item.path}
            onClick={(e) => handleItemClick(item, e)}
            sx={styles.listItem}
          >
            <ListItemIcon sx={styles.listItemIcon}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" sx={styles.listItemText}>
                  {item.text}
                </Typography>
              }
            />
            {item.subItems &&
              (open[item.text] ? (
                <ExpandLess sx={styles.collapseIcon} />
              ) : (
                <ExpandMore sx={styles.collapseIcon} />
              ))}
          </ListItem>

          {item.subItems && (
            <Collapse
              in={open[item.text]}
              timeout="auto"
              unmountOnExit
              sx={styles.collapse}
            >
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem
                    key={subItem.text}
                    component={NavLink}
                    to={subItem.path}
                    onClick={handleDrawerToggle}
                    sx={styles.subItem}
                  >
                    <ListItemIcon sx={styles.listItemIcon}>
                      {subItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={styles.listItemText}>
                          {subItem.text}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

NavItems.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default NavItems;
