import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CommonComponent from "../../components/common/CommonComponent";
import axios from "axios";
import { MD5 } from "crypto-js";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const id_user = localStorage.getItem("id_user");
  const apiConfig = {
    baseURL: "http://localhost:8080",
    headers: {
      api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
    },
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
  const avatar = 'https://gravatar.com/avatar/' + MD5(email).toString() + '?d=mm&s=300';

  return (
    <>
      <CommonComponent pageTitle="Profile" backgroundStyle="#e7eef8" />
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
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="name"
                      defaultValue={profile.nama_user}
                      style={{
                        borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                        fontSize: "larger",
                      }}
                      readOnly disabled
                    />
                    <Link to="/profileedit" className="btn btn-secondary input-group-text" style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      backgroundColor: "rgba(1, 1, 1, 0)",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderRadius: 0,
                    }} id="editButton">
                      <i className="bi bi-pencil-fill" style={{ color: "black" }} />
                    </Link>
                  </div>
                  <label
                    className="font-weight-light"
                    htmlFor="role"
                    style={{ color: "grey", marginTop: 45 }}
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="role"
                    defaultValue={profile.role}
                    style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      fontSize: "larger",
                    }}
                    readOnly
                  />
                  <label
                    className="font-weight-light"
                    htmlFor="mail"
                    style={{ color: "grey", marginTop: 45 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control-plaintext"
                    id="mail"
                    defaultValue={profile.email_user}
                    style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      fontSize: "larger",
                    }}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
