 import axios from "axios";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({
    nama_user: "",
    email_user: "",
    password: "",
    role: "Employee",
  });
  const apiConfig = {
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // tambahan state untuk show password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // tambahan state untuk show password
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (selectedEmployee && selectedEmployee[name] !== value) {
      setSelectedEmployee({
        ...selectedEmployee,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formValues.password !== confirmPassword) {
        Toast({
          message: "Password and Confirm Password must match",
          type: "error",
        });
        return;
      }
      const response = await axios.post("/users", formValues, apiConfig);
      setFormValues({
        nama_user: "",
        email_user: "",
        password: "",
        role: "Employee",
      });
      setConfirmPassword("");
      Toast({
        message: "Employee has been created successfully",
        type: "success",
      });
      fetchData();
    } catch (error) {
      console.error(error);
      Toast({ message: "Failed to create employee", type: "error" });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/users", apiConfig);
      setEmployee(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setEmployee([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <CommonComponent pageTitle="Employee" backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar activePage="employee" />
        <div className="content-wrapper row">
          <section className="content col">
            <div className="container-fluid">
              <div className="row content-card">
                <div className="col-lg-12" style={{height: "calc (100vh - 90px)"}}>
                  <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: "100%",
                      marginBottom: 0
                    }}
                  >
                    <div className="card-header border-0 mb-0 pb-0">
                      <div className="d-flex justify-content-between">
                        <div className="add-export" style={{ display: "flex" }}>
                          <button
                            className="btn bg-transparent table-add-button"
                            data-toggle="modal"
                            data-target=".bd-example-modal-sm"
                            style={{padding: "0.375rem 0.325rem"}}
                          >
                            <iconify-icon icon="oi:plus" />
                            Add Employee
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
                                  <h5 className="modal-title">Add Employee</h5>
                                </div>
                                <form onSubmit={handleSubmit}>
                                  <div className="modal-body">
                                    <div className="form-group">
                                      <label htmlFor="name">Employee Name</label>
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="nama_user"
                                        name="nama_user"
                                        value={formValues.nama_user}
                                        onChange={handleInputChange}
                                        aria-describedby="name"
                                        placeholder="Input Employee Name"
                                        autoComplete="off"
                                        required
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="email">
                                        Email Address
                                      </label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="email_user"
                                        name="email_user"
                                        aria-describedby="examplHelp"
                                        placeholder="Input Email Address"
                                        autoComplete="off"
                                        value={formValues.email_user}
                                        onChange={handleInputChange}
                                        required
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="password">Password</label>
                                      <div className="input-group">
                                        <input
                                          type={
                                            showPassword ? "text" : "password"
                                          } // menyesuaikan tipe input berdasarkan state showPassword
                                          className="form-control"
                                          id="password"
                                          name="password"
                                          aria-describedby="examplHelp"
                                          placeholder="Input Password"
                                          autoComplete="off"
                                          value={formValues.password}
                                          onChange={handleInputChange}
                                          required
                                        />
                                        <div className="input-group-append">
                                          <span
                                            className="input-group-text"
                                            onClick={() =>
                                              setShowPassword(!showPassword)
                                            } // toggle show password ketika icon diklik
                                            style={{ cursor: "pointer" }}
                                          >
                                            <i
                                              className={
                                                showPassword
                                                  ? "fas fa-eye-slash"
                                                  : "fas fa-eye"
                                              }
                                            ></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="confirmPassword">
                                        Confirm Password
                                      </label>
                                      <div className="input-group">
                                        <input
                                          type={
                                            showConfirmPassword
                                              ? "text"
                                              : "password"
                                          }
                                          className="form-control"
                                          id="confirmPassword"
                                          name="confirmPassword"
                                          aria-describedby="examplHelp"
                                          placeholder="Confirm Password"
                                          autoComplete="off"
                                          value={confirmPassword}
                                          onChange={handleConfirmPasswordChange}
                                          required
                                        />
                                        <div className="input-group-append">
                                          <span
                                            className="input-group-text"
                                            onClick={() =>
                                              setShowConfirmPassword(
                                                !showConfirmPassword
                                              )
                                            } // toggle show password ketika icon diklik
                                            style={{ cursor: "pointer" }}
                                          >
                                            <i
                                              className={
                                                showConfirmPassword
                                                  ? "fas fa-eye-slash"
                                                  : "fas fa-eye"
                                              }
                                            ></i>
                                          </span>
                                        </div>
                                      </div>
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
                                      Add Employee
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
                    <div className="card-body pr-0" style={{ padding: "0px 24px", height:"calc(100vh - 152px"}}>
                      <Table employee={employee} loading={loading} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Employee;
