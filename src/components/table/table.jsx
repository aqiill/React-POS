import React from "react";
// import $ from "jquery";
// import "../../dist/js/table.js";
// import styles from "../../dist/css/custom.css";

function table() {
  return (
    <>
      <div className="col-lg-12">
        <div className="card order-list" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: 10 }}>
          <div className="card-header border-0">
            <div className="d-flex justify-content-between">
              <h6>Order List</h6>
              <div>
                <div className="input-group">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                  </div>
                  <button type="button" className="btn btn-primary">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ padding: "0px 24px" }}>
            <table className="table">
              <thead>
                <tr className="text-muted fs-10">
                  <td scope="col">No</td>
                  <td scope="col">Photo</td>
                  <td scope="col">Product Name</td>
                  <td scope="col">Expire Date</td>
                  <td scope="col">Price</td>
                  <td scope="col">Quantity</td>
                  <td scope="col">Sub Total</td>
                  <td scope="col">Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr className="fs-10">
                  <td scope="row">1</td>
                  <td>
                    <img className="table-product-img" src="../dist/img/susu.png" alt />
                  </td>
                  <td>Susu Ultra Milk Coklat 200ml</td>
                  <td>22/02/2023</td>
                  <td>IDR 25,500.00</td>
                  <td>1</td>
                  <td>IDR 25,500.00</td>
                  <td>
                    <button className="btn table-actions-button bg-transparent">
                      <iconify-icon icon="mdi:minus-circle-outline" style={{ color: "black" }} width={20} />
                    </button>
                    <button className="btn table-actions-button bg-transparent">
                      <iconify-icon icon="mdi:plus-circle-outline" style={{ color: "black" }} width={20} />
                    </button>
                  </td>
                </tr>
                <tr className="fs-10">
                  <td scope="row">1</td>
                  <td>
                    <img className="table-product-img" src="../dist/img/susu.png" alt />
                  </td>
                  <td>Susu Ultra Milk Coklat 200ml</td>
                  <td>22/02/2023</td>
                  <td>IDR 25,500.00</td>
                  <td>1</td>
                  <td>IDR 25,500.00</td>
                  <td>
                    <button className="btn table-actions-button bg-transparent">
                      <iconify-icon icon="mdi:minus-circle-outline" style={{ color: "black" }} width={20} />
                    </button>
                    <button className="btn table-actions-button bg-transparent">
                      <iconify-icon icon="mdi:plus-circle-outline" style={{ color: "black" }} width={20} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderRadius: 10 }}>
          <div className="card-header border-0 d-flex justify-content-between">
            <h6>Payment Method</h6>
            <h6>Payment Details</h6>
          </div>
          <div className="card-body d-flex justify-content-between" style={{ padding: "0px 24px" }}>
            <div>
              <form action>
                <div className="form-group">
                  <label htmlFor="inputMemberId" />
                  <input type="email" className="form-control" id="memberId" aria-describedby="emailHelp" placeholder="Input Member ID" />
                </div>
                <div className="form-group">
                  <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Payment Method">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="d-flex payment-details">
              <div>
                <p>Sub Total :</p>
                <p>Tax :</p>
                <p>Discount :</p>
                <p>Total :</p>
              </div>
              <div>
                <p>IDR 25,500.00</p>
                <p>IDR 2,000.00</p>
                <p>IDR 0.00</p>
                <p>IDR 27,500.00</p>
              </div>
            </div>
          </div>
          <div className="m-12">
            <button type="button" className="btn btn-primary float-right" data-target="#invoiceModal" data-toggle="modal">
              Procceed
            </button>
          </div>
          {/* Modal */}
          <div className="modal fade invoiceModal" id="invoiceModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    INVOICE
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <img className="invoiceLogo" src="../docs/assets/img/POS_logo.png" alt />
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>Date Order</p>
                      <p>Total Amount</p>
                    </div>
                    <div className="col text-right">
                      <p>2023-02-28</p>
                      <p>IDR 27,500.00</p>
                    </div>
                  </div>
                  <div className="row invoiceTable">
                    <table className="table">
                      <thead>
                        <tr className="trColumn blueAccent">
                          <th scope="col">Product</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Susu Ultra Milk Coklat 200ml</th>
                          <td>1</td>
                          <td>IDR 25,500.00</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td>Tax</td>
                          <td>IDR 2,000.00</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td>Discount</td>
                          <td>IDR 0.00</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td>Total</td>
                          <td>IDR 27,500.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary rounded blueAccent horizontalCenter generateInvoice">
                    Generate Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default table;
