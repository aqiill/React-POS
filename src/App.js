import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Employee from './pages/employee/Employee'
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';


function App() {
  const isLoggedIn = localStorage.getItem('email_user') !== null;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/employee" element={isLoggedIn ? <Employee /> : <Navigate to="/login" />} />
          <Route path="/product" element={isLoggedIn ? <Product /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/profile1" element={isLoggedIn ? <ProfileEdit /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
