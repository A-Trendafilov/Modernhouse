import { motion } from "framer-motion";

import type { SocialLink } from "@/types";

interface SocialIconsProps {
  socialLinks: SocialLink[];
}

const SocialIcons = ({ socialLinks }: SocialIconsProps) => {
  return (
    <div className="flex gap-4 mt-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full p-2.5 text-white/60 border border-white/10 hover:border-brass/40 hover:text-brass transition-colors duration-300"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.Icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
