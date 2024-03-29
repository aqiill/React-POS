import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "./Tabel";
import CommonComponent from "../../components/common/CommonComponent";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";

function Product() {
  const [expiredProducts, setExpiredProducts] = useState([]);
  const [stockProducts, setStockProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_API + "/produk").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(process.env.REACT_APP_BASE_API + `/produk/${id}`).then(() => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  const [formData, setFormData] = useState({
    kode_produk: "",
    nama_produk: "",
    kategori_id: "",
    harga_modal: "",
    harga_jual: "",
    stok: "",
    gambar: null,
    expired_date: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("kode_produk", formData.kode_produk);
    data.append("nama_produk", formData.nama_produk);
    data.append("kategori_id", formData.kategori_id);
    data.append("harga_modal", formData.harga_modal);
    data.append("harga_jual", formData.harga_jual);
    data.append("stok", formData.stok);
    data.append("gambar", formData.gambar);
    data.append("expired_date", formData.expired_date);
    axios
      .post(process.env.REACT_APP_BASE_API + "/produk", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
        },
      })
      .then((response) => {
        console.log(response.data);
        // navigate('/product')
        Toast({ message: "Product created!", type: "success" });
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        Toast({ message: "Failed to add product", type: "error" });
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expiredRes = await axios.get(
          process.env.REACT_APP_BASE_API + "/produk/expired",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );
        const sortedExpired = expiredRes.data.data.sort((a, b) => {
          const dateA = new Date(a.expired_date);
          const dateB = new Date(b.expired_date);
          return dateB - dateA; // mengubah urutan menjadi dari terlama hingga tercepat
        });
        setExpiredProducts(sortedExpired);

        const stockRes = await axios.get(
          process.env.REACT_APP_BASE_API + "/produk/stok",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );
        const sortedStock = stockRes.data.data.sort((a, b) => a.stok - b.stok);
        setStockProducts(sortedStock);

        const categoryRes = await axios.get(
          process.env.REACT_APP_BASE_API + "/kategori",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );
        setCategory(categoryRes.data.data);

        const productRes = await axios.get(
          process.env.REACT_APP_BASE_API + "/produk/kategori",
          {
            headers: {
              api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
            },
          }
        );

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

  return (
    <>
      <CommonComponent pageTitle="Product" backgroundStyle="#e7eef8" />
      <ToastContainer />
      <div className="wrapper">
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
                      height: 373,
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
                      <div
                        className="card-deck d-grid"
                        style={{
                          gridTemplateRows: "auto auto",
                          maxHeight: "258px",
                        }}
                      >
                        <div
                          className="card-columns"
                          style={{ rowCount: "2", columnGap: "1rem" }}
                        >
                          {expiredProducts.map((product) => (
                            <div className="card-susu mb-2">
                              <img
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}${product.gambar}`}
                                alt="Product"
                              />
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
                                    backgroundColor: "white",
                                    marginTop: 35,
                                    borderRadius: 10,
                                  }}
                                >
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={calculateDays(
                                      product.expired_date
                                    )}
                                    aria-valuemin={0}
                                    aria-valuemax={180}
                                    style={{
                                      width: `${(calculateDays(product.expired_date) /
                                          180) *
                                        100
                                        }%`,
                                      backgroundColor: "red",
                                    }}
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
                                    {calculateDays(product.expired_date)} Days
                                    Left
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
                      height: 373,
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
                              src={`${process.env.REACT_APP_IMAGE_BASE_URL}${product.gambar}`}
                              alt="Product"
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
                              {product.nama_produk}
                              <div
                                className="progress"
                                style={{
                                  height: 6,
                                  width: 162,
                                  backgroundColor: "white",
                                  borderRadius: 10,
                                }}
                              >
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={product.stok}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{
                                    width: `${product.stok}%`,
                                    backgroundColor: "red",
                                    borderRadius: 10,
                                  }}
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
                      height: 610,
                    }}
                  >
                    <div className="card-header border-0 mb-0 pb-0">
                      <div className="d-flex justify-content-between">
                        <div className="add-export" style={{ display: "flex" }}>
                          <button
                            className="btn bg-transparent table-add-button"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                            style={{ padding: "0.375rem 0.325rem" }}
                          >
                            <iconify-icon icon="oi:plus" />
                            Add Product
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade bd-example-modal-sm"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="mySmallModalLabel"
                      aria-hidden="true"
                      id="myModal"
                    >
                      <div className="modal-dialog modal-sm" role="document">
                        <form onSubmit={handleSubmit}>
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
                                  name="gambar"
                                  onChange={handleFileChange}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="productCode">
                                  Product Code
                                </label>
                                <input
                                  type="number"
                                  name="kode_produk"
                                  className="form-control"
                                  id="productCode"
                                  aria-describedby="emailHelp"
                                  placeholder="Input Product Code"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="productName">
                                  Product Name
                                </label>
                                <input
                                  type="text"
                                  name="nama_produk"
                                  className="form-control"
                                  id="productName"
                                  aria-describedby="emailHelp"
                                  placeholder="Input Product Name"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                  name="kategori_id"
                                  className="form-control"
                                  id="category"
                                  onChange={handleChange}
                                >
                                  <option value="">Select Category</option>
                                  {category.map((category) => (
                                    <option value={category.kategori_id}>
                                      {category.nama_kategori}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="productExpireDate">
                                  Expire Date
                                </label>
                                <div id="sandbox-container">
                                  <div className="input-group date">
                                    <input
                                      type="date"
                                      name="expired_date"
                                      className="form-control"
                                      id="productExpireDate"
                                      onChange={handleChange}
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
                                  type="number"
                                  name="stok"
                                  className="form-control"
                                  id="productStocksAmount"
                                  aria-describedby="emailHelp"
                                  placeholder="Eg. 200"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  Capital Price
                                </label>
                                <input
                                  type="number"
                                  name="harga_modal"
                                  className="form-control"
                                  id="productCapitalPrice"
                                  aria-describedby="emailHelp"
                                  placeholder="Eg. IDR 25,000.00"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  Price
                                </label>
                                <input
                                  type="number"
                                  name="harga_jual"
                                  className="form-control"
                                  id="productPrice"
                                  aria-describedby="emailHelp"
                                  placeholder="Eg. IDR 35,000.00"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="modal-footer"
                              style={{ border: "none" }}
                            >
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
                                Cancel
                              </button>
                              <a href="/product">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  style={{
                                    backgroundColor: "#5B7CFD",
                                    color: "white",
                                    fontWeight: "normal",
                                    fontSize: "smaller",
                                    width: "fit",
                                    height: 35,
                                  }}
                                  id="saveBtn"
                                >
                                  Add products
                                </button>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <Table products={products} loading={loading} />
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

export default Product;
