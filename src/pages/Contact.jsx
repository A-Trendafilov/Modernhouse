import { Box } from "@mui/material"; // Import Box and Typography for layout

import LazyLoad from "../components/utils/LazyLoad.jsx"; // Import LazyLoad
import ContactForm from "../components/Form/ContactForm.jsx"; // Import ContactForm
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx"; // Import the new ContactInfo component
import { salesDetails } from "../data/salesData.jsx"; // Import contact details

const Contact = () => {
  const contactDetails = salesDetails.map((detail) => ({
    Icon: detail.Icon,
    text: detail.text,
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        margin: "40px auto",
        maxWidth: "1200px",
        gap: "20px",
        padding: 2,
        bgcolor: "transparent", // Set background to transparent
      }}
    >
      {/* Contact Form Section */}
      <LazyLoad
        customStyles={{ flex: 1 }}
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Box
          sx={{
            bgcolor: "transparent", // Semi-transparent white background
            borderRadius: 2,
            padding: 2,
          }}
        >
          <ContactForm />
        </Box>
      </LazyLoad>

      {/* Contact Info Section */}
      <LazyLoad
        customStyles={{ flex: 1 }}
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            padding: 2,
          }}
        >
          <ContactInfo items={contactDetails} />
        </Box>
      </LazyLoad>
    </Box>
  );
};

export default Contact;
