import { useEffect, useRef, useState } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import emailjs from "@emailjs/browser";
import $ from "jquery";

function HelpAndSupport() {
  useEffect(() => {
    document.title = "Help and Support | POS";
    document.body.classList.add("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");
    document.body.style.background = "#e7eef8";

    return () => {
      document.body.classList.remove("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");
      document.body.style.background = null;
    };
  }, []);

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
      <CommonComponent pageTitle="Help & Support" backgroundStyle="#e7eef8" />

      <div className="wrapper" style={{ overflow: "hidden" }}>
        <Header />
        <Sidebar activePage="help-and-support" />
        <div className="content-wrapper row">
          <section className="content col">
            <section className="container-fluid">
              <div className="col-lg-12">
                <div className="card mb-0" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: 10, height: "auto" }}>
                  <div className="card-header border-0">
                    <h4>Get in touch</h4>
                  </div>
                  <div className="card-body" style={{ padding: "0px 24px" }}>
                    <div className="scrollable-table" style={{ height: 480, overflowY: "auto", overflowX: "hidden" }}>
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
                              <input className="form-control" name="user_name" placeholder="Input your name here" />
                            </div>
                            <div className="form-group help-form">
                              <label htmlFor="email" style={{ fontWeight: "normal" }}>
                                Gmail
                              </label>
                              <input className="form-control" name="user_email" placeholder="Input your gmail here" />
                            </div>
                            <div className="form-group help-form">
                              <label htmlFor="message" style={{ fontWeight: "normal" }}>
                                Message
                              </label>
                              <textarea className="form-control" name="message" rows={5} placeholder="Write your message" defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" style={{ float: "right" }}>
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
                              <img className="d-inline mr-2" src="../dist/img/whatsapp.svg" alt="whatsappLogo" style={{ height: 20 }} />
                              <p className="d-inline">08765432101</p>
                            </div>
                          </div>
                          <div className="social-media mb-4">
                            <div className="social-media-description mb-1">
                              <p className="mb-1">Instagram</p>
                              <p className="mb-1 text-muted">Follow us on Instagram!</p>
                            </div>
                            <div className="social-media-contact">
                              <img className="d-inline mr-2" src="../dist/img/instagram.svg" alt="instagramLogo" style={{ height: 20 }} />
                              <p className="d-inline">08765432101</p>
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
      {/* email sent modal */}
      <div className={`modal fade ${isEmailSentModalOpen ? "show" : ""}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: isEmailSentModalOpen ? "block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Email has been sent
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setIsEmailSentModalOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Please kindly wait for our response in 24 hours.</div>
          </div>
        </div>
      </div>
      {/* email failed sent modal */}
      <div className={`modal fade ${isEmailFailedModalOpen ? "show" : ""}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: isEmailSentModalOpen ? "block" : "none" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Email has failed to be sent
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setIsEmailSentModalOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Sorry, looks like something unexpected happened. Please kindly rewrite the form and resend your message.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupport;
