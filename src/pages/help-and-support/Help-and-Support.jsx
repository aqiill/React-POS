import { useEffect } from "react";
import CommonComponent from "../../components/common/CommonComponent";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

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

  return (
    <>
      <CommonComponent pageTitle="Help & Support" backgroundStyle="#e7eef8" />

      <div classname="wrapper">
        <Header />
        <Sidebar activePage="help-and-support" />
        <div classname="content-wrapper row">
          <section classname="content col">
            <section classname="container-fluid">
              <div className="col-lg-12">
                <div className="card" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: 10, height: "auto" }}>
                  <div className="card-header border-0">
                    <h5>Get in touch</h5>
                  </div>
                  <div className="card-body" style={{ padding: "0px 24px" }}>
                    <div className="scrollable-table" style={{ height: 480, overflowY: "auto", overflowX: "hidden" }}>
                      <div className="row">
                        <div className="col-sm">
                          <form>
                            <div className="form-header">
                              <h5>Send a message</h5>
                              <p>Fill up the form and our Team will get back to you within 24 hours</p>
                            </div>
                            <div className="help-form-body">
                              <div className="form-group help-form">
                                <label htmlFor="name" style={{ fontWeight: "normal" }}>
                                  Name
                                </label>
                                <input className="form-control" id="name" placeholder="Input your name here" />
                              </div>
                              <div className="form-group help-form">
                                <label htmlFor="email" style={{ fontWeight: "normal" }}>
                                  Name
                                </label>
                                <input className="form-control" id="email" placeholder="Input your email here" />
                              </div>
                              <div className="form-group help-form">
                                <label htmlFor="message" style={{ fontWeight: "normal" }}>
                                  Message
                                </label>
                                <textarea className="form-control" id="message" rows={5} placeholder="Write your message" defaultValue={""} />
                              </div>
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
    </>
  );
}

export default HelpAndSupport;
