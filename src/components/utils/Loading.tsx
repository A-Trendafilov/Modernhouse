import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-12 h-12">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brass/30"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-brass"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <p className="text-white/40 text-sm tracking-[0.2em] font-display">{t("common.loading")}</p>
      </motion.div>
    </div>
  );
};

export default Loading;
