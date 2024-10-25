// src/components/Contact/ContactInfoStyle.js

export const getStyles = (theme) => ({
  container: {
    backgroundColor: "transparent",
    padding: {
      xs: theme.spacing(2),
      sm: theme.spacing(3),
      md: theme.spacing(4),
    },
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    textAlign: "center",
  },
  infoList: {
    boxStyle: { marginBottom: theme.spacing(4) },
    textStyle: {
      fontSize: { xs: "0.875rem", sm: "1rem" },
      color: theme.palette.text.primary,
    },
    iconColor: theme.palette.accent.red,
    linkColor: theme.palette.text.primary,
    motionProps: {
      whileHover: { scale: 1.05, color: theme.palette.accent.red },
      transition: { duration: 0.3 },
    },
  },
});
