import { motion } from 'framer-motion';

export default function FadeInFromBelow ({ children, index, delayOffset = 0, ...rest }) {
  return (
    <motion.div
      initial={ { y: 100, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ { delay: delayOffset + index * 0.06, duration: 1 } }
      { ...rest }
    >
      { children }
    </motion.div>
  );
};
