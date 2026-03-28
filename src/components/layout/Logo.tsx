import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <motion.img
        src={logo}
        alt="Modern House Logo"
        className="w-14 h-11 sm:w-20 sm:h-16 brightness-0 invert opacity-90"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </NavLink>
  );
};

export default Logo;
