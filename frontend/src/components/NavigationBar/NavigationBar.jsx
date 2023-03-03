import React from "react";

function NavigationBar() {
  return (
    <div className="wrapper" style={{ overflow: "hidden" }}>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand">
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
    </div>
  );
}

export default NavigationBar;
