import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { MD5 } from "crypto-js";

const ProfileEdit = () => {
  const [profile, setProfile] = useState([]);
  const id_user = localStorage.getItem("id_user");
  const apiConfig = {
    baseURL: "http://localhost:8080",
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
    event.preventDefault();
    const email = localStorage.getItem("email_user");
    const data = new FormData();

    data.append("email", email);
    data.append("nama_user", formData.nama_user);
    data.append("password", formData.password);
    data.append("password_baru", formData.password_baru);
    data.append("kon_password_baru", formData.kon_password_baru);

    axios
      .post("http://localhost:8080/users/changepass", data, {
        headers: {
          "Content-Type": "application/json",
          api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/" + id_user, apiConfig);
        setProfile(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error(error);
        // Tambahkan pesan error yang jelas untuk memberitahu pengguna tentang kesalahan yang terjadi
        setProfile([]);
      }
    };

    fetchData();
  }, []);

  const email = localStorage.getItem("email_user");
  const avatar = 'https://gravatar.com/avatar/' + MD5(email).toString() + '?d=mm&s=300';

  return (
    <>
      <CommonComponent pageTitle={"Edit Profile"} backgroundStyle="#e7eef8" />
      <div className="wrapper">
        <Header />
        <Sidebar />
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
            <div className="card" style={{ height: 755, width: 750 }}>
              <Link to="/profile" className="btn btn-secondary position-absolute top-0 start-0 m-3" style={{ backgroundColor: "rgba(1, 1, 1, 0)", border: "none" }}>
                <i className="fas fa-arrow-left" style={{ color: "black" }} />
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="profile-pic mt-3" style={{ marginLeft: 280 }}>
                    <a href="https://gravatar.com/" target="v_blank"><img src={avatar} alt="Profile" /></a>
                  </div>
                  <div className="form-group" style={{ marginTop: 56 }}>
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
                      selected
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      autoFocus
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
                      id="pw"
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
                      id="pw"
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
                      id="pw"
                      name="kon_password_baru"
                      defaultValue
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      onChange={handleChange}
                    />
                    <div className="mt-5 mb-5 d-flex justify-content-left">
                      <button
                        type="submit"
                        className="btn btn-primary btn-rounded"
                        id="saveBtn"
                        style={{
                          backgroundColor: "#5B7CFD",
                          borderRadius: 5,
                          width: 125,
                        }}
                      >
                        Save{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
