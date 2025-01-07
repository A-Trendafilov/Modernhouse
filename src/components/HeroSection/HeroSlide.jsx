import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";

import HeroContent from "./HeroContent.jsx";

const HeroSlide = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src={image.src}
        alt={image.alt}
        onError={(e) => {
          e.target.src = `${
            import.meta.env.BASE_URL
          }/assets/herosection/2-store-house.webp`; // Fallback image
        }}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.8)",
        }}
      />
      <HeroContent
        title={image.title}
        description={image.description}
        route={image.route}
      />
    </motion.div>
  );
};

// Prop types validation
HeroSlide.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    route: PropTypes.isRequired,
  }).isRequired,
};

export default HeroSlide;
