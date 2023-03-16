import NavigationBarCashier from "../../components/NavigationBar/NavigationBarCashier";
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
      <NavigationBarCashier />;
    </div>
    </>
  );
}

export default Cashier;