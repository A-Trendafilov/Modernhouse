import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeroContentProps {
  title: string;
  description: string;
  route: string;
}

const HeroContent = ({ title, description, route }: HeroContentProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Decorative corner accents */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 border-l border-t border-brass/20" />
      <div className="absolute bottom-[15%] right-[10%] w-20 h-20 border-r border-b border-brass/20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-[92%] sm:w-[80%] md:w-[65%] lg:w-[55%] text-center"
      >
        {/* Glass card with glow */}
        <div className="glass-strong rounded-2xl px-5 py-8 sm:px-12 sm:py-14 glow-brass relative overflow-hidden">
          {/* Decorative inner border */}
          <div className="absolute inset-3 rounded-xl border border-white/[0.03] pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0.1em] sm:tracking-[0.15em] text-white mb-4 leading-none"
          >
            {t(title)}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="w-[80%] max-w-md h-[3px] rounded-full bg-gradient-to-r from-transparent via-brass to-transparent mx-auto mb-6 origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm sm:text-base text-white/60 leading-relaxed mb-10 max-w-md mx-auto"
          >
            {t(description)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button
              onClick={() => navigate(route)}
              aria-label={t("hero.learnMore", { title: t(title) })}
              className="bg-brass/90 hover:bg-brass text-background tracking-[0.2em] uppercase text-xs font-bold px-10 py-6 rounded-sm transition-all duration-300 glow-brass group"
            >
              {t("hero.moreInfo")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
