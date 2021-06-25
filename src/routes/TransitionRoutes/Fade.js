import { useState } from 'react';
import { Route } from 'react-router-dom';
import { motion} from 'framer-motion';

export default function FadeTransitionRoute ({ component: Component, ...rest }) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Route { ...rest }>
      <div className="transition__container">
        <motion.div
          className={ isAnimating ? 'is-animating' : '' }
          initial={ { opacity: 0  } }
          animate={ { opacity: 1 } }
          exit={ { opacity: 0 } }
          onAnimationStart={ () => setIsAnimating(true) }
          onAnimationComplete={ () => setIsAnimating(false) }
        >
          <Component />
        </motion.div>
      </div>
    </Route>
  );
};
