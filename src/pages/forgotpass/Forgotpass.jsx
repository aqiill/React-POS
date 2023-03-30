import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";

function Forgotpass() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (localStorage.getItem("email_user")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_API + "/login/forgot",
        {
          email_user: email,
        },
        {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        }
      );
      if (response.data.status === 200) {
        await Toast({
          message: "Request successful, check your email",
          type: "success",
        });
        await navigate("/login");
      } else {
        throw new Error("Email not found");
      }
    } catch (error) {
      console.error("Error while processing form submission: ", error);
      console.error(
        "Error response data: ",
        error.response && error.response.data
      );
      // alert("Failed to send email. Please check your email");
      await Toast({
        message: "Process failed: Email not found",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="login-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <div className="card">
          <div className="login-logo mt mb-5" style={{ marginTop: 50 }}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/bleven_logo.png"}
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
                  {isLoading ? "Loading..." : "Forgot Password"}
                </button>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="text-primary btn btn-link"
                  onClick={() => navigate("/login")}
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Forgotpass;
