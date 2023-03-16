import React from "react";

function NavigationBarCashier() {
  return (
    <>
          {/* Navbar */}
          <nav className="main-header navbar navbar-expand fixed">
        {/* Size Controller */}
        <span style={{ display: "block" }}>
          <a
            data-widget="pushmenu"
            href="#"
            role="button"
            style={{ position: "sticky", marginLeft: 23, marginRight: 13 }}
          >
            <i className="fas fa-bars" />
          </a>
        </span>
        {/* Brand Logo */}
        <a
          href="index3.html"
          className="brand-link-custom"
          style={{ height: 90 }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/img/SimpleLogo.svg"}
            alt="AdminLTE Logo"
            className="brand-image"
            style={{ height: 43, width: 197 }}
          />
          <span className="brand-text font-weight-light" />
        </a>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Sidebar Container */}
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
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <div className="icon-active">
                    <img
                      className="nav-icon"
                      src="../docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg"
                      alt="Dashboard Logo"
                    />
                  </div>
                  <div
                    className="active-wrap"
                    style={{ position: "relative", paddingTop: 2 }}
                  >
                    <p>Order</p>
                  </div>
                </a>
              </li>
              {/* OTHERS */}
              <li className="nav-header">
                <p>OTHERS</p>
              </li>
              {/* Log Out Nav */}
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <img
                    className="nav-icon"
                    src="../docs/assets/img//SignOutIcon.png"
                    alt="Product Logo"
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
                  src="../dist/img/user2-160x160.jpg"
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
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}

export default NavigationBarCashier;
