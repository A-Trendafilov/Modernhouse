import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Typography, Button, useTheme } from "@mui/material"; // Import useTheme
import FormField from "./FormField"; // Import the FormField component
import SnackbarAlert from "./SnackbarAlert"; // Import the SnackbarAlert component

// Define validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Името е задължително."),
  email: Yup.string()
    .email("Имейлът е невалиден.")
    .required("Имейлът е задължителен."),
  phone: Yup.string()
    .required("Телефонният номер е задължителен.")
    .matches(
      /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?\d{3,5}[-.\s]?\d{3,4}$/,
      "Телефонният номер е невалиден."
    ),
  message: Yup.string()
    .required("Описание е задължително.")
    .max(500, "Описание не трябва да надвишава 500 символа."),
});

const ContactForm = () => {
  const theme = useTheme(); // Access the theme
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://submit-form.com/HRKZbYxa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSnackbarMessage("Благодарим Ви за съобщението.");
        setSnackbarSeverity("success");
        reset();
      } else {
        throw new Error("Неуспешно изпращане на съобщението."); // Throw error if response not OK
      }
    } catch (error) {
      setSnackbarMessage(
        "Не успяхме да изпратим вашето съобщение. Моля, опитайте отново."
      );
      setSnackbarSeverity("error");
    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(2.5),
        backgroundColor: "transparent", // Set background to transparent
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Бързо запитване
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <FormField
          label="Име"
          type="text"
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
          type="text"
          register={register}
          error={errors.phone}
          helperText={errors.phone?.message}
        />
        <FormField
          label="Опишете вашето запитване към нас"
          name="message"
          register={register}
          multiline
          rows={6}
          error={errors.message}
          helperText={errors.message?.message}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: theme.spacing(2.5) }}
        >
          Изпрати запитване
        </Button>

        <Box sx={{ mt: 10, maxWidth: "600px" }}>
          <SnackbarAlert
            open={openSnackbar}
            message={snackbarMessage}
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "80%" }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
