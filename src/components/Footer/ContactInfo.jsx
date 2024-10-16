// ContactInfo.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const ContactInfo = ({ contactDetails }) => (
  <>
    {contactDetails.map(({ Icon, text }, index) => (
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
      >
        <Icon sx={{ marginRight: "8px" }} />
        <Typography variant="body1">{text}</Typography>
      </Box>
    ))}
  </>
);

export default ContactInfo;
