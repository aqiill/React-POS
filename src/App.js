import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Employee from "./pages/employee/Employee";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
            <ProtectedRouter>
              <Dashboard />
            </ProtectedRouter>
          } />
          <Route path="/employee" element={
            <ProtectedRouter>
              <Employee />
            </ProtectedRouter>
          } />
          <Route path="/product" element={
            <ProtectedRouter>
              <Product />
            </ProtectedRouter>
          } />
          <Route path="/profile" element={
            <ProtectedRouter>
              <Profile />
            </ProtectedRouter>
          } />
          <Route path="/profile1" element={
            <ProtectedRouter>
              <ProfileEdit />
            </ProtectedRouter>
          } />
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
    return <Navigate to="/login" />
  }
}