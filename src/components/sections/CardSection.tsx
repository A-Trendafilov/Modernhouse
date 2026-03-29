import { motion, type Variants } from "framer-motion";

import { cardData } from "@/data/cardData";

import CardComponent from "./CardComponent";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const CardSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brass/[0.02] rounded-full blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {cardData.map((card) => (
          <motion.div key={card.id} variants={itemVariants}>
            <CardComponent
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CardSection;
