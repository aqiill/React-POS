import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cashier from "./pages/cashier/Cashier";
import Category from "./pages/category/Category";
import Dashboard from "./pages/dashboard/Dashboard";
import Employee from "./pages/employee/Employee";
import ContactUs from "./pages/contact-us/Contact-Us";
import Login from "./pages/login/Login";
import Member from "./pages/member/Member";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Report from "./pages/report/Report";
import Settings from "./pages/settings/Settings";
import Forgotpass from "./pages/forgotpass/Forgotpass";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRouter role="Administrator">
                <Dashboard />
              </ProtectedRouter>
            }
          />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route
            path="/product"
            element={
              <ProtectedRouter role="Administrator">
                <Product />
              </ProtectedRouter>
            }
          />
          <Route
            path="/category"
            element={
              <ProtectedRouter role="Administrator">
                <Category />
              </ProtectedRouter>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRouter role="Administrator">
                <Report />
              </ProtectedRouter>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRouter role="Administrator">
                <Employee />
              </ProtectedRouter>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRouter role="Administrator">
                <ContactUs />
              </ProtectedRouter>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouter role={["Administrator", "Employee"]}>
                <Profile />
              </ProtectedRouter>
            }
          />
          <Route
            path="/profileEdit"
            element={
              <ProtectedRouter role={["Administrator", "Employee"]}>
                <ProfileEdit />
              </ProtectedRouter>
            }
          />
          <Route
            path="/cashier"
            element={
              <ProtectedRouter role="Employee">
                <Cashier />
              </ProtectedRouter>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRouter({ children, role }) {
  const userRole = localStorage.getItem("role");
  
  if (Array.isArray(role)) {
    if (role.includes(userRole)) {
      return children;
    } else if (userRole === "Employee" && role.includes("Administrator")) {
      return <Navigate to="/cashier" />;
    } else if (userRole === "Administrator" && role.includes("Employee")) {
      return <Navigate to="/home" />;
    }
  } else {
    if (userRole === role) {
      return children;
    } else if (userRole === "Employee" && role === "Administrator") {
      return <Navigate to="/cashier" />;
    } else if (userRole === "Administrator" && role === "Employee") {
      return <Navigate to="/home" />;
    }
  }
      
  return <Navigate to="/login" />;
}