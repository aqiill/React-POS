import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./Chart";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import './Dashboard.css'
import { Link } from "react-router-dom";

const Content = () => {
  const [expiredProducts, setExpiredProducts] = useState([]);
  const [stockProducts, setStockProducts] = useState([]);
  const [transaksi, setTransaksi] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [pendapatan, setPendapatan] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expiredRes = await axios.get(
          "http://localhost:8080/produk/expired",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );
        setExpiredProducts(expiredRes.data.data);

        const stockRes = await axios.get("http://localhost:8080/produk/stok", {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        });
        setStockProducts(stockRes.data.data);

        const transaksiRes = await axios.get(
          "http://localhost:8080/transaksi/today",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );

        setTransaksi(transaksiRes.data.data);
        // console.log(transaksiRes.data.data);

        const bestSellingRes = await axios.get(
          "http://localhost:8080/transaksi/best_selling",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );

        setBestSelling(bestSellingRes.data.data);

        const pendapatan = await axios.get(
          "http://localhost:8080/transaksi/pendapatan",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );

        setPendapatan(pendapatan.data.data);

        const usersRes = await axios.get("http://localhost:8080/users", {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        });
        setUsers(usersRes.data.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const calculateDays = (dateString) => {
    const today = new Date();
    const expiredDate = new Date(dateString);
    const timeDiff = Math.abs(expiredDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };

  const chartData = {
    labels: bestSelling.map((product) => product.nama_produk),
    datasets: [
      {
        label: "Total",
        data: bestSelling.map((product) => product.total),
        backgroundColor: "#2196f3",
      },
    ],
  };

  return (
    <div className="content-wrapper row">
      {/* Main content */}
      <section className="content col">
        <div className="container-fluid">
          {/* Info boxes */}
          <div className="row">
            {/* Revenue */}
            <div className="col-12 col-sm-6 col-md-3">
              <Link
                to="/report"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="small-box bg-light drop-shadow flex-row mb-3">
                  {/* <div className="dropdown d-flex flex-row-reverse">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Today
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">This Week</a>
                                        <a className="dropdown-item" href="#">This Month</a>
                                        <a className="dropdown-item" href="#">This Year</a>
                                    </div>
                                </div> */}
                  <div className="d-flex flex-row">
                    <img
                      className="top-card-icon"
                      src="./docs/assets/img/revenue_icon.png"
                      alt
                    />
                    <div className="top-card-text">
                      {/* <span className="up-down">▲ 100%</span> */}
                      <span className="card-amount">
                        {formatPrice(pendapatan.total_pendapatan)}
                      </span>
                      <span className="card-desc">TOTAL REVENUE</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* /.revenue */}
            {/* Profit */}
            <div className="col-12 col-sm-6 col-md-3">
              <Link
                to="/report"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="small-box bg-light drop-shadow flex-row mb-3"
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  {/* <div className="dropdown d-flex flex-row-reverse">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Today
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">This Week</a>
                                        <a className="dropdown-item" href="#">This Month</a>
                                        <a className="dropdown-item" href="#">This Year</a>
                                    </div>
                                </div> */}
                  <div className="d-flex flex-row">
                    <img
                      className="top-card-icon"
                      src="./docs/assets/img/profit_icon.png"
                      alt
                    />
                    <div className="top-card-text">
                      {/* <span className="up-down">▲ 100%</span> */}
                      <span className="card-amount">
                        {formatPrice(pendapatan.total_profit)}
                      </span>
                      <span className="card-desc">TOTAL PROFIT</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* /.profit */}
            {/* fix for small devices only */}
            <div className="clearfix hidden-md-up" />
            {/* Employee */}
            <div className="col-12 col-sm-6 col-md-3">
              <div
                className="small-box bg-light drop-shadow flex-row mb-3"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="d-flex flex-row">
                  <img
                    className="top-card-icon"
                    src="./docs/assets/img/profile-circle.png"
                    alt
                  />
                  <div className="top-card-text">
                    <span className="card-amount">{users}</span>
                    <span className="card-desc">EMPLOYEES</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.employee */}
            {/* Member */}
            <div className="col-12 col-sm-6 col-md-3">
              <div
                className="small-box bg-light drop-shadow flex-row mb-3"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="d-flex flex-row">
                  <img
                    className="top-card-icon"
                    src="./docs/assets/img/member_icon.png"
                    alt
                  />
                  <div className="top-card-text">
                    <span className="card-amount">
                      {pendapatan.total_transaksi}
                    </span>
                    <span className="card-desc">TOTAL TRANSACTION</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.member */}
          </div>
          {/* Main */}
          <div className="row content-card">
            {/* Stastitic best selling */}
            <div className="col-lg-6">
              <div
                className="card drop-shadow"
                style={{ borderRadius: 10, height: 390 }}
              >
                <div className="card-header">
                  <h5 className="card-title">Statistic of Best Selling</h5>
                  {/* <div className="card-tools">
                                        <div className="btn-group">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle bg-white border-0" type="button" data-toggle="dropdown">
                                                    Today
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#" onclick="updateGraph('data1')">Today</a>
                                                    <a className="dropdown-item" href="#" onclick="updateGraph('data2')">This week</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div
                      className="chart mr-4 ml-4"
                      style={{ height: 275, width: 550 }}
                    >
                      {/* Sales Chart Canvas */}
                      {/* <BarChart /> */}
                      <Bar data={chartData} />
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* Stock Alerts */}
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 10,
                  height: 390,
                }}
              >
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Stock Alerts</h3>
                  </div>
                </div>
                <div
                  className="card-body pl-4 pr-4 mr-4 ml-4"
                  style={{ marginBottom: 20, overflowX: "scroll" }}
                >
                  <div className="card-deck">
                    {stockProducts.map((product) => (
                      <div
                        className="card card-dash float-right mb-2 m-2"
                        style={{
                          minWidth: 200,
                          maxWidth: 200,
                          height: 250,
                          fontSize: "small",
                          backgroundColor: "#F6F6F6",
                          borderRadius: 20,
                        }}
                      >
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${product.gambar}`}
                          alt="Product Image"
                          style={{
                            height: "155.54px",
                            width: "200px",
                            objectFit: "cover",
                            objectPosition: "center center",
                            borderRadius: "20px 20px 0 0",
                          }}
                        />
                        <div
                          className="card-body p-0 ml-1"
                          style={{ fontWeight: "bold" }}
                        >
                          {" "}
                          {product.nama_produk}
                          <div
                            className="progress"
                            style={{
                              height: 6,
                              width: 162,
                              backgroundColor: "red",
                              borderRadius: 10,
                            }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div
                            className="stock"
                            style={{ fontWeight: "normal" }}
                          >
                            Sisa{" "}
                            <span className="stock-amount">
                              {" "}
                              {product.stok}{" "}
                            </span>
                          </div>
                          <div
                            className="details mt-3"
                            style={{ textAlign: "center" }}
                          >
                            <a
                              href="#!"
                              className="d-block"
                              style={{ color: "grey", fontWeight: "lighter" }}
                            >
                              Go to Product Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Transaction History */}
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 10,
                  height: 390,
                }}
              >
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Today's Transaction</h3>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{
                    padding: "0px 24px",
                    margin: "15px",
                    overflowY: "scroll",
                  }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <td scope="col">Tanggal</td>
                        <td scope="col">Total</td>
                        <td scope="col">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {transaksi.map((transaksi) => (
                        <tr>
                          <td scope="row">{transaksi.tgl_pembayaran}</td>
                          <td>{formatPrice(transaksi.total_pembayaran)}</td>
                          <td>
                            <button
                              className="btn fas fa-eye"
                              type="button"
                              data-toggle="modal"
                              data-target={`#invoiceModal${transaksi.id_pembayaran}`}
                            ></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Expire Soon */}
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: 10,
                  height: 390,
                }}
              >
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Expire Soon</h3>
                  </div>
                </div>
                <div
                  className="card-body pl-4 pr-4 mr-4 ml-4"
                  style={{ marginBottom: 20, overflowX: "scroll" }}
                >
                  <div className="card-deck">
                    <div className="card-columns">
                      {expiredProducts.map((product) => (
                        <div className="card-susu float-right mb-2">
                          <img
                            src={`${process.env.REACT_APP_IMAGE_BASE_URL}${product.gambar}`}
                            alt="Image"
                          />
                          <div
                            className="card-text mt-1 p-0 ml-1"
                            style={{ fontWeight: "bold" }}
                          >
                            {" "}
                            {product.nama_produk}
                            <div
                              className="progress"
                              style={{
                                height: 6,
                                width: 162,
                                backgroundColor: "red",
                                marginTop: 35,
                                borderRadius: 10,
                              }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={0}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div
                              className="row"
                              style={{
                                marginBottom: 5,
                                fontWeight: "normal",
                                fontSize: "small",
                              }}
                            >
                              <div className="col-md-6">
                                {calculateDays(product.expired_date)} days left
                              </div>
                              <div className="col-md-6 text-right">
                                {product.expired_date}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </div>
      </section>
      {/* /.content */}
    </div>
  );
};
export default Content;
