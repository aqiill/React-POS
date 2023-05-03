import { useRef, useState } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import emailjs from "@emailjs/browser";
// import $ from "jquery";

function ContactUs() {
  const form = useRef();

  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = useState(false);
  const [isEmailFailedModalOpen, setIsEmailFailedModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_d37pf4j", "template_rbvia4p", e.target, "fGh5ZDdVenfF36cM7").then(
      (result) => {
        console.log(result.text);
        setIsEmailSentModalOpen(true);
      },
      (error) => {
        console.log(error.text);
        setIsEmailFailedModalOpen(true);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <CommonComponent pageTitle="Contact Us" backgroundStyle="#e7eef8" />

      <div className="wrapper" style={{ overflow: "hidden" }}>
        <Header />
        <Sidebar activePage="contact-us" />
        <div className="content-wrapper row">
          <section className="content col">
            <section className="container-fluid">
              <div className="col-lg-12" style={{ height: "calc(100vh - 102px)" }}>
                <div
                  className="card mb-0"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px",
                    borderRadius: 10,
                    height: "100%",
                    marginBottom: 0,
                  }}
                >
                  <div className="card-header border-0">
                    <h4>Get in touch</h4>
                  </div>
                  <div className="card-body" style={{ padding: "0px 24px" }}>
                    <div
                      className="scrollable-table"
                      style={{
                        height: "100%",
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                    >
                      <div className="row">
                        <div className="col-sm">
                          <form ref={form} onSubmit={sendEmail}>
                            <div className="form-header">
                              <h5>Send a message</h5>
                              <p className="text-muted">Fill up the form and our Team will get back to you within 24 hours</p>
                            </div>
                            <div className="form-group help-form">
                              <label htmlFor="name" style={{ fontWeight: "normal" }}>
                                Name
                              </label>
                              <input className="form-control" name="user_name" placeholder="Input your name here" required />
                              <div className="invalid-feedback">Please enter your name.</div>
                            </div>
                            <div className="form-group help-form">
                              <label htmlFor="email" style={{ fontWeight: "normal" }}>
                                Gmail
                              </label>
                              <input className="form-control" name="user_email" placeholder="Input your gmail here" required />
                              <div className="invalid-feedback">Please enter your gmail.</div>
                            </div>
                            <div className="form-group help-form">
                              <label htmlFor="message" style={{ fontWeight: "normal" }}>
                                Message
                              </label>
                              <textarea className="form-control" name="message" rows={5} placeholder="Write your message" defaultValue={""} required />
                              <div className="invalid-feedback">Tell us your problem here.</div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary mb-2"
                              style={{
                                backgroundColor: "#5B7CFD",
                                color: "white",
                                fontWeight: "normal",
                                fontSize: "smaller",
                                width: 125,
                                height: 35,
                                float: "right",
                              }}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                        <div className="col-sm pt-8" style={{ paddingLeft: 32 }}>
                          <div className="social-media mb-4">
                            <div className="social-media-description mb-1">
                              <p className="mb-1">Whatsapp</p>
                              <p className="mb-1 text-muted">Ask us via Whatsapp!</p>
                            </div>
                            <div className="social-media-contact">
                              <a href="https://wa.me/6289612744649" target="_blank">
                                <img className="d-inline mr-2" src="../dist/img/whatsapp.svg" alt="whatsappLogo" style={{ height: 20 }} />
                                <p className="d-inline">089612744649</p>
                              </a>
                            </div>
                          </div>
                          <div className="social-media mb-4">
                            <div className="social-media-description mb-1">
                              <p className="mb-1">Instagram</p>
                              <p className="mb-1 text-muted">Follow us on Instagram!</p>
                            </div>
                            <div className="social-media-contact">
                              <a href="http://instagram.com/blevenpos" target="_blank" style={{ hover: "black" }}>
                                <img className="d-inline mr-2" src="../dist/img/instagram.svg" alt="instagramLogo" style={{ height: 20 }} />
                                <p className="d-inline">@blevenpos</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      {isEmailSentModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Email Sent</h5>
                <button type="button" className="close" onClick={() => setIsEmailSentModalOpen(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your message has been sent successfully!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isEmailFailedModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Email Sending Failed</h5>
                <button type="button" className="close" onClick={() => setIsEmailFailedModalOpen(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>There was an error sending your message. Please try again later.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsEmailFailedModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactUs;
