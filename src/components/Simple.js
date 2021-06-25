import { motion } from 'framer-motion';

export default function Simple () {
  return (
    <>
      <h1>Simple</h1>
      <div className="container">
        <motion.div
          className="box blue"
          animate={ {
            x: 'calc(300% + 7.5vw)',
            rotate: 90,
            scale: [1, 0.5, 1]
          } }
          transition={ {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          } }
        />
      </div>
    </>
  );
};
