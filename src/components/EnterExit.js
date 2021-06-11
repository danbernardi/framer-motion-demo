import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateIndexedArr } from '../utils';

const initBoxes = generateIndexedArr(15);

export default function Variants () {
  const [boxes, setBoxes] = useState(initBoxes);

  const addBoxHandler = (count = 1) => {
    const newBoxes = boxes.concat(generateIndexedArr(count, boxes.length));
    setBoxes(newBoxes);
  };

  const subtractBoxHandler = (count = 1) => {
    if (boxes.length >= count) {
      const newBoxes = [...boxes];
      newBoxes.splice(-count, count);
      setBoxes(newBoxes);
    }
  };

  return (
    <>
      <h1>enter / exit animation</h1>
      <div className="btngroup">
        <button type="button" onClick={ () => addBoxHandler(3) }>add box</button>
        <button type="button" onClick={ () => subtractBoxHandler(3) }>remove box</button>
      </div>

      <div className="container small">
        <AnimatePresence>
          { boxes.map(item => (
            <motion.div
              key={item.id}
              className="box blue"
              initial={ { scale: 0, rotate: 0 } }
              animate={ { scale: 1, rotate: 90 } }
              exit={ { scale: 0, rotate: 180 } }
            />
          )) }
        </AnimatePresence>
      </div>
    </>
  );
};
