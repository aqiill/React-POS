import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Employee from './pages/Employee/Employee';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/employee" element={<Employee />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
