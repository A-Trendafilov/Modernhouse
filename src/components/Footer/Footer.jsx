// src/components/Footer.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import LazyLoad from "../LazyLoad";
import InfoList from "./InfoList";
import SocialIcons from "./SocialIcons";
import MapSection from "./MapSection";
import Copyright from "./Copyright";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
  companyName,
} from "../../data/footerData";

const Footer = () => {
  const theme = useTheme();

  const commonTextStyles = {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent", // Set to transparent to show parent background
        color: commonTextStyles.color,
        padding: theme.spacing(2.5),
        marginTop: theme.spacing(2.5),
      }}
    >
      <Box
        sx={{
          borderBottom: `2px solid ${theme.palette.divider}`,
          marginY: theme.spacing(2),
        }}
      />
      {/* First Row: Contact Info and Maps */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" }, // Block on mobile, flex on desktop
          justifyContent: "space-between", // Space between left and right
        }}
      >
        {/* Left Section: Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ ...commonTextStyles }}>
            Свържете се с нас
          </Typography>
          <InfoList
            items={contactDetails}
            textStyle={{
              fontSize: "1rem",
              color: theme.palette.text.primary,
            }} // Define link color
            motionProps={{
              whileHover: { scale: 1.05, color: theme.palette.text.active },
              transition: { duration: 0.3 },
            }}
          />
          <Typography variant="h6" sx={{ ...commonTextStyles }}>
            Нашите локации
          </Typography>
          <InfoList
            items={locations}
            textStyle={{
              fontSize: "1rem",
              color: theme.palette.text.secondary,
            }} // Define link color
            motionProps={{
              whileHover: { scale: 1.05, color: theme.palette.text.secondary },
              transition: { duration: 0.3 },
            }}
          />
          <Typography variant="h6" sx={{ ...commonTextStyles }}>
            Последвайте ни
          </Typography>
          <SocialIcons socialLinks={socialLinks} />
        </Box>

        {/* Right Section: Maps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
            flex: 1,
            justifyContent: "space-between", // Space maps evenly
            marginTop: { xs: 2, md: 0 }, // Margin on top for mobile
          }}
        >
          {maps.map((map, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 auto", // Allow flexing
                borderRadius: 1, // Rounded corners for maps
                overflow: "hidden", // Ensure no overflow
                transition: "transform 0.3s ease", // Smooth hover transition
                "&:hover": {
                  transform: "scale(1.05)", // Scale on hover
                },
              }}
            >
              <LazyLoad customStyles={{ width: "100%" }} delay={index + 1}>
                <MapSection title={map.title} src={map.src} />
              </LazyLoad>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderBottom: `2px solid ${theme.palette.divider}`,
          marginY: theme.spacing(2),
        }}
      />

      {/* Second Row: Copyright Section */}
      <LazyLoad delay={1.5}>
        <Copyright companyName={companyName} />
      </LazyLoad>
      <Box
        sx={{
          borderBottom: `2px solid ${theme.palette.divider}`,
          marginY: theme.spacing(2),
        }}
      />
    </Box>
  );
};

export default Footer;
