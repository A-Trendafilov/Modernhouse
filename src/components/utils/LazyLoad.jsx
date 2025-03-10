import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types"; // Import PropTypes for validation

const LazyLoad = ({ children, threshold = 0.2, ...props }) => {
  // Destructure props
  const { ref, inView } = useInView({
    threshold: threshold, // When to trigger the animation
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay: 0.1 }} // Default transition settings
      style={{ marginBottom: "16px" }} // Simplified margin
      {...props} // Spread the props here but be cautious with non-DOM attributes
    >
      {children}
    </motion.div>
  );
};

// PropTypes validation
LazyLoad.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are passed
  threshold: PropTypes.number, // Optional threshold value (default 0.2)
};

export default LazyLoad;
