import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NavItem = ({ to, iconSrc, altText, text, isActive }) => (
  <li className="nav-item menu-open">
    <Link to={to} className={`nav-link ${isActive && "active"}`}>
      <img className="nav-icon" src={iconSrc} alt={altText} />
      <p>{text}</p>
    </Link>
  </li>
);

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const nama_user = localStorage.getItem("nama_user");

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
          to: "/home",
          icon: "./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Dashboard",
          name: "dashboard",
        },
        {
          to: "/product",
          icon: "../docs/assets/img/file-tray-stacked-outline.svg",
          title: "Product",
          name: "product",
        },
        {
          to: "/category",
          icon: "./docs/assets/img/category_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Category",
          name: "category",
        },
        {
          to: "/report",
          icon: "./docs/assets/img/summarize_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Report",
          name: "report",
        },
        {
          to: "/employee",
          icon: "./docs/assets/img/badge_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Employee",
          name: "employee",
        },
        // {
        //   to: "/member",
        //   icon: "./docs/assets/img/group_FILL0_wght400_GRAD0_opsz48.svg",
        //   title: "Member",
        //   name: "member",
        // },
      ],
    },
    {
      label: "OTHER",
      items: [
        // {
        //   to: "/settings",
        //   icon: "./docs/assets/img/settings_FILL0_wght400_GRAD0_opsz48.svg",
        //   title: "Settings",
        //   name: "settings",
        // },
        {
          to: "/help-and-support",
          icon: "./docs/assets/img/support_agent_FILL0_wght400_GRAD0_opsz48.svg",
          title: "Help & Support",
          name: "help-and-support",
        },
      ],
    },
  ];

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
            {menus.map((menuGroup) => (
              <React.Fragment key={menuGroup.label}>
                <li className="nav-header">
                  <p>{menuGroup.label}</p>
                </li>
                {menuGroup.items.map((menu) => (
                  <NavItem
                    key={menu.name}
                    to={menu.to}
                    iconSrc={menu.icon}
                    altText={menu.title + " Logo"}
                    text={menu.title}
                    isActive={activePage === menu.name}
                  />
                ))}
              </React.Fragment>
            ))}
            {/* Sign Out Nav */}
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={handleLogout}>
                <img
                  className="nav-icon"
                  src="./docs/assets/img/logout_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Logo Keluar"
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
                alt="Gambar Pengguna"
              />
            </div>
            <div className="info">
              <Link
                to={"/profile"}
                className="d-block"
                style={{ color: "black" }}
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
