import React, { Component, useState, useEffect, useRef } from 'react'
import axios from "axios";
// import simpleLogo from "%PUBLIC_URL%/../../public/assets/img/SimpleLogo.svg";
import { useReactToPrint } from 'react-to-print';
import Table from "./Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";


const EditModal = () => {
    const componentRef = useRef();
    const [kategori, setKategori] = useState([]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        scale: 2,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const kategoriRes = await axios.get(process.env.REACT_APP_BASE_API + "/kategori", {
                    headers: {
                        api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                    },
                });

                setKategori(kategoriRes.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    const [formData, setFormData] = useState({
        nama_kategori: "",
    });


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event, id) => {
        event.preventDefault();

        const data = new FormData();
        data.append("nama_kategori", formData.nama_kategori);
        axios
            .post(process.env.REACT_APP_BASE_API + `/kategori/update/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
                },
            })
            .then((response) => {
                console.log(response.data);
                // navigate('/product')
                Toast({ message: "Category Updated Succesfully!", type: "success" });
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        });
        return formatter.format(price);
    };
    return (
        <div>
            <ToastContainer />
            {kategori.map((kategori) => (
                <div
                    className="modal fade bd-example-modal-sm2"
                    id={`editModal${kategori.kategori_id}`}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-sm" role="document">
                        <form onSubmit={(e) => handleSubmit(e, kategori.kategori_id)}>
                            <div className="modal-content">
                                <div className="modal-header" style={{ border: "none" }}>
                                    <h5 className="modal-title">Update Category</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="nameCashier1">Category Name</label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="nameCashier1"
                                            aria-describedby="name"
                                            placeholder="Input Category Name"
                                            name="nama_kategori"
                                            defaultValue={kategori.nama_kategori}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="modal-footer d-flex justify-content-between"
                                    style={{ border: "none" }}
                                >
                                    <button
                                        type="button"
                                        className="btn"
                                        data-dismiss="modal"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black",
                                            fontWeight: "normal",
                                            fontSize: "smaller",
                                            width: 100,
                                            height: 35,
                                            border: "none",
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn ms-auto"
                                        style={{
                                            backgroundColor: "#5B7CFD",
                                            color: "white",
                                            fontWeight: "normal",
                                            fontSize: "smaller",
                                            width: 100,
                                            height: 35,
                                        }}
                                        id="saveBtn"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EditModal