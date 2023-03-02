import React from "react";

function NavigationBar() {
  return (
    <nav className="main-header navbar navbar-expand">
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
      <a
        href="index3.html"
        className="brand-link-custom"
        style={{ height: 90 }}
      >
        <img
          src="./docs/assets/img/POS_logo.png"
          alt="AdminLTE Logo"
          classname="brand-image"
          style={{ height: 43, width: 197 }}
        />

        <span className="brand-text font-weight-light" />
      </a>
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
  );
}

export default NavigationBar;