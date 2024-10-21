import React from "react";
import { Box, Typography, useTheme, Grid2 } from "@mui/material"; // Import Grid2 for layout
import LazyLoad from "../LazyLoad";
import InfoList from "./InfoList";
import SocialIcons from "./SocialIcons";
import MapSection from "./MapSection";
import Copyright from "./Copyright"; // Import the new Copyright component
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
        backgroundColor: theme.palette.background.paper,
        color: commonTextStyles.color,
        padding: theme.spacing(2.5),
        marginTop: theme.spacing(2.5),
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          textAlign: "center",
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBottom: theme.spacing(2.5),
        }}
      >
        {/* Contact and Location Section */}
        <LazyLoad customStyles={{ flex: 1 }}>
          <Box sx={{ padding: theme.spacing(1) }}>
            <Typography variant="h6" sx={commonTextStyles}>
              Свържете се с нас
            </Typography>
            <InfoList
              items={contactDetails}
              textStyle={{ fontSize: "1rem" }}
              motionProps={{
                whileHover: { scale: 1.05, color: theme.palette.accent.main },
                transition: { duration: 0.3 },
              }}
            />

            <Typography variant="h6" sx={commonTextStyles}>
              Нашите локации
            </Typography>
            <InfoList
              items={locations}
              textStyle={{ fontSize: "1rem" }}
              motionProps={{
                whileHover: { scale: 1.05, color: theme.palette.accent.main },
                transition: { duration: 0.3 },
              }}
            />

            <Typography variant="h6" sx={commonTextStyles}>
              Последвайте ни
            </Typography>
            <SocialIcons socialLinks={socialLinks} />
          </Box>
        </LazyLoad>

        {/* Map Section using Grid2 for better layout */}
        <Grid2
          container
          spacing={2}
          sx={{
            flex: 1,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {maps.map((map, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <LazyLoad
                customStyles={{
                  width: "100%",
                  marginBottom: theme.spacing(2),
                }}
                delay={index + 1}
              >
                <MapSection title={map.title} src={map.src} />
              </LazyLoad>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Copyright Section */}
      <LazyLoad delay={1.5}>
        <Copyright companyName={companyName} />
      </LazyLoad>
    </Box>
  );
};

export default Footer;
