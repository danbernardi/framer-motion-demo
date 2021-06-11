import { motion } from 'framer-motion';

export default function MouseEvents () {
  return (
    <>
      <h1>MouseEvents: whileHover | whileTap</h1>
      <div className="container">
        <motion.div
          className="box blue"
          whileHover={ { rotate: '-45deg', backgroundColor: 'red' } }
          whileTap={ { backgroundColor: 'purple', skew: -15 } }
        />

        <motion.div
          className="box blue"
          whileHover={ { rotate: '-90deg', backgroundColor: 'red' } }
          whileTap={ { backgroundColor: 'purple', skew: -30 } }
        />

        <motion.div
          className="box blue"
          whileHover={ { rotate: '-135deg', backgroundColor: 'red' } }
          whileTap={ { backgroundColor: 'purple', skew: -45 } }
        />

        <motion.div
          className="box blue"
          whileHover={ { rotate: '-180deg', backgroundColor: 'red' } }
          whileTap={ { backgroundColor: 'purple', skew: -60 } }
        />
      </div>
    </>
  );
};
