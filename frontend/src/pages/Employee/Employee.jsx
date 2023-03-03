import React, { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function Employee() {
  useEffect(() => {
    document.title = "Manajemen Karyawan";
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
      <NavigationBar />
      {/* 
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
                          Add Cashier
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
                                <h5 className="modal-title">Add Cashier</h5>
                              </div>
                              <div className="modal-body">
                                <div className="form-group">
                                  <label htmlFor="nameCashier1">
                                    Cashier Name
                                  </label>
                                  <input
                                    type="name"
                                    className="form-control"
                                    id="nameCashier1"
                                    aria-describedby="name"
                                    placeholder="Input Cashier Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="examplHelp"
                                    placeholder="Input Email Address"
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
                                  Add Cashier
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn bg-transparent table-cashier-button"
                          onclick="window.print()"
                        >
                          <iconify-icon icon="oi:share-boxed" />
                          Export Cashier
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: "0px 24px" }}>
                    <table
                      className="table"
                      id="myTable"
                      data-page-length={10}
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr className="text-muted fs-10">
                          <td scope="col" style={{ width: "10%" }}>
                            No
                          </td>
                          <td scope="col" style={{ width: "40%" }}>
                            Cashier Name
                          </td>
                          <td scope="col" style={{ width: "40%" }}>
                            Email{" "}
                          </td>
                          <td scope="col" style={{ width: "10%" }}>
                            Actions
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">1</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">2</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">3</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">4</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">5</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">6</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">7</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">8</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">9</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">10</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">11</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                        <tr
                          className="fs-10 drop-shadow"
                          style={{
                            backgroundColor: "#F5F5F5",
                            backgroundClip: "padding-box",
                            border: "1px solid #F5F5F5",
                            borderRadius: "10x",
                          }}
                        >
                          <td scope="row">12</td>
                          <td>Muhamad Aryadipura</td>
                          <td>muhamadarya.8m19@gmail.com</td>
                          <td>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow"
                              data-toggle="modal"
                              data-target=".bd-example-modal-sm2"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon icon="oi:pencil" />
                            </button>
                            <button
                              className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                              style={{ borderRadius: "50%" }}
                            >
                              <iconify-icon
                                icon="oi:trash"
                                style={{ marginLeft: 2 }}
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="card-footer"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ul className="pagination" id="pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside className="control-sidebar control-sidebar-dark"></aside>
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
              <h5 className="modal-title">Add Cashier</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="nameCashier1">Cashier Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="nameCashier1"
                  aria-describedby="name"
                  placeholder="Input Cashier Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="examplHelp"
                  placeholder="Input Email Address"
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
      <div className="modal" tabIndex={-1} role="dialog" id="confirmModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ border: "none" }}>
              <h5 className="modal-title">Delete Cashier</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure want to delete this cashier ?</p>
            </div>
            <div
              className="modal-footer d-flex justify-content-between"
              style={{ border: "none" }}
            >
              <button
                type="button"
                className="btn btn-secondary"
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
                className="btn btn-danger ms-auto"
                id="deleteBtn"
                style={{
                  backgroundColor: "#D94343",
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "smaller",
                  width: 100,
                  height: 35,
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
}

export default Employee;
