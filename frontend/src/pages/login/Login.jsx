import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Login | BLEVEN";
    document.body.classList.add("login-page", "hold-transition");
    document.body.style.background = "#e7eef8";
    return () => {
      document.body.style.background = null;
      document.body.classList.remove("login-page", "hold-transition");
    };
  }, []);

  return (
    <>
      <div className="login-box">
        <div className="card">
          <div className="login-logo mt mb-5" style={{ marginTop: 50 }}>
            <img
              src="../../dist/img/SimpleLogo.svg"
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
            >
              <div className="form-group">
                <label className="font-weight-lighter mb-0" htmlFor="email1">
                  Email
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control-plaintext mt-0"
                    style={{ borderBottom: "2px solid #000000" }}
                    id="email1"
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
    </>
  );
}

export default Login;
