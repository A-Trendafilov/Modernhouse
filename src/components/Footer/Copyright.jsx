import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const Copyright = ({ companyName }) => {
  return (
    <Box textAlign="center" mt={1} p={1}>
      <Typography variant="body1" sx={{ color: "text.primary" }}>
        © {new Date().getFullYear()} {companyName}. Всички права запазени.
      </Typography>
    </Box>
  );
};

Copyright.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default Copyright;
