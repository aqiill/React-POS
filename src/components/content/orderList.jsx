import React from "react";

function orderList(props) {
  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };

  const handlePay = async () => {
    try {
      const no_pembayaran = Math.floor(Math.random() * 1000000000);

      //   {
      //     "id_user": "1",
      //     "total_pembayaran": "13400",
      //     "total_diskon": "0",
      //     "no_pembayaran": "202302260012",
      //     "status_bayar": "Y",
      //     "detail": [
      //         {
      //             "id_produk": "1",
      //             "jml_pesan": "4"
      //         },
      //         {
      //             "id_produk": "2",
      //             "jml_pesan": "1"
      //         }
      //     ]
      // }
      const cart = props.cart.map((item) => {
        return {
          id_produk: item.id,
          jml_pesan: item.jumlah,
        };
      });

      const data = {
        id_user: localStorage.getItem("id_user"),
        total_pembayaran: props.total + props.total * 0.11,
        total_diskon: 0,
        no_pembayaran: no_pembayaran,
        status_bayar: "Y",
        detail: cart,
      };

      const apiKey = "e3fd6b146fcb65f7419e3531a0a84f4d700b8210";
      const response = await fetch(
        process.env.REACT_APP_BASE_API + "/transaksi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_key: apiKey,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }

      alert("Payment success!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  return (
    <div>
      <div>
        <div
          className="card"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 10,
          }}
        >
          <div
            className="card-header border-0"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <h6>Payment Details</h6>
          </div>
          <div
            className="card-body d-flex justify-content-between"
            style={{ padding: "0px 24px" }}
          >
            <div></div>
            <div className="d-flex payment-details">
              <div>
                <p>Sub Total :</p>
                <p>Tax :</p>
                <p>Total :</p>
              </div>
              <div>
                <p>{formatPrice(props.total)}</p>
                <p>{formatPrice(props.total * 0.11)}</p>
                <p>{formatPrice(props.total + props.total * 0.11)}</p>
              </div>
            </div>
          </div>
          <div className="m-12">
            <button
              type="button"
              className="btn btn-primary float-right"
              data-target="#invoiceModal"
              data-toggle="modal"
            >
              Procceed
            </button>
          </div>
          {/* Modal */}
          <div
            className="modal fade invoiceModal"
            id="invoiceModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    INVOICE
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <img
                      className="invoiceLogo"
                      src="../docs/assets/img/POS_logo.png"
                      alt="BLeven Logo"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>Date Order</p>
                      <p>Total Amount</p>
                    </div>
                    <div className="col text-right">
                      <p>{new Date().toLocaleDateString()}</p>
                      <p>{formatPrice(props.total + props.total * 0.11)}</p>
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
                        {props.cart.map((item) => (
                          <tr>
                            <th scope="row">{item.nama}</th>
                            <td>{item.jumlah}</td>
                            <td>{item.harga}</td>
                          </tr>
                        ))}
                        <tr>
                          <th scope="row" />
                          <td>Tax</td>
                          <td>{props.total * 0.11}</td>
                        </tr>
                        <tr>
                          <th scope="row" />
                          <td>Total</td>
                          <td>
                            {formatPrice(props.total + props.total * 0.11)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={handlePay}
                    type="button"
                    className="btn btn-primary rounded blueAccent horizontalCenter generateInvoice"
                  >
                    Pay
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
