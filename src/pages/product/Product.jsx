import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "./Tabel";

function Product() {
  const [expiredProducts, setExpiredProducts] = useState([]);
  const [stockProducts, setStockProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

        const productRes = await axios.get("http://localhost:8080/produk/kategori", {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        });

        setProducts(productRes.data.data);
        setLoading(false);
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

  useEffect(() => {
    document.title = "Product Management | POS";
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
    document.body.style.overflowX = "hidden";
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

  if (loading) {
    return <div className="loading-container"><p>Loading...</p></div>;
  }

  return (
    <>
      <div classname="wrapper">
        <Header />
        <Sidebar activePage="product" />
        <div className="content-wrapper row">
          <section className="content col">
            <div className="container-fluid">
              <div className="row content-card">
                <div className="col-lg-6">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
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
                              <img src={product.gambar} alt="Product" />
                              <div
                                className="card-text mt-1 p-0 ml-1"
                                style={{ fontWeight: "bold" }}
                              >
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
                                    {calculateDays(product.expired_date)}
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
                <div className="col-lg-6">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
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
                            className="card float-right mb-2"
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
                              src={product.gambar}
                              alt="Product"
                            />
                            <div
                              className="card-body p-0 ml-1"
                              style={{ fontWeight: "bold" }}
                            >
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
                                Sisa {product.stok}
                              </div>
                              <div
                                className="details mt-3"
                                style={{ textAlign: "center" }}
                              >
                                <a
                                  href="#"
                                  className="d-block"
                                  style={{
                                    color: "grey",
                                    fontWeight: "lighter",
                                  }}
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
                <div className="col-lg-12">
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: "auto",
                    }}
                  >
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <div className="add-export" style={{ display: "flex" }}>
                          <button
                            className="btn bg-transparent table-product-button"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                          >
                            <iconify-icon icon="oi:plus" />
                            Add Product
                          </button>
                          <div
                            className="modal fade bd-example-modal-sm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="mySmallModalLabel"
                            aria-hidden="true"
                            id="myModal"
                          >
                            <div
                              className="modal-dialog modal-sm"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Add Product</h5>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      Image
                                    </label>
                                    <input
                                      type="file"
                                      className="form-control"
                                      id="productImage"
                                      aria-describedby="emailHelp"
                                      placeholder="Image's src"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="productName">
                                      Product Name
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="productName"
                                      aria-describedby="emailHelp"
                                      placeholder="Input Product Name"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      Brand
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="productBrand"
                                      aria-describedby="emailHelp"
                                      placeholder="Input Brand"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="productExpireDate">
                                      Expire Date
                                    </label>
                                    <div id="sandbox-container">
                                      <div className="input-group date">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="productExpireDate"
                                        />
                                        <span className="input-group-addon">
                                          <i className="glyphicon glyphicon-th" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      Stocks
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="productStocksAmount"
                                      aria-describedby="emailHelp"
                                      placeholder="Eg. 200"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      Capital Price
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="productCapitalPrice"
                                      aria-describedby="emailHelp"
                                      placeholder="Eg. IDR 25,000.00"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                      Price
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="productPrice"
                                      aria-describedby="emailHelp"
                                      placeholder="Eg. IDR 35,000.00"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    style={{
                                      backgroundColor: "white",
                                      color: "black",
                                      fontWeight: "normal",
                                      fontSize: "smaller",
                                      width: 100,
                                      height: 35,
                                      border: "none",
                                    }}
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{
                                      backgroundColor: "#5B7CFD",
                                      color: "white",
                                      fontWeight: "normal",
                                      fontSize: "smaller",
                                      width: 125,
                                      height: 35,
                                    }}
                                    id="saveBtn"
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <button
                            className="btn bg-transparent table-product-button"
                            onclick="window.print()"
                          >
                            <iconify-icon icon="oi:share-boxed" />
                            Export Product
                          </button> */}
                        </div>

                        {/* <div>
                          <div className="input-group">
                            <div className="form-outline">
                              <input
                                type="search"
                                id="form1"
                                className="form-control"
                              />
                            </div>
                            <button type="button" className="btn btn-primary">
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <Table products={products} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
    </>
  );
}

export default Product;
