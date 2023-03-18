import { useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Category() {
  useEffect(() => {
    document.title = "Category | POS";
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
      <div className="wrapper">
        <Header />
        <Sidebar activePage="category" />
      </div>
    </>
  );
}

export default Category;
