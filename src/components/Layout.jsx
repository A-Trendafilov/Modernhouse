import PropTypes from "prop-types";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import ScrollToTopButton from "./utils/ScrollToTopButton.jsx";
import LazyLoad from "./utils/LazyLoad.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
