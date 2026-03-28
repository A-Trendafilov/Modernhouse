import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stats = [
  { value: "8+", key: "statsYears" },
  { value: "150+", key: "statsProjects" },
  { value: "200+", key: "statsClients" },
  { value: "10", key: "statsWarranty" },
];

const featureKeys = ["experience", "materials", "team", "deadlines", "warranty", "custom"];

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-32 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brass/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-brass/15 hidden lg:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-brass/15 hidden lg:block" />

        <motion.div className="relative max-w-4xl" initial="hidden" animate="visible" variants={fadeUp}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-brass mx-auto mb-8"
          />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-[0.1em] sm:tracking-[0.15em] text-gradient mb-4 leading-none">
            {t("pages.about.title")}
          </h1>
          <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.1em] text-white/40 mb-8">
            {t("pages.about.subtitle")}
          </p>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
            {t("pages.about.story")}
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <motion.div
          className="glass-strong rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden glow-brass"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-brass/5 rounded-full blur-3xl" />

          <h2 className="relative font-display text-3xl tracking-[0.15em] text-brass mb-6">
            {t("pages.about.missionTitle")}
          </h2>
          <p className="relative text-white/60 text-base sm:text-lg leading-[1.8]">
            {t("pages.about.mission")}
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20" />

        <motion.div
          className="relative grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              variants={itemFade}
              className="glass rounded-2xl p-6 text-center group hover:glow-brass transition-shadow duration-500"
            >
              <p className="font-display text-5xl sm:text-6xl tracking-wider text-brass mb-2">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs tracking-[0.15em] uppercase">
                {t(`pages.about.${stat.key}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-[0.15em] text-brass flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-brass" />
            {t("pages.about.whyUsTitle")}
            <span className="w-8 h-[2px] bg-brass" />
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featureKeys.map((featureKey) => (
            <motion.div
              key={featureKey}
              variants={itemFade}
              whileHover={{ y: -2 }}
              className="glass rounded-xl px-5 py-4 flex items-start gap-4 group cursor-default"
            >
              <CheckCircle className="h-5 w-5 text-brass shrink-0 mt-0.5" />
              <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                {t(`pages.about.features.${featureKey}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
