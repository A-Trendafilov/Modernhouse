// src/components/LazyLoad.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LazyLoad = ({
  children,
  customStyles = {},
  customVariants = {},
  threshold = 0.2,
  transition = { duration: 0.6, delay: 0.1 },
}) => {
  const { ref, inView } = useInView({
    threshold: threshold, // Adjust this value for when the animation triggers
  });

  // Default animation variants
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Combine default and custom variants
  const variants = { ...defaultVariants, ...customVariants };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={transition} // Use provided transition settings
      style={{ marginBottom: "20px", ...customStyles }} // Allow custom styles to be passed
    >
      {children}
    </motion.div>
  );
};

export default LazyLoad;
