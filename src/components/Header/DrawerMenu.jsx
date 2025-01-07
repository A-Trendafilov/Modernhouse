import PropTypes from "prop-types";
import { Box, useTheme } from "@mui/material";

import NavItems from "./NavItems.jsx";

const DrawerMenu = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "300px",
        height: "100vh",
        padding: 2,
        bgcolor: theme.palette.background.main,
        overflow: "auto",
      }}
    >
      <NavItems handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

DrawerMenu.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default DrawerMenu;
