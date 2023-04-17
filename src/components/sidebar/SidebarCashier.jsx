import React from "react";
import { useNavigate, redirect as Redirect, Link } from "react-router-dom";
import { MD5 } from "crypto-js";

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const nama_user = localStorage.getItem("nama_user");
  // console.log(activePage);

  const handleLogout = () => {
    localStorage.removeItem("nama_user");
    localStorage.removeItem("email_user");
    navigate("/login");
  };

  const menus = [
    {
      label: "MENU",
      items: [
        {
          to: "/cashier",
          icon:"./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Transaction",
          name: "transaction",
        }
      ],
    },
    {
      label: "OTHER",
      items: [
        {
          to: "/contact-us",
          icon: "./docs/assets/img/support_agent_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Contact Us",
          name: "contact-us",
        },
      ],
    },
  ];

  const email = localStorage.getItem("email_user");
  const avatar = 'https://gravatar.com/avatar/' + MD5(email).toString() + '?d=mm&s=300';

  return (
    <aside className="main-sidebar sidebar-base sidebar-no-expand" style={{ marginTop: 90 }}>
      {/* Sidebar */}
      <div className="sidebar sidebar-custom">
        {/* Sidebar Menu */}
        <nav className="mt-0">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{ marginTop: 16 }}>
            {/* MENU */}
            <li className="nav-header">
              <p>MENU</p>
            </li>

            {/* <img
                    className="nav-icon"
                    src="./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg"
                    alt="Dashboard Logo"
                  /> */}
            {/* Dashboard nav AKTIV */}
            <li className="nav-item menu-open">
              <Link to="/cashier" className={`nav-link ${activePage === "dashboard" ? "active" : ""}`}>
                <img className="nav-icon" src="./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg" alt="Dashboard Logo" />
                <p>Transaction</p>
              </Link>
            </li>
            {/* OTHERS */}
            <li className="nav-header">
              <p>OTHER</p>
            </li>
            {/* Sign Out Nav */}
            <li className="nav-item menu-open">
              <Link to="/contact-us" className={`nav-link ${activePage === "dashboard" ? "active" : ""}`}>
                <img className="nav-icon" src="./docs/assets/img/support_agent_FILL0_wght400_GRAD0_opsz48.svg" alt="Dashboard Logo" />
                <p>Contact Us</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={handleLogout}>
                <img className="nav-icon" src="./docs/assets/img/logout_FILL0_wght400_GRAD0_opsz48.svg" alt="Sign Out Logo" id="logoutbutton"/>
                <p>Sign Out</p>
              </a>
            </li>
          </ul>
          <div
            className="user-panel mt-3 pb-3 pt-3 mb-5 d-flex bg-light mr-4 ml-4 justify-content-start"
            style={{ borderRadius: 10 }}
          >
            <div className="image">
              <img
                src={avatar}
                className="img-circle elevation-2"
                alt="Gambar Pengguna"
              />
            </div>
            <div className="info">
              <Link
                to={"/profile"}
                className="d-block"
                style={{ color: "black"}}
                id="profileButton"
              >
                {nama_user}
              </Link>
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
