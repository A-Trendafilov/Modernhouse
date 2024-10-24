// src/components/Contact/ContactInfo.jsx
import React from "react";
import { Box, Typography } from "@mui/material"; // Import necessary MUI components
import InfoList from "../Footer/InfoList"; // Import InfoList

const ContactInfo = ({ items }) => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ marginBottom: 3,  color: "text.primary" }}
      >
        Център продажби
      </Typography>
      <InfoList
        items={items}
        boxStyle={{ marginBottom: "35px" }} // Custom box styles
        textStyle={{ fontSize: "1rem", color: "text.secondary" }} // Define text color
        motionProps={{
          whileHover: { scale: 1.05, color: "primary.main" }, // Hover effects for links
          transition: { duration: 0.3 },
        }}
      />
    </Box>
  );
};

export default ContactInfo;
