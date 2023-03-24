import Header from "../../components/header/Header";
import SidebarCashier from "../../components/sidebar/SidebarCashier";
import OrderList from "../../components/content/orderList";
import { useEffect, useState } from "react";
import Table from "./Table";

const Cashier = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    document.title = "POS | Cashier";
    document.body.classList.add("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");

    return () => {
      document.body.classList.remove("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <SidebarCashier activePage="Cashier" />
        <div className="content-wrapper row">
          <section className="content col">
            <section className="container-fluid">
              <div className="col-lg-12">
              <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: "auto",
                    }}
                  >
                <Table />
                </div>
                <OrderList />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cashier;
