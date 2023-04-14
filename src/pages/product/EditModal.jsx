import React, { Component, useState, useEffect, useRef } from 'react'
import axios from "axios";
import { useReactToPrint } from 'react-to-print';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";

const EditModal = ({ }) => {

    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRes = await axios.get(process.env.REACT_APP_BASE_API + "/produk", {
                    headers: {
                        api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                    },
                });

                setProduct(productRes.data.data);

                const categoryRes = await axios.get(process.env.REACT_APP_BASE_API + "/kategori", {
                    headers: {
                        api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                    },
                });
                setCategory(categoryRes.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        kode_produk: "",
        nama_produk: "",
        kategori_id: "",
        harga_modal: "",
        harga_jual: "",
        stok: "",
        gambar: null,
        expired_date: "",
    });


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.files[0],
        });
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();

        const data = new FormData();
        data.append("kode_produk", formData.kode_produk);
        data.append("nama_produk", formData.nama_produk);
        data.append("kategori_id", formData.kategori_id);
        data.append("harga_modal", formData.harga_modal);
        data.append("harga_jual", formData.harga_jual);
        data.append("stok", formData.stok);
        data.append("gambar", formData.gambar);
        data.append("expired_date", formData.expired_date);
        axios
            .post(process.env.REACT_APP_BASE_API + `/produk/update/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                },
            })
            .then((response) => {
                console.log(response.data);
                // navigate('/product')
                // Toast({ message: "Product created!", type: "success" });
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {product.map((product) => (
                <div
                    className="modal fade bd-example-modal-sm2"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true"
                    id={`updateModal${product.produk_id}`}
                >
                    <div
                        className="modal-dialog modal-sm"
                        role="document"
                    >
                        <form onSubmit={(e) => handleSubmit(e, product.produk_id)}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Product</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="productImage"
                                            aria-describedby="emailHelp"
                                            placeholder="Image's src"
                                            name="gambar"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productCode">
                                            Product Code
                                        </label>
                                        <input
                                            type="number"
                                            name="kode_produk"
                                            className="form-control"
                                            id="productCode"
                                            aria-describedby="emailHelp"
                                            placeholder="Input Product Code"
                                            defaultValue={product.kode_produk}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productName">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="nama_produk"
                                            className="form-control"
                                            id="productName"
                                            aria-describedby="emailHelp"
                                            placeholder="Input Product Name"
                                            defaultValue={product.nama_produk}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">
                                            Category
                                        </label>
                                        <select name="kategori_id" className="form-control" id="category" onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            {category.map((category) => (
                                                <option value={category.kategori_id}>{category.nama_kategori}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productExpireDate">
                                            Expire Date
                                        </label>
                                        <div id="sandbox-container">
                                            <div className="input-group date">
                                                <input
                                                    type="date"
                                                    name="expired_date"
                                                    className="form-control"
                                                    id="productExpireDate"
                                                    defaultValue={product.expired_date}
                                                    onChange={handleChange}
                                                />
                                                <span className="input-group-addon">
                                                    <i className="glyphicon glyphicon-th" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Stocks
                                        </label>
                                        <input
                                            type="number"
                                            name="stok"
                                            className="form-control"
                                            id="productStocksAmount"
                                            aria-describedby="emailHelp"
                                            placeholder="Eg. 200"
                                            defaultValue={product.stok}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Capital Price
                                        </label>
                                        <input
                                            type="number"
                                            name="harga_modal"
                                            className="form-control"
                                            id="productCapitalPrice"
                                            aria-describedby="emailHelp"
                                            placeholder="Eg. IDR 25,000.00"
                                            defaultValue={product.harga_modal}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="harga_jual"
                                            className="form-control"
                                            id="productPrice"
                                            aria-describedby="emailHelp"
                                            placeholder="Eg. IDR 35,000.00"
                                            defaultValue={product.harga_jual}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer" 
                                    style={{ border: "none" }}>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black",
                                            fontWeight: "normal",
                                            fontSize: "smaller",
                                            width: 100,
                                            height: 35,
                                            border: "none",
                                        }}
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <a href="/product">
                                        <button

                                            type="submit"
                                            className="btn btn-primary"
                                            style={{
                                                backgroundColor: "#5B7CFD",
                                                color: "white",
                                                fontWeight: "normal",
                                                fontSize: "smaller",
                                                width: "fit",
                                                height: 35,
                                            }}
                                            id="saveBtn"

                                        >
                                            Update Product
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EditModal;
