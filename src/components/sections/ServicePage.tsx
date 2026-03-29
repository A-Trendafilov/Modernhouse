import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import TitleDivider from "@/components/ui/title-divider";

interface ServicePageProps {
  translationPrefix: string;
  features: string[];
  extraSection?: {
    titleKey: string;
    items: string[];
  };
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServicePage = ({ translationPrefix, features, extraSection }: ServicePageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section with grid pattern */}
      <section className="relative px-4 sm:px-6 py-20 sm:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brass/[0.03] rounded-full blur-[120px]" />

        {/* Corner accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-brass/15 hidden lg:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-brass/15 hidden lg:block" />

        <motion.div
          className="relative max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-[0.1em] sm:tracking-[0.15em] text-gradient mb-4 leading-none">
            {t(`${translationPrefix}.title`)}
          </h1>
          <TitleDivider className="mb-6" />

          <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.1em] text-white/40 mb-8">
            {t(`${translationPrefix}.subtitle`)}
          </p>

          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
            {t(`${translationPrefix}.description`)}
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Intro text */}
          <motion.div
            className="flex-1 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
              <p className="text-white/60 text-base leading-[1.8]">
                {t(`${translationPrefix}.intro`)}
              </p>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl tracking-[0.15em] text-brass mb-4">
              {t("common.features")}
            </h2>
            <TitleDivider className="mb-8 !justify-start" />
            <div className="space-y-3">
              {features.map((featureKey) => (
                <motion.div
                  key={featureKey}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-4 glass rounded-xl px-5 py-4 group cursor-default"
                >
                  <CheckCircle className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {t(`${translationPrefix}.features.${featureKey}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra Section */}
      {extraSection && (
        <section className="relative px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl tracking-[0.15em] text-brass mb-10 text-center">
              {t(extraSection.titleKey)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extraSection.items.map((itemKey) => (
                <motion.div
                  key={itemKey}
                  className="glass rounded-xl px-6 py-5 flex items-start gap-4 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-brass shrink-0 mt-2 group-hover:glow-brass-strong transition-shadow duration-300" />
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                    {t(itemKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-brass opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brass/[0.04] rounded-full blur-[100px]" />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl tracking-[0.15em] text-white/80 mb-4">
            {t("contact.requestQuote")}
          </h2>
          <p className="text-white/40 mb-10 text-sm max-w-md mx-auto">
            {t(`${translationPrefix}.subtitle`)}
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-brass hover:bg-brass-light text-background font-bold tracking-[0.2em] uppercase text-sm px-12 py-6 rounded-sm glow-brass hover:glow-brass-strong transition-all duration-300 group"
          >
            {t("nav.contact")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePage;
