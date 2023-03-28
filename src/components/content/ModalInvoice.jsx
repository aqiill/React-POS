import React, { Component, useState, useEffect, useRef } from 'react'
import axios from "axios";
// import simpleLogo from "%PUBLIC_URL%/../../public/assets/img/SimpleLogo.svg";
import { useReactToPrint } from 'react-to-print';



const ModalInvoice = () => {
    const componentRef = useRef();
    const [transaksi, setTransaksi] = useState([]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        scale: 2,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const transaksiRes = await axios.get("http://localhost:8080/transaksi/today", {
                    headers: {
                        api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                    },
                });

                setTransaksi(transaksiRes.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        });
        return formatter.format(price);
    };
    return (
        <div>
            {transaksi.map((transaksi) => (
                <div
                    className="modal fade"
                    id={`invoiceModal${transaksi.id_pembayaran}`}
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
                                                {transaksi.tgl_pembayaran}
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
                                                {formatPrice(transaksi.total_pembayaran)}
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
                                            <td className="text-right">Total</td>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg"
                                        style={{ backgroundColor: "#F2F3F8", color: "black" }}
                                    >
                                        {transaksi.pembelian.map((detail) => (
                                            <tr>
                                                <td colSpan={2} className="text-right">
                                                    {detail.nama_produk}
                                                </td>
                                                <td className="text-right">{detail.jml_pesan}</td>
                                                <td className="text-right">{formatPrice(detail.harga_jual)}</td>
                                                <td className="text-right">{formatPrice(detail.jml_pesan * detail.harga_jual)}</td>
                                            </tr>
                                        ))}

                                        <tr>
                                            <td colSpan={4} className="text-right">
                                                Total
                                            </td>
                                            <td className="text-right">{formatPrice(transaksi.total_pembayaran)}</td>
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
            ))}
        </div>
    )
}

export default ModalInvoice