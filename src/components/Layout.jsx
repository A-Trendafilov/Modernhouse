import React from "react";
import { CssBaseline } from "@mui/material";
import Footer from "./Footer/Footer"; // Import your Footer
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Header /> {/* Ensure Header is included here */}
      {children} {/* Render children directly */}
      <Footer /> {/* Remove LazyLoad for debugging */}
    </div>
  );
};

export default Layout; // Ensure this line is present
