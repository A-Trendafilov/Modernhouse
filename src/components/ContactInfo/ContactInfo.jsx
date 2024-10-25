// src/components/Contact/ContactInfo.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import InfoList from "../common/InfoList";
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

export default ContactInfo;
