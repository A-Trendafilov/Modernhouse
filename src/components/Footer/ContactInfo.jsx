import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactInfo = ({ contactDetails }) => (
  <>
    {contactDetails.map(({ Icon, text }, index) => (
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Icon sx={{ marginRight: "8px" }} />

        {/* If text contains a link, use motion.a to apply hover effects */}
        {typeof text === "string" ? (
          <Typography variant="body1">{text}</Typography>
        ) : (
          <motion.a
            href={text.props.href} // Use the href from the text if it's an anchor
            whileHover={{ scale: 1.05, color: "#14deee" }} // Scale effect and color change on hover
            transition={{ duration: 0.3 }}
            style={{ color: "#fff", textDecoration: "none", cursor: "pointer" }}
          >
            <Typography variant="body1">{text.props.children}</Typography>
          </motion.a>
        )}
      </Box>
    ))}
  </>
);

export default ContactInfo;
