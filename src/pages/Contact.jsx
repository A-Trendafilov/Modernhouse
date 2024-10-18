// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/Form/ContactForm"; // Adjust the path according to your project structure
import LazyLoad from "../components/LazyLoad"; // Import LazyLoad
import InfoList from "../components/Footer/InfoList"; // Import InfoList instead of ContactInfo
import { Box, Typography } from "@mui/material"; // Import Box and Typography for layout
import { salesDetails } from "../data/salesData"; // Import your contactDetails

const Contact = () => {
  const contactDetails = salesDetails.map((detail) => ({
    Icon: detail.Icon,
    text: detail.text,
  }));

  return (
    <Box
      className="contact-page"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        margin: "40px auto",
        maxWidth: "1200px",
        gap: "20px", // Add space between the components
      }}
    >
      <LazyLoad
        customStyles={{ flex: 1 }} // Allow the form to grow
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <ContactForm />
      </LazyLoad>

      <LazyLoad
        customStyles={{ flex: 1 }} // Allow the contact info to grow
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f9f9f9", // Match the form background color
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Optional: shadow for depth
          }}
        >
          <Typography
            variant="h4" // Change to h4 to match ContactForm title
            gutterBottom
            textAlign="center" // Center the title
            sx={{ marginBottom: "30px", fontWeight: "bold", color: "#333" }} // Match font weight and color
          >
            Център продажби
          </Typography>
          <InfoList
            items={contactDetails} // Pass formatted contact details to InfoList
            boxStyle={{ marginBottom: "35px" }} // Custom box styles
            textStyle={{ color: "#333", fontSize: "1rem" }} // Custom text styles
            motionProps={{
              whileHover: { scale: 1.05, color: "#14deee" }, // Hover effects for links
              transition: { duration: 0.3 },
            }}
          />
        </Box>
      </LazyLoad>
    </Box>
  );
};

export default Contact;
