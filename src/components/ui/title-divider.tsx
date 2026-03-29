import { motion } from "framer-motion";

interface TitleDividerProps {
  className?: string;
  delay?: number;
}

const TitleDivider = ({ className = "", delay = 0.3 }: TitleDividerProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="w-[80%] max-w-md h-[3px] rounded-full bg-gradient-to-r from-transparent via-brass to-transparent origin-center"
      />
    </div>
  );
};

export default TitleDivider;
