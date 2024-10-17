// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Typography, Button } from "@mui/material";
import FormField from "./FormField"; // Import the FormField component
import SnackbarAlert from "./SnackbarAlert"; // Import the SnackbarAlert component

// Updated validation schema for flexible phone validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?\d{3,5}[-.\s]?\d{3,4}$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
  description: Yup.string()
    .required("Description is required")
    .max(500, "Description must not exceed 500 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const onSubmit = (data) => {
    console.log(data); // Handle the form submission (send to API, etc.)
    setSnackbarMessage("Thank you for your message!");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Бързо запитване
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <FormField
          label="Име"
          name="name"
          register={register}
          error={errors.name}
          helperText={errors.name?.message}
        />
        <FormField
          label="Имейл"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          helperText={errors.email?.message}
        />
        <FormField
          label="Телефон"
          name="phone"
          register={register}
          error={errors.phone}
          helperText={errors.phone?.message}
        />
        <FormField
          label="Опишете вашето запитване към нас"
          name="description"
          register={register}
          multiline
          rows={6}
          error={errors.description}
          helperText={errors.description?.message}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Изпрати запитване
        </Button>
      </form>
      <SnackbarAlert
        open={openSnackbar}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
};

export default ContactForm;
