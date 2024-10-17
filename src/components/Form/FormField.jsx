// src/components/FormField.jsx
import React from "react";
import { TextField } from "@mui/material";

const FormField = ({ label, register, name, error, helperText, ...props }) => {
  return (
    <TextField
      fullWidth
      label={
        <span>
          {label}
          <span style={{ color: "red", marginLeft: "10px" }}>*</span>
        </span>
      }
      variant="outlined"
      margin="normal"
      {...register(name)}
      error={!!error}
      helperText={helperText}
      {...props} // Spread additional props (like type, multiline, etc.)
    />
  );
};

export default FormField;
