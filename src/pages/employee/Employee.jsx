import axios from "axios";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Table from "./Table";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [formValues, setFormValues] = useState({
    nama_user: "",
    email_user: "",
    password: "",
    role: "Kasir",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const apiConfig = {
    baseURL: "http://localhost:8080",
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };

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
      const response = await axios.post("/users", formValues, apiConfig);
      setSuccessMessage("Data karyawan baru berhasil ditambahkan");
      setFormValues({
        nama_user: "",
        email_user: "",
        password: "",
        role: "",
      });
      setErrorMessage("");
      fetchData();
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Gagal menambahkan data karyawan baru");
    }
  };

  const handleDelete = async (id) => {
    try {
      if (selectedEmployee && selectedEmployee.id_user === id) {
        setSelectedEmployee(null);
      }
      const response = await axios.delete(`/users/${id}`, apiConfig);
      setSuccessMessage("Data karyawan berhasil dihapus");
      setErrorMessage("");
      fetchData();
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Gagal menghapus data karyawan");
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `/users/${selectedEmployee.id_user}`,
        selectedEmployee,
        apiConfig
      );
      setSuccessMessage("Data karyawan berhasil diperbarui");
      setErrorMessage("");
      setSelectedEmployee(null);
      setFormValues({
        nama_user: "",
        email_user: "",
        password: "",
        role: "",
      });
      fetchData();
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Gagal memperbarui data karyawan");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/users", apiConfig);
      setEmployee(response.data.data);
    } catch (error) {
      console.error(error);
      setEmployee([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                                <form onSubmit={handleSubmit}>
                                  <div className="modal-body">
                                    <div className="form-group">
                                      <label htmlFor="name">Cashier Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="nama_user"
                                        name="nama_user"
                                        value={formValues.nama_user}
                                        onChange={handleInputChange}
                                        aria-describedby="name"
                                        placeholder="Input Cashier Name"
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
                                        value={formValues.email_user}
                                        onChange={handleInputChange}
                                        aria-describedby="examplHelp"
                                        placeholder="Input Email Address"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="password">Password</label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleInputChange}
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
                                      Add Cashier
                                    </button>
                                  </div>
                                </form>
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
                      <Table employee={employee} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-6">
          <h2>Data Employee</h2>
          <div id="employee-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((item) => {
                  if (item.role === "Kasir") {
                    return (
                      <tr key={item.id_user}>
                        <td>{item.id_user}</td>
                        <td>{item.nama_user}</td>
                        <td>{item.email_user}</td>
                        <td>{item.role}</td>
                        <td>
                          <button onClick={() => handleDelete(item.id_user)}>
                            Delete
                          </button>
                          <button onClick={() => setSelectedEmployee(item)}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-6">
          {selectedEmployee ? (
            <>
              <h2>Edit Karyawan</h2>
              <form onSubmit={handleUpdate}>
                <div>
                  <label htmlFor="nama_user">Nama:</label>
                  <input
                    type="text"
                    id="nama_user"
                    name="nama_user"
                    value={selectedEmployee.nama_user}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email_user">Email:</label>
                  <input
                    type="email"
                    id="email_user"
                    name="email_user"
                    value={selectedEmployee.email_user}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={selectedEmployee.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="role">Role:</label>
                  <select
                    id="role"
                    name="role"
                    value={selectedEmployee.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">Kasir</option>
                  </select>
                </div>
                <div>
                  <button type="submit">Simpan</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2>Tambah Karyawan Baru</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nama_user">Nama:</label>
                  <input
                    type="text"
                    id="nama_user"
                    name="nama_user"
                    value={formValues.nama_user}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email_user">Email:</label>
                  <input
                    type="email"
                    id="email_user"
                    name="email_user"
                    value={formValues.email_user}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="role">Role:</label>
                  <select
                    id="role"
                    name="role"
                    value={formValues.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Pilih Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">Kasir</option>
                  </select>
                </div>
                <div>
                  <button type="submit">Tambah Karyawan Baru</button>
                </div>
              </form>
              {successMessage && (
                <div className="success">{successMessage}</div>
              )}
              {errorMessage && <div className="error">{errorMessage}</div>}
            </>
          )}
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
              <h5 className="modal-title">Update Cashier</h5>
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
    </>
  );
}

export default Employee;
