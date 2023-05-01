import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import SidebarCashier from "../../components/sidebar/SidebarCashier";
import { Link } from "react-router-dom";
import { MD5 } from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileEdit = () => {
  const [profile, setProfile] = useState([]);
  const id_user = localStorage.getItem("id_user");
  const apiConfig = {
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
  };

  const [formData, setFormData] = useState({
    nama_user: "",
    password: "",
    password_baru: "",
    kon_password_baru: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    const email = localStorage.getItem("email_user");
    const data = new FormData();

    data.append("email", email);
    data.append("nama_user", formData.nama_user);
    data.append("password", formData.password);
    data.append("password_baru", formData.password_baru);
    data.append("kon_password_baru", formData.kon_password_baru);

    axios
      .post(process.env.REACT_APP_BASE_API + "/users/changepass", data, {
        headers: {
          "Content-Type": "application/json",
          api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Profile updated", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update profile", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/" + id_user, apiConfig);
        setProfile(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
        // Tambahkan pesan error yang jelas untuk memberitahu pengguna tentang kesalahan yang terjadi
        setProfile([]);
      }
    };

    fetchData();
  }, []);

  const email = localStorage.getItem("email_user");
  const avatar =
    "https://gravatar.com/avatar/" + MD5(email).toString() + "?d=mm&s=300";

  const role = localStorage.getItem("role");
  const sidebar = role === 'Administrator' ? <Sidebar /> : <SidebarCashier activePage="Cashier" />;

  return (
    <>
      <CommonComponent pageTitle={"Edit Profile"} backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        {sidebar}
        <div
          className="content-wrapper mt-0 pt-0 mb-0 pb-0"
          style={{
            backgroundColor: "#E7EEF8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="box">
          <div className="card" style={{ height: 750, width: 750, borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
              <Link
                to="/profile"
                className="btn btn-secondary position-absolute top-0 start-0 m-3"
                style={{ backgroundColor: "rgba(1, 1, 1, 0)", border: "none" }}
              >
                <i className="fas fa-arrow-left" id="backButton" style={{ color: "black" }} />
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="profile-pic mt-3" style={{ marginLeft: 280 }}>
                    <a href="https://gravatar.com/" target="v_blank">
                      <img src={avatar} alt="Profile" />
                    </a>
                  </div>
                  <div className="form-group" style={{ marginTop: 25 }}>
                    <label
                      className="font-weight-light"
                      htmlFor="name"
                      style={{ color: "grey" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="name"
                      name="nama_user"
                      defaultValue={profile.nama_user}
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      onChange={handleChange}
                    />
                    <label
                      className="font-weight-light"
                      htmlFor="email"
                      style={{ color: "grey", marginTop: 20 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control-plaintext"
                      id="email"
                      defaultValue={profile.email_user}
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      readOnly
                    />
                    <label
                      className="font-weight-light"
                      htmlFor="name"
                      style={{ color: "grey", marginTop: 20 }}
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      className="form-control-plaintext"
                      id="pwOld"
                      name="password"
                      defaultValue
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      onChange={handleChange}
                    />
                    <label
                      className="font-weight-light"
                      htmlFor="name"
                      style={{ color: "grey", marginTop: 20 }}
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control-plaintext"
                      id="pwNew"
                      name="password_baru"
                      defaultValue
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      onChange={handleChange}
                    />
                    <label
                      className="font-weight-light"
                      htmlFor="name"
                      style={{ color: "grey", marginTop: 20 }}
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control-plaintext"
                      id="pwConfirm"
                      name="kon_password_baru"
                      defaultValue
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      onChange={handleChange}
                    />
                    <div className="mt-3 d-flex justify-content-left">
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded"
                        id="saveButton"
                        style={{
                          backgroundColor: "#5B7CFD",
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "smaller",
                          width: "fit",
                          height: 35,
                        }}
                      >
                        Save Changes{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfileEdit;
