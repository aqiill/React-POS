import axios from "axios";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category() {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [formValues, setFormValues] = useState({
    nama_kategori: "",
  });
  const apiConfig = {
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (selectedCategory && selectedCategory[name] !== value) {
      setSelectedCategory({
        ...selectedCategory,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/kategori", formValues, apiConfig);
      setFormValues({
        nama_kategori: "",
      });
      toast.success("Category created", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create category", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/kategori", apiConfig);
      setCategory(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setCategory([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <CommonComponent pageTitle="Category" backgroundStyle="#e7eef8" />
      <ToastContainer />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="category" />
        <div className="content-wrapper row">
          <section className="content col">
            <div className="container-fluid" style={{height: "calc (100vh - 90px)"}}>
              <div className="row content-card">
                <div className="col-lg-12">
                  <div
                    className="card mb-0"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: "100%"
                    }}
                  >
                    <div className="card-header border-0 mb-0 pb-0">
                      <div className="d-flex justify-content-between">
                        <div
                          style={{ display: "flex" }}
                        >
                          <button
                            className="btn bg-transparent table-add-button"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                            style={{padding: "0.375rem 0.325rem"}}
                          >
                            <iconify-icon icon="oi:plus" />
                            Add Category
                          </button>

                          {/* MODAL */}
                          <div
                            className="modal fade bd-example-modal-sm"
                            id="myModal"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="mySmallModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              className="modal-dialog modal-sm"
                              role="document"
                            >
                              <div className="modal-content">
                                <div
                                  className="modal-header"
                                  style={{ border: "none" }}
                                >
                                  <h5 className="modal-title">
                                    Add Category
                                  </h5>
                                </div>
                                <form onSubmit={handleSubmit}>
                                  <div className="modal-body">
                                    <div className="form-group">
                                      <label htmlFor="name">
                                        Category Name
                                      </label>
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="kategori_id"
                                        name="nama_kategori"
                                        aria-describedby="name"
                                        value={formValues.nama_kategori}
                                        onChange={handleInputChange}
                                        placeholder="Input Category Name"
                                        autoComplete="off"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="modal-footer"
                                    style={{ border: "none" }}
                                  >
                                    <button
                                      type="button"
                                      className="btn"
                                      data-dismiss="modal"
                                      style={{
                                        backgroundColor: "white",
                                        color: "black",
                                        fontWeight: "normal",
                                        fontSize: "smaller",
                                        width: 100,
                                        height: 35,
                                        border: "none",
                                      }}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn ms-auto"
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
                                      Add Category
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* TABLE */}
                    <div
                      className="card-body pr-0"
                      style={{ padding: "0px 24px", height:"calc(100vh - 152px"}}
                    >
                      <Table category={category} loading={loading} />
                    </div>
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

export default Category;
