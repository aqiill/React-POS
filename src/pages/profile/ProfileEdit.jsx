import React, { Component } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const ProfileEdit = () => {
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
              <button
                type="button"
                className="btn btn-secondary position-absolute top-0 start-0 m-3"
                style={{ backgroundColor: "rgba(1, 1, 1, 0)", border: "none" }}
                onclick="history.back()"
              >
                <a href="/profile">
                  <i className="fas fa-arrow-left" style={{ color: "black" }} />
                  </a>
              </button>
              <div className="card-body">
                <div className="profile-pic mt-3" style={{ marginLeft: 280 }}>
                  <img src="https://via.placeholder.com/150" alt="Profile" />
                  <input type="file" className="file-upload" />
                </div>
                <div className="form-group" style={{ marginTop: 56 }}>
                  <label
                    className="font-weight-light"
                    htmlFor="name"
                    style={{ color: "grey" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control-plaintext"
                    id="name"
                    defaultValue="lamda@gmail.com"
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
                    defaultValue
                    style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      fontSize: "larger",
                    }}
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
                    defaultValue
                    style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      fontSize: "larger",
                    }}
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
                    defaultValue
                    style={{
                      borderBottom: "3px solid rgba(211, 211, 211, 0.8)",
                      fontSize: "larger",
                    }}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
