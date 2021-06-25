import { motion } from 'framer-motion';

export default function FadeInFromRight ({ children, custom, delayOffset = 0, ...rest }) {
  return (
    <motion.div
      initial={ { x: 100, opacity: 0 } }
      animate={ { x: 0, opacity: 1 } }
      transition={ { delay: delayOffset + custom * 0.06, duration: 1 } }
      { ...rest }
    >
      { children }
    </motion.div>
  );
};
