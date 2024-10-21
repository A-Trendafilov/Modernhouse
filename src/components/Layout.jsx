import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Footer from "./Footer/Footer"; // Import your Footer
import Header from "./Header/Header";
import LazyLoad from "./LazyLoad"; // Import your LazyLoad component

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Header /> {/* Ensure Header is included here */}
      <LazyLoad>{children}</LazyLoad>
      <LazyLoad>
        <Footer />
      </LazyLoad>
    </div>
  );
};

export default Layout;
