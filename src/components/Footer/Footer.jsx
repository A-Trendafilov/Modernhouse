// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import LazyLoad from "../LazyLoad"; // Import optimized LazyLoad
import InfoList from "./InfoList"; // Import the updated InfoList component
import SocialIcons from "./SocialIcons";
import MapSection from "./MapSection";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
  companyName,
} from "../../data/footerData";

const Footer = () => {
  return (
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

            {/* Using InfoList to render contact details */}
            <InfoList
              items={contactDetails}
              boxStyle={{ marginBottom: "15px" }} // Custom box styles
              textStyle={{ color: "#fff", fontSize: "1rem" }} // Custom text styles
              motionProps={{
                whileHover: { scale: 1.05, color: "#14deee" }, // Hover effects for links
                transition: { duration: 0.3 },
              }}
            />

            {/* Locations Section */}
            <Typography
              variant="h6"
              sx={{ marginTop: "20px", fontWeight: "bold" }}
            >
              Нашите локации
            </Typography>
            {/* Using InfoList for locations */}
            <InfoList
              items={locations.map((location) => ({
                ...location,
                text: location.text, // Ensure text is available
              }))}
              boxStyle={{ marginBottom: "15px" }} // Custom box styles
              textStyle={{ color: "#fff", fontSize: "1rem" }} // Custom text styles
              motionProps={{
                whileHover: { scale: 1.05, color: "#14deee" }, // Hover effects for links
                transition: { duration: 0.3 },
              }}
            />

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
};

export default Footer;
