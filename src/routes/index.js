import { AnimatePresence} from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import AnimationDemos from './AnimationDemos';
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';
import TranslateTransitionRoute from './TransitionRoutes/Translate';
// import FadeTransitionRoute from './TransitionRoutes/Fade';

export default function Routes () {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={ false }>
      <Switch location={location} key={location.pathname}>
        <TranslateTransitionRoute exact={ true } path="/" component={ Route1 } />
        <TranslateTransitionRoute exact={ true } path="/route-2" component={ Route2 } />
        <TranslateTransitionRoute exact={ true } path="/route-3" component={ Route3 } />
        <TranslateTransitionRoute exact={ true } path="/animation-demos" component={ AnimationDemos } />
      </Switch>
    </AnimatePresence>
  )
};