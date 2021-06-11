import { useRef } from 'react';
import Simple from './components/Simple';
import MouseEvents from './components/MouseEvents';
import Variants from './components/Variants';
import EnterExit from './components/EnterExit';
import Drag from './components/Drag';
import './App.css';

function App() {
  const wrapperRef = useRef();

  return (
    <div className="wrapper" ref={wrapperRef}>
      <Simple />
      <MouseEvents />
      <Variants />
      <EnterExit />
      <Drag wrapperRef={ wrapperRef } />
    </div>
  );
}

export default App;
