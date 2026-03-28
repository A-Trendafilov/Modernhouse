import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";

interface CardComponentProps {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CardComponent = ({ Icon, title, description }: CardComponentProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative glass rounded-2xl p-8 h-full flex flex-col items-center text-center group cursor-default overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brass/5 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-brass/10 rounded-full blur-3xl" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-brass/60 to-transparent group-hover:w-24 transition-all duration-500" />

      <div className="relative mb-6 flex items-center justify-center w-18 h-18 rounded-2xl bg-brass/10 border border-brass/20 group-hover:border-brass/40 group-hover:glow-brass transition-all duration-300">
        <Icon className="h-8 w-8 text-brass" />
      </div>

      <h3 className="relative font-display text-2xl tracking-wider text-white mb-3">
        {t(title)}
      </h3>

      <p className="relative text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
        {t(description)}
      </p>
    </motion.div>
  );
};

export default CardComponent;
