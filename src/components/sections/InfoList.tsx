import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { ContactDetail } from "@/types";

interface InfoListProps {
  items: ContactDetail[];
}

const InfoList = ({ items }: InfoListProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 mb-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-center gap-3 group"
        >
          <item.Icon className="h-5 w-5 shrink-0 text-brass" />
          {item.href ? (
            <motion.a
              href={item.href}
              className="text-sm sm:text-base text-white/70 hover:text-brass transition-colors duration-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {t(item.text)}
            </motion.a>
          ) : (
            <span className="text-sm sm:text-base text-white/70">
              {t(item.text)}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default InfoList;
