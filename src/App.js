import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      this is app
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
