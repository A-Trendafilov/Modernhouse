import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LazyLoad = ({ children, threshold = 0.2, className }: LazyLoadProps) => {
  const { ref, inView } = useInView({ threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LazyLoad;
