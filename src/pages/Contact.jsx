// src/pages/Contact.jsx
import React from "react";
import { Box } from "@mui/material"; // Import Box for layout
import LazyLoad from "../components/LazyLoad"; // Import LazyLoad
import ContactForm from "../components/Form/ContactForm"; // Import ContactForm
import ContactInfo from "../components/ContactInfo/ContactInfo"; // Import the new ContactInfo component
import { salesDetails } from "../data/salesData"; // Import contact details

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
        gap: "20px",
        padding: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <LazyLoad
        customStyles={{ flex: 1 }}
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <ContactForm />
      </LazyLoad>

      <LazyLoad
        customStyles={{ flex: 1 }}
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <ContactInfo items={contactDetails} />
      </LazyLoad>
    </Box>
  );
};

export default Contact;
