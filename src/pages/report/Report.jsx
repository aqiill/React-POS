import { useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Report() {
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
      <div className="wrapper">
        <Header />
        <Sidebar activePage="report" />
        <div className="row text-center h-100">
          <div className="col-md-6 text-center my-auto">
            <div className="card card-block d-flex">
              <div className="card-body align-items-center d-flex flex-column justify-content-center">
                Transaction
                <div>
                  <button className="btn">
                    <i class="fas fa-file-export"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center my-auto">
            <div className="card card-block d-flex">
              <div className="card-body align-items-center d-flex flex-column justify-content-center">
                Employees
                <div>
                  <button className="btn">
                    <i class="fas fa-file-export"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center my-auto">
            <div className="card card-block d-flex">
              <div className="card-body align-items-center d-flex flex-column justify-content-center">
                Product
                <div>
                  <button className="btn">
                    <i class="fas fa-file-export"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center my-auto">
            <div className="card card-block d-flex">
              <div className="card-body align-items-center d-flex flex-column justify-content-center">
                Category
                <div>
                  <button className="btn">
                    <i class="fas fa-file-export"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
