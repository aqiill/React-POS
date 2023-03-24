import React, { useRef } from 'react'
// import simpleLogo from "%PUBLIC_URL%/../../public/assets/img/SimpleLogo.svg";
import { useReactToPrint } from 'react-to-print';



const ModalInvoice = () => {
    const componentRef = useRef();


    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      scale: 2,
    });

  return (
    <div
        className="modal fade"
        id="invoiceModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="invoiceModalLabel"
        aria-hidden="true"
        ref={componentRef}
    >
    <div className="modal-dialog">
    <div className="modal-content">
    <div
        className="modal-header bg"
        style={{ backgroundColor: "#5B7CFD", borderBottomLeftRadius: 45 }}
    >
    <a
    className="modal-title"
    style={{ color: "white" }}
    id="invoiceModalLabel"
    >
    INVOICE
    </a>
            <button
            type="button"
            className="close"
            style={{ color: "white" }}
            data-dismiss="modal"
            aria-label="Close"
            >
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <div className="modal-body">
            <div className="d-flex justify-content-center mt-2">
            <img
                src="dist/img/SimpleLogo.svg"
                style={{ width: "35%", height: "35%" }}
                alt="logo"
            />
            </div>
            <table
            className="table"
            style={{ borderCollapse: "collapse", borderSpacing: 0 }}
            >
            <tbody>
                <tr>
                <td
                    style={{ border: "none", borderBottom: "1px dotted #5B7CFD" }}
                >
                    Date Order
                </td>
                <td
                    className="text-right"
                    colSpan={7}
                    style={{ border: "none", borderBottom: "1px dotted #5B7CFD" }}
                >
                    02/09/2023
                </td>
                </tr>
                <tr>
                <td
                    style={{ border: "none", borderBottom: "1px dotted #5B7CFD" }}
                >
                    Total Amount
                </td>
                <td
                    className="text-right"
                    colSpan={3}
                    style={{ border: "none", borderBottom: "1px dotted #5B7CFD" }}
                >
                    IDR 25,000.00
                </td>
                </tr>
            </tbody>
            </table>
            <table className="table">
            <thead
                className="bg"
                style={{ backgroundColor: "#5B7CFD", color: "white" }}
            >
                <tr>
                <td colSpan={2} className="text-right">
                    Product
                </td>
                <td className="text-right">Qty</td>
                <td className="text-right">Price</td>
                </tr>
            </thead>
            <tbody
                className="bg"
                style={{ backgroundColor: "#F2F3F8", color: "black" }}
            >
                <tr>
                <td colSpan={2} className="text-right">
                    Product 1
                </td>
                <td className="text-right">2</td>
                <td className="text-right">IDR 25,000.00</td>
                </tr>
                <tr>
                <td colSpan={2} className="text-right">
                    Product 2
                </td>
                <td className="text-right">4</td>
                <td className="text-right">IDR 17,000.00</td>
                </tr>
                <tr>
                <td colSpan={3} className="text-right">
                    Subtotal
                </td>
                <td className="text-right">IDR 42,000.00</td>
                </tr>
                <tr>
                <td colSpan={3} className="text-right">
                    Discount
                </td>
                <td className="text-right">IDR 7,500.00</td>
                </tr>
                <tr>
                <td colSpan={3} className="text-right">
                    Total
                </td>
                <td className="text-right">IDR 34,500.00</td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className="modal-footer d-flex justify-content-center mb-2">
        {/* <button
            className="btn btn-primary btn-rounded"
            style={{ backgroundColor: "#5B7CFD", borderRadius: 20, width: 175 }}
            onClick={() => {
                window.print();
                }}
            >
            Generate Invoice
        </button> */}
        <button 
            onClick={handlePrint} 
            htmlType='submit' 
            className="btn btn-primary btn-rounded"
            style={{ backgroundColor: "#5B7CFD", borderRadius: 20, width: 175 }}
        >
            Generate Invoice
        </button>
        {/* <button
            className="btn btn-primary btn-rounded"
            style={{ backgroundColor: "#5B7CFD", borderRadius: 20, width: 175 }}
            onClick={generatePDF}
            >
            Generate Invoice
        </button> */}


        </div>
        </div>
    </div>
    </div>

  )
}

export default ModalInvoice