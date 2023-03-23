import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | BLEVEN";
    document.body.classList.add("login-page", "hold-transition");
    document.body.style.background = "#e7eef8";
    return () => {
      document.body.style.background = null;
      document.body.classList.remove("login-page", "hold-transition");
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("email_user")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login/auth",
        {
          email_user: email,
          password: password,
        },
        {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        }
      );
      if (response.data.status === 200) {
        localStorage.setItem("nama_user", response.data.data.nama_user);
        localStorage.setItem("email_user", response.data.data.email_user);
        navigate("/home");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error while processing form submission: ", error);
      console.error(
        "Error response data: ",
        error.response && error.response.data
      );
      alert("Failed to login. Please check your email and password.");
    }
  };

  return (
    <>
      <div className="login-box">
        <div className="card">
          <div className="login-logo mt mb-5" style={{ marginTop: 50 }}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/SimpleLogo.svg"}
              style={{ width: "80%", height: "80%" }}
              alt="logo"
            />
          </div>
          <div className="card-body login-card-body">
            <form
              action="#!"
              method="post"
              id="form-login"
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label className="font-weight-lighter mb-0" htmlFor="email">
                  Email
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control-plaintext mt-0"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email"
                    required
                  />
                  <div
                    className="invalid-feedback mt"
                    style={{
                      position: "absolute",
                      marginTop: 40,
                      fontSize: 11,
                    }}
                  >
                    <i className="fas fa-exclamation-triangle" />
                    Invalid email
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="font-weight-lighter mt-2 mb-0"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control-plaintext mt-0"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      type="button"
                      id="togglePasswordVisibility"
                    >
                      <i className="fas fa-eye" />
                    </button>
                  </div>
                  <div
                    className="invalid-feedback mt"
                    style={{
                      position: "absolute",
                      marginTop: 40,
                      fontSize: 11,
                    }}
                  >
                    <i className="fas fa-exclamation-triangle" />
                    Invalid password
                  </div>
                </div>
              </div>
              <div
                className="mt mb-5 d-flex justify-content-center"
                style={{ marginTop: 80 }}
              >
                <button
                  type="submit"
                  className="btn btn-primary btn-rounded"
                  style={{
                    backgroundColor: "#5B7CFD",
                    borderRadius: 50,
                    width: 175,
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
