import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import { useEffect } from "react";

const Cashier = () => {
  useEffect(() => {
    document.title = "POS | Cashier";
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );

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
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar activePage="Cashier" />
      </div>
    </>
  );
};

export default Cashier;
