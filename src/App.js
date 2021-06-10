import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const dragContainerRef = useRef();
  const [shapeState, setShapeState] = useState('square');

  const shapeVariants = {
    square: i => ({
      backgroundColor: '#0390fc',
      borderRadius: '0%',
      transition: { delay: i * 0.1 }
    }),
    rounded: i => ({
      backgroundColor: 'teal',
      borderRadius: '25%',
      transition: { delay: i * 0.1 }
    }),
    circle: i => ({
      backgroundColor: 'green',
      borderRadius: '50%',
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <div className="wrapper">
      <h1>whileHover | whileTap</h1>
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

      <h1>variants</h1>

      <div className="btngroup">
        <button type="button" onClick={ () => setShapeState('square') }>Square</button>
        <button type="button" onClick={ () => setShapeState('rounded') }>Rounded</button>
        <button type="button" onClick={ () => setShapeState('circle') }>Circle</button>
      </div>

      <motion.div
        className="container"
      >
        <motion.div
          className="box blue"
          custom="0"
          initial="square"
          animate={shapeState}
          variants={ shapeVariants }
        />

        <motion.div
          className="box blue"
          custom="1"
          initial="square"
          animate={shapeState}
          variants={ shapeVariants }
        />

        <motion.div
          className="box blue"
          custom="2"
          initial="square"
          animate={shapeState}
          variants={ shapeVariants }
        />

        <motion.div
          className="box blue"
          custom="3"
          initial="square"
          animate={shapeState}
          variants={ shapeVariants }
        />
      </motion.div>

      <h1>drag</h1>
      <div className="container" ref={ dragContainerRef }>
        <motion.div
          className="box blue"
          whileHover={ { scale: 1.05, backgroundColor: '#33a7ff' } }
          drag={ true }
          dragConstraints={ dragContainerRef }
        />
      </div>
    </div>
  );
}

export default App;
