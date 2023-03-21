import { useEffect } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function HelpAndSupport() {
  useEffect(() => {
    document.title = "Report | POS";
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );
    document.body.style.background = "#e7eef8";

    return () => {
      document.body.classList.remove(
        "hold-transition",
        "light-mode",
        "sidebar-mini",
        "layout-fixed",
        "layout-navbar-fixed",
        "layout-footer-fixed",
        "sidebar-mini-xs"
      );
      document.body.style.background = null;
    };
  }, []);

  return (
    <>
      <CommonComponent pageTitle="Help & Support" backgroundStyle="#e7eef8" />

      <div className="wrapper">
        <Header />
        <Sidebar activePage="help-and-support" />
      </div>
    </>
  );
}

export default HelpAndSupport;
