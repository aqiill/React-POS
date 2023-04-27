import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import TableProf from "./TableProf";
import TableRev from "./TableRev";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Report() {
  const [transaksi, setTransaksi] = useState([]);
  const [profit, setProfit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transaksiRes = await axios.get(process.env.REACT_APP_BASE_API + "/transaksi", {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        });

        setTransaksi(transaksiRes.data.data);
        console.log(transaksiRes.data.data);

        const profitRes = await axios.get(process.env.REACT_APP_BASE_API + "/transaksi/profit", {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        });

        setProfit(profitRes.data.data);
        console.log(profitRes.data.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
                      height: 610,
                    }}
                  >
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Revenue</h3>
                      </div>
                    </div>
                    <TableRev transaksi={transaksi} loading={loading} />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: 600,
                    }}
                  >
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Profit</h3>
                      </div>
                    </div>
                    <TableProf profit={profit} loading={loading} />
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
