import PropTypes from "prop-types";
import { Box, Typography, useTheme } from "@mui/material";

import InfoList from "../common/InfoList.jsx";
import { getStyles } from "./ContactInfoStyle"; // Adjust the import

const ContactInfo = ({ items }) => {
  const theme = useTheme();
  const styles = getStyles(theme); // Get styles using theme

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" gutterBottom sx={styles.title}>
        Център продажби
      </Typography>
      <InfoList {...styles.infoList} items={items} />
    </Box>
  );
};

ContactInfo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType, // Icon component
      text: PropTypes.oneOfType([
        PropTypes.string, // Text can be a string
        PropTypes.element, // Or a React element
      ]).isRequired, // `text` is required
    })
  ).isRequired, // `items` array is required
};

export default ContactInfo;
