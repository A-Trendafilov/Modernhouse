import PropTypes from "prop-types"; // Import PropTypes
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

// Prop validation
FormField.propTypes = {
  label: PropTypes.string.isRequired, // label should be a string and required
  register: PropTypes.func.isRequired, // register should be a function and required
  name: PropTypes.string.isRequired, // name should be a string and required
  error: PropTypes.bool, // error should be a boolean (optional)
  helperText: PropTypes.string, // helperText should be a string (optional)
  props: PropTypes.object, // props can be any additional props (optional)
};

export default FormField;
