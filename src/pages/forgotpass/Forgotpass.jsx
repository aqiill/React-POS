import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Forgotpass(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Forgot Password | BLEVEN";
        document.body.classList.add("forgotpass-page", "hold-transition");
        document.body.style.background = "#e7eef8";
        return () => {
          document.body.style.background = null;
          document.body.classList.remove("forgotpass-page", "hold-transition");
        };
      }, []);

      const handleSubmit = async (event) => {
      };
      const handleForgotPassword = async (event) => {
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

export default Forgotpass;