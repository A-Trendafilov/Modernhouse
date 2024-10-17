// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import LazyLoad from "../LazyLoad"; // Import optimized LazyLoad
import LocationLinks from "./LocationLinks";
import ContactInfo from "./ContactInfo";
import SocialIcons from "./SocialIcons";
import MapSection from "./MapSection";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
  companyName,
} from "../../data/footerData";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#333",
      color: "#fff",
      padding: "20px",
      marginTop: "20px", // Space above the footer
    }}
  >
    {/* First Row: Main Content */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Optional: bottom border for separation
        paddingBottom: "20px", // Space below the main content
      }}
    >
      {/* Contact Us Section */}
      <LazyLoad customStyles={{ flex: 1 }}>
        <Box
          sx={{
            flex: 1,
            padding: "10px",
            marginBottom: { xs: "20px", md: "0" },
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Свържете се с нас
          </Typography>
          <ContactInfo contactDetails={contactDetails} />

          {/* Locations Section */}
          <Typography
            variant="h6"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Нашите локации
          </Typography>
          <LocationLinks locations={locations} />

          {/* Follow Us Section */}
          <Typography
            variant="h6"
            sx={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Последвайте ни
          </Typography>
          <SocialIcons socialLinks={socialLinks} />
        </Box>
      </LazyLoad>

      {/* Maps Section - Lazy Load each map individually */}
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
          <LazyLoad
            customStyles={{ width: "100%" }}
            key={index}
            delay={1 * (index + 1)} // Slightly adjust the delay
          >
            <MapSection title={map.title} src={map.src} />
          </LazyLoad>
        ))}
      </Box>
    </Box>

    {/* Second Row: Copyright Section */}
    <LazyLoad delay={1.5}>
      <Box
        sx={{
          padding: "10px",
          textAlign: "center",
          marginTop: "10px", // Add space above the copyright section
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} {companyName}. Всички права запазени.
        </Typography>
      </Box>
    </LazyLoad>
  </Box>
);

export default Footer;
