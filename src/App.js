import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cashier" element={<Cashier />} />
          <ProtectedRouter>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/report" element={<Report />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/member" element={<Member />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help-and-support" element={<HelpAndSupport />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </ProtectedRouter>
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
