import axios from "axios";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Button, Modal} from "react-bootstrap";

function Category() {
  const [category, setCategory] = useState([]);
  const [formValues, setFormValues] = useState({
    nama_kategori: ""
  });
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const apiConfig = {
    baseURL: "http://localhost:8080",
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };
  const [showModal, setShowModal] = useState(false);

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
    // event.preventDefault();
    // try {
    //   const response = await axios.post("/", formValues, apiConfig);
    //   setSuccessMessage("Data kategori baru berhasil ditambahkan");
    //   setFormValues({
    //     nama_kategori: ""
    //   });
    //   setShowModal(true);
    //   setErrorMessage("");
    //   fetchData();
    // } catch (error) {
    //   console.error(error);
    //   setSuccessMessage("");
    //   setErrorMessage("Gagal menambahkan data kategori baru");
    // }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/", apiConfig);
      setCategory(response.data.data);
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
      <div className="wrapper">
        <Header />
        <Sidebar activePage="category" />
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
                      height: 755,
                    }}
                  >
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <div className="add-export" style={{ display: "flex" }}>
                          <button
                            className="btn bg-transparent table-cashier-button"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                          >
                            <iconify-icon icon="oi:plus" />
                            Add Category
                          </button>
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
                                  <h5 className="modal-title">Add Category</h5>
                                </div>
                                <form onSubmit={handleSubmit}>
                                  <div className="modal-body">
                                    <div className="form-group">
                                      <label htmlFor="name">Category Name</label>
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="nama_user"
                                        name="nama_user"
                                        onChange={handleInputChange}
                                        aria-describedby="name"
                                        placeholder="Input Category Name"
                                        autoComplete="off"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="modal-footer d-flex justify-content-between"
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
                                        width: 100,
                                        height: 35,
                                      }}
                                      id="saveBtn"
                                    >
                                      Add
                                    </button>
                                  </div>
                                </form>
                                <Modal
                                  show={showModal}
                                  onHide={() => setShowModal(false)}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>Sukses!</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    Data kategori baru berhasil ditambahkan.
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="primary"
                                      onClick={() => setShowModal(false)}
                                    >
                                      OK
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body" style={{ padding: "0px 24px" }}>
                      <Table category={category} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        className="modal fade bd-example-modal-sm2"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ border: "none" }}>
              <h5 className="modal-title">Update Category</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="nameCashier1">Category Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="nameCashier1"
                  aria-describedby="name"
                  placeholder="Input Category Name"
                />
              </div>
            </div>
            <div
              className="modal-footer d-flex justify-content-between"
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
                type="button"
                className="btn ms-auto"
                style={{
                  backgroundColor: "#5B7CFD",
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "smaller",
                  width: 100,
                  height: 35,
                }}
                id="saveBtn"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
