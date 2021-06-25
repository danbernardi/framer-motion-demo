import { useState } from 'react';
import { Route } from 'react-router-dom';
import { motion} from 'framer-motion';

export default function TranslateTransitionRoute ({ component: Component, ...rest }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const transitionVariants = {
    initial: {
      opacity: 0,
      x: '100vw',
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1

    },
    out: {
      opacity: 0,
      x: '-100vw',
      scale: 1.1
    }
  };

  const transitionOptions = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
  };

  return (
    <Route { ...rest }>
      <div className="transition__container">
        <motion.div
          className={ isAnimating ? 'is-animating' : '' }
          initial="initial"
          animate="in"
          exit="out"
          variants={ transitionVariants }
          transition={ transitionOptions }
          onAnimationStart={ () => setIsAnimating(true) }
          onAnimationComplete={ () => setIsAnimating(false) }
        >
          <Component />
        </motion.div>
      </div>
    </Route>
  );
};
