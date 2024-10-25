import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import LazyLoad from "./utils/LazyLoad";
import ScrollToTop from "./utils/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      {children}
      <LazyLoad>
        <Footer />
      </LazyLoad>
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
