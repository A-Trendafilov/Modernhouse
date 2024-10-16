// Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LocationLinks from "./LocationLinks";
import ContactInfo from "./ContactInfo";
import SocialIcons from "./SocialIcons";
import MapSection from "./MapSection";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
} from "../../data/footerData"; // Import the data

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={footerVariants}
    transition={{ duration: 0.5 }}
    style={{ width: "100%" }} // Ensure the footer takes full width
  >
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ flex: 1, padding: "10px" }}>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Contact Us
        </Typography>
        <LocationLinks locations={locations} />
        <ContactInfo contactDetails={contactDetails} />
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Follow Us
        </Typography>
        <SocialIcons socialLinks={socialLinks} />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "10px",
          gap: "10px",
        }}
      >
        {maps.map((map, index) => (
          <MapSection
            key={index}
            title={map.title}
            src={map.src}
            delay={map.delay}
          />
        ))}
      </Box>
    </Box>
  </motion.div>
);

export default Footer;
