import { motion } from 'framer-motion';

export default function FadeInFromRight ({ children, index, delayOffset = 0, ...rest }) {
  return (
    <motion.div
      initial={ { x: 500, opacity: 0 } }
      animate={ { x: 0, opacity: 1 } }
      transition={ { delay: delayOffset + index * 0.08, duration: 1 } }
      { ...rest }
    >
      { children }
    </motion.div>
  );
};
