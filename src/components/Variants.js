import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateIndexedArr } from '../utils';

export default function Variants () {
  const [shapeState, setShapeState] = useState('square');

  const shapeVariants = {
    square: i => ({
      backgroundColor: '#0390fc',
      borderRadius: '0%',
      rotate: '90deg',
      transition: { delay: i * 0.03 }
    }),
    rounded: i => ({
      backgroundColor: 'teal',
      borderRadius: '25%',
      rotate: '180deg',
      transition: { delay: i * 0.03 }
    }),
    circle: i => ({
      backgroundColor: 'green',
      borderRadius: '50%',
      rotate: '270deg',
      transition: { delay: i * 0.03 }
    })
  };

  return (
    <>
      <h1>variants</h1>

      <div className="btngroup">
        <button type="button" onClick={ () => setShapeState('square') }>Square</button>
        <button type="button" onClick={ () => setShapeState('rounded') }>Rounded</button>
        <button type="button" onClick={ () => setShapeState('circle') }>Circle</button>
      </div>

      <motion.div
        className="container small"
      >
        { generateIndexedArr(60).map(item => (
          <motion.div
            className="box blue"
            key={item.index}
            custom={item.index}
            initial="square"
            animate={shapeState}
            variants={ shapeVariants }
          />
        )) }
      </motion.div>
    </>
  );
};
