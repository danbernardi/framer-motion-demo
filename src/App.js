import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
