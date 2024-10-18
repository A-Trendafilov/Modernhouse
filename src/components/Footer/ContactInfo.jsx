// src/components/ContactInfo.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContactInfo = ({
  contactDetails,
  boxStyle = {},
  textStyle = {},
  motionProps = {
    whileHover: { scale: 1.05, color: "#14deee" },
    transition: { duration: 0.3 },
  },
}) => (
  <>
    {contactDetails.map(({ Icon, text }, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          ...boxStyle,
        }}
      >
        <Icon sx={{ marginRight: "8px" }} />

        {typeof text === "string" ? (
          <Typography variant="body1" sx={{ color: "#fff", ...textStyle }}>
            {text}
          </Typography>
        ) : // Ensure that text is a valid React element with props
        text && React.isValidElement(text) ? (
          <motion.a
            href={text.props.href} // Safely access href if text is a valid element
            style={{
              textDecoration: "none",
              cursor: "pointer",
              // Default color
            }}
            {...motionProps}
          >
            <Typography
              variant="body1"
              sx={{
                color: "inherit", // Inherit color from motion.a
              }}
            >
              {text.props.children} {/* Display text directly */}
            </Typography>
          </motion.a>
        ) : (
          <Typography variant="body1" sx={{ color: "#fff", ...textStyle }}>
            Invalid Link
          </Typography>
        )}
      </Box>
    ))}
  </>
);

export default ContactInfo;
