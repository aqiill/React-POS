import React from "react";
import { useNavigate, redirect as Redirect, Link } from "react-router-dom";

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const nama_user = localStorage.getItem("nama_user");

  const handleLogout = () => {
    localStorage.removeItem("nama_user");
    localStorage.removeItem("email_user");
    navigate("/login");
  };
  return (
    <aside
      className="main-sidebar sidebar-base sidebar-no-expand"
      style={{ marginTop: 90 }}
    >
      {/* Sidebar */}
      <div className="sidebar sidebar-custom">
        {/* Sidebar Menu */}
        <nav className="mt-0">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
            style={{ marginTop: 16 }}
          >
            {/* MENU */}
            <li className="nav-header">
              <p>MENU</p>
            </li>
            {/* Dashboard nav AKTIV */}
            <li
              className={`nav-item ${
                activePage === "dashboard" ? "menu-open" : ""
              }`}
            >
              <a href="#" className="nav-link active">
                <div className="icon-active">
                  <img
                    className="nav-icon"
                    src="./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg"
                    alt="Dashboard Logo"
                  />
                </div>
                <div
                  className="active-wrap"
                  style={{ position: "relative", paddingTop: 2 }}
                >
                  <p>Dashboard</p>
                </div>
              </a>
            </li>
            {/* Product Nav */}
            <li
              className={`nav-item ${
                activePage === "product" ? "menu-open" : ""
              }`}
            >
              <Link to="/product" className="nav-link">
                <img
                  className="nav-icon"
                  src="../docs/assets/img/file-tray-stacked-outline.svg"
                  alt="Product Logo"
                />
                <p>Product</p>
              </Link>
            </li>
            {/* Category Nav */}
            <li
              className={`nav-item ${
                activePage === "category" ? "menu-open" : ""
              }`}
            >
              <Link to="/category" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/category_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Category Logo"
                />
                <p>Category</p>
              </Link>
            </li>
            {/* Report Nav */}
            <li
              className={`nav-item ${
                activePage === "report" ? "menu-open" : ""
              }`}
            >
              <Link to="/report" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/summarize_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Report Logo"
                />
                <p>Report</p>
              </Link>
            </li>
            {/* Employee Nav */}
            <li
              className={`nav-item ${
                activePage === "employee" ? "menu-open" : ""
              }`}
            >
              <Link to="/employee" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/badge_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Employee Logo"
                />
                <p>Employee</p>
              </Link>
            </li>
            {/* Member Nav */}
            <li
              className={`nav-item ${
                activePage === "member" ? "menu-open" : ""
              }`}
            >
              <Link to="/member" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/group_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Member Logo"
                />
                <p>Member</p>
              </Link>
            </li>
            {/* OTHERS */}
            <li className="nav-header">
              <p>OTHER</p>
            </li>
            {/* Settings Nav */}
            <li
              className={`nav-item ${
                activePage === "settings" ? "menu-open" : ""
              }`}
            >
              <Link to="/settings" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/settings_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Settings Logo"
                />
                <p>Settings</p>
              </Link>
            </li>
            {/* Help & Support Nav */}
            <li
              className={`nav-item ${
                activePage === "help&support" ? "menu-open" : ""
              }`}
            >
              <Link to="/help&support" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/support_agent_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Help & Support Logo"
                />
                <p>Help &amp; Support</p>
              </Link>
            </li>
            {/* Sign Out Nav */}
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={handleLogout}>
                <img
                  className="nav-icon"
                  src="./docs/assets/img/logout_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Sign Out Logo"
                />
                <p>Sign Out</p>
              </a>
            </li>
          </ul>
          <div
            className="user-panel mt-3 pb-3 pt-3 mb-5 d-flex bg-light mr-4 ml-4"
            style={{ borderRadius: 10 }}
          >
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block" style={{ color: "black" }}>
                {nama_user}
              </a>
            </div>
          </div>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
