import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Footer from "./Footer";
import Header from "./Header";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import LazyLoad from "../utils/LazyLoad";
import ScrollToTop from "../utils/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <LazyLoad>
        <Footer />
      </LazyLoad>
      <ScrollToTopButton />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "glass-strong",
          style: { background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.12)" },
        }}
      />
    </div>
  );
};

export default Layout;
