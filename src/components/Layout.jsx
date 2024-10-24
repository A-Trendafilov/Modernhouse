import React from "react";
import Footer from "./Footer/Footer"; // Import your Footer
import Header from "./Header/Header";
import ScrollToTopButton from "./ScrollToTopButton";
import LazyLoad from "./LazyLoad";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <Header /> {/* Ensure Header is included here */}
      {children}
      <LazyLoad>
        <Footer />
      </LazyLoad>
      <ScrollToTopButton />
    </div>
  );
};

export default Layout; // Ensure this line is present
