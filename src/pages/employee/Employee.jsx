import axios from "axios";
import CommonComponent from "../../components/common/CommonComponent";
// import EmployeeTable from "./EmployeeTable";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";

function Employee() {
  const [employee, setEmployee] = useState([]);
  const [formValues, setFormValues] = useState({
    nama_user: "",
    email_user: "",
    password: "",
    role: "",
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
          <div className="col-6">
            <h2>Data Employee</h2>
            <div id="employee-table">
              {/* <EmployeeTable employee={employee} /> */}
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
      </div>
    </>
  );
}

export default Employee;
