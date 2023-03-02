import React from "react";

function Sidebar() {
  return (
    <aside
      className="main-sidebar sidebar-base sidebar-no-expand"
      style={{ marginTop: 90 }}
    >
      <div className="sidebar sidebar-custom">
        <nav className="mt-0">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
            style={{ marginTop: 16 }}
          >
            <li className="nav-header">
              <p>MENU</p>
            </li>
            <li className="nav-item menu-open">
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
            <li className="nav-item">
              <a
                href="../AdminLTE-3.2.0/pages/product.html"
                className="nav-link"
              >
                <img
                  className="nav-icon"
                  src="../docs/assets/img/file-tray-stacked-outline.svg"
                  alt="Product Logo"
                />
                <p>Product</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/category_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Category Logo"
                />
                <p>Category</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/summarize_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Report Logo"
                />
                <p>Report</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/badge_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Employee Logo"
                />
                <p>Employee</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/group_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Member Logo"
                />
                <p>Member</p>
              </a>
            </li>
            <li className="nav-header">
              <p>OTHER</p>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/settings_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Settings Logo"
                />
                <p>Settings</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <img
                  className="nav-icon"
                  src="./docs/assets/img/support_agent_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="Help & Support Logo"
                />
                <p>Help &amp; Support</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
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
                Arya ganteng
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
