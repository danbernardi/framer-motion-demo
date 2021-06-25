import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Drag ({ wrapperRef }) {
  const dragContainerRef = useRef();

  return (
    <>
      <h1>drag</h1>
      <div className="container" ref={ dragContainerRef }>
        <motion.div
          className="box blue"
          whileHover={ { scale: 1.05, backgroundColor: '#33a7ff' } }
          drag={ true }
          dragConstraints={ wrapperRef }
        />
      </div>
    </>
  );
};
