import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-[6rem] sm:text-[10rem] leading-none text-gradient">404</h1>
        <h2 className="font-display text-3xl tracking-wider text-white/60 mb-4">
          {t("pages.notFound.title")}
        </h2>
        <p className="text-white/40 mb-8">
          {t("pages.notFound.message")}
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-brass hover:bg-brass-light text-background font-semibold px-8"
        >
          {t("pages.notFound.goHome")}
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
