import React from "react";
import { TextField, useTheme } from "@mui/material";

const FormField = ({ label, register, name, error, helperText, ...props }) => {
  const theme = useTheme(); // Access the theme

  return (
    <TextField
      fullWidth
      label={
        <span>
          {label}
          <span style={{ color: theme.palette.error.main, marginLeft: "10px" }}>
            *
          </span>{" "}
          {/* Use theme error color */}
        </span>
      }
      variant="outlined"
      margin="normal"
      {...register(name)} // Register the field
      error={!!error} // Show error state if applicable
      helperText={helperText} // Show helper text if any
      slotProps={{
        inputLabel: {
          style: {
            color: theme.palette.text.primary,
            background: "transparent", // Use theme text color for label
          },
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.primary.main, // Border color for the input
          },
          "&:hover fieldset": {
            borderColor: theme.palette.grey[100], // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main, // Border color when focused
          },
        },
      }}
      {...props} // Spread additional props (like type, multiline, etc.)
    />
  );
};

export default FormField;
