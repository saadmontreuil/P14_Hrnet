import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import { EmployeeProvider } from './hook/EmployeeContext';

function App() {
  return (
    <div className="App">
      <Header />
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </EmployeeProvider>
      <Footer />
    </div>

  );
}

export default App;
