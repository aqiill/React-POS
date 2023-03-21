import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

function Employee() {
  useEffect(() => {
    document.title = "Employee Management | POS";
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

  const [employee, setEmployee] = useState([]);
  const apiConfig = {
    baseURL: "http://localhost:8080",
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users", apiConfig);
        setEmployee(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
        // Tambahkan pesan error yang jelas untuk memberitahu pengguna tentang kesalahan yang terjadi
        setEmployee([]);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar activePage="employee" />
        <div className="content-wrapper row">
          <div>
            <h2>Data Employee</h2>
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama_user}</td>
                    <td>{item.email_user}</td>
                    <td>{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
