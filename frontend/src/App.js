import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Employee from './pages/employee/Employee'
import Login from './pages/login/Login';
import Product from './pages/product/Product';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/employee" element={<Employee />}/>
          <Route path="/product" element={<Product />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
