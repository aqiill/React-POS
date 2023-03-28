import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import TableProf from "./TableProf";
import TableRev from "./TableRev";


function Report() {
  return (
    <>
      <CommonComponent pageTitle={"Report"} backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="report" />
        <div className="content-wrapper row">
          <section className="content col">
            <div className="container-fluid">
              <div className="row content-card">
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: 300,
                    }}
                  >
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Revenue</h3>
                      </div>
                    </div>
                    <TableRev />
                  </div>
                </div>
              
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: 300,
                    }}
                  >                    
                  <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Profit</h3>
                      </div>
                  </div>
                  <TableProf />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Report;
