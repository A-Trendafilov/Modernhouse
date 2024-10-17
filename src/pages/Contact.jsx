// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/Form/ContactForm"; // Adjust the path according to your project structure
import LazyLoad from "../components/LazyLoad"; // Import LazyLoad
import ContactInfo from "../components/Footer/ContactInfo"; // Import ContactInfo
import { Box, Typography } from "@mui/material"; // Import Box and Typography for layout
import { contactDetails } from "../data/footerData"; // Import your contactDetails

const Contact = () => {
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
            sx={{ marginBottom: "16px", fontWeight: "bold", color: "#333" }} // Match font weight and color
          >
            Свържете се с нас
          </Typography>
          <ContactInfo contactDetails={contactDetails} />
        </Box>
      </LazyLoad>
    </Box>
  );
};

export default Contact;
