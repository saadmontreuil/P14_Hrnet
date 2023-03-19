import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateEmployee />} />

      </Routes>
    </div>

  );
}

export default App;
