import React from "react";

function orderList() {
  return (
    <div>
      <div>
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
                    <option>Method 1</option>
                    <option>Method 2</option>
                    <option>Method 3</option>
                    <option>Method 4</option>
                    <option>Method 5</option>
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
    </div>
  );
}

export default orderList;
