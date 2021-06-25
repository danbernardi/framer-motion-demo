import { useRef } from 'react';
import Simple from '../../components/Simple';
import MouseEvents from '../../components/MouseEvents';
import Variants from '../../components/Variants';
import EnterExit from '../../components/EnterExit';
import Drag from '../../components/Drag';

export default function AnimationDemos () {
  const wrapperRef = useRef(null);

  return (
    <div ref={wrapperRef}>
      <Simple />
      <MouseEvents />
      <Variants />
      <EnterExit />
      <Drag wrapperRef={ wrapperRef } />
    </div>
  )
};
