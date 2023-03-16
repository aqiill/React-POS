import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Employee from "./pages/employee/Employee";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Cashier from "./pages/cashier/Cashier";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile1" element={<ProfileEdit />} />
          <Route path="/cashier" element={<Cashier />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
