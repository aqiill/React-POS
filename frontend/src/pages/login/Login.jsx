import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  // useEffect(() => {
  //   document.title = "Login | BLEVEN";
  //   document.body.classList.add("login-page", "hold-transition");
  //   document.body.style.background = "#e7eef8";
  //   return () => {
  //     document.body.style.background = null;
  //     document.body.classList.remove("login-page", "hold-transition");
  //   };
  // e3fd6b146fcb65f7419e3531a0a84f4d700b8210
  // }, []);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = { email_user: email, password: password };
  //   axios
  //     .post("http://localhost:8080/login", data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         API_KEY: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.status === 200) {
  //         setMessage(response.data.message);
  //         // do something with the user data returned by the API
  //       } else {
  //         setMessage(response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       setMessage("Error: " + error.message);
  //     });
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email_user: email,
          password: password,
        },
        {
          headers: {
            API_KEY: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/*
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
                    style={{ borderBottom: "2px solid #000000" }}
                    id="email"
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
                    style={{ borderBottom: "2px solid #000000" }}
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      type="button"
                      style={{ borderBottom: "2px solid #000000" }}
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
                */}
      <div>
        <h1>Login Page</h1>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>} */}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
