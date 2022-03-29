import { Routes, Route } from 'react-router-dom';
import './App.css';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <h3>Checkout page</h3>
      <Routes>
        <Route path="/" element={<Lista />}/>
        <Route path="/:currency" element={<Lista />}/>
      </Routes>
    </div>
  );
}

export default App;
