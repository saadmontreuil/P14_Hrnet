import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './service/redux/store';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import EmployeeList from './pages/EmployeeList/EmployeeList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}
export default App;
