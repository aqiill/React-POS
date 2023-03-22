import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Report() {
  return (
    <>
      <CommonComponent pageTitle={"Report"} backgroundStyle="#e7eef8" />
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
