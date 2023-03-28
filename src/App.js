import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cashier from "./pages/cashier/Cashier";
import Category from "./pages/category/Category";
import Dashboard from "./pages/dashboard/Dashboard";
import Employee from "./pages/employee/Employee";
import HelpAndSupport from "./pages/help-and-support/Help-and-Support";
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
              <ProtectedRouter>
                <Dashboard />
              </ProtectedRouter>
            }
          />
          <Route
            path="/forgotpass"
            element={
                <Forgotpass />
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRouter>
                <Product />
              </ProtectedRouter>
            }
          />
          <Route
            path="/category"
            element={
              <ProtectedRouter>
                <Category />
              </ProtectedRouter>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRouter>
                <Report />
              </ProtectedRouter>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRouter>
                <Employee />
              </ProtectedRouter>
            }
          />
          <Route
            path="/member"
            element={
              <ProtectedRouter>
                <Member />
              </ProtectedRouter>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRouter>
                <Settings />
              </ProtectedRouter>
            }
          />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
          <Route
            path="/profile"
            element={
              <ProtectedRouter>
                <HelpAndSupport />
              </ProtectedRouter>
            }
          />
          <Route
            path="/profileEdit"
            element={
              <ProtectedRouter>
                <ProfileEdit />
              </ProtectedRouter>
            }
          />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
export function ProtectedRouter({ children }) {
  if (localStorage.getItem("email_user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
