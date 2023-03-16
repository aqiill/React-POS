import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import { useEffect } from "react";
import Sidebar from "../../components/menu/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS | Dashboard";
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
    <div className="wrapper">
      <Header />
      <Sidebar activePage="dashboard" />
      <Content />
    </div>
  );
};
export default Dashboard;
