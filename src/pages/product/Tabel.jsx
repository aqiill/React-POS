import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "pdfmake/build/pdfmake.min.js";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import 'jspdf-font';
import React, { Component } from "react";
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";
import $ from "jquery";


class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            pageLength: 4,
            scrollY: "400px",
            scrollCollapse: true,
            processing: true,
            dom:
              "<'row'<'col-md-6'B><'col-md-6'f>>" +
              "<'row'<'col-md-12't>>" +
              "<'row'<'col-md-6'i><'col-md-6'p>>",

            select: {
              style: "single",
            },

            buttons: [

              {
                extend: "pdfHtml5",
                text: "PDF",
                orientation: "landscape",
                pageSize: "A4",
                titleAttr: "PDF",
                className: "btn",
                style: {
                  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "red",
                  margin: "1rem",
                },

                init: function (api, node, config) {
                  $(node).hover(
                    function () {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black"
                      });
                    }
                  );
                },
                action: function (e, dt, button, config) {
                  var data = dt.buttons.exportData();
                  var headers = dt.columns().header().to$().map(function () {
                    return this.innerText;
                  }).get();
                  var excludedColumns = [1, 8];
                  var columnIndexes = headers
                    .map(function (column, index) {
                      if (excludedColumns.includes(index)) {
                        return null;
                      }
                      return index;
                    })
                    .filter(function (columnIndex) {
                      return columnIndex !== null;
                    });
                  data = JSON.parse(JSON.stringify(data).replace(/<[^>]*>/g, ''));
                  var doc = new jsPDF('l', 'pt', this.pageSize);
                  doc.autoTable(
                    columnIndexes.map(function (columnIndex) {
                      return headers[columnIndex];
                    }),
                    data.body.map(function (row) {
                      return columnIndexes.map(function (columnIndex) {
                        return row[columnIndex];
                      });
                    }),
                    {
                      startY: 60,
                      margin: { top: 60 },
                      styles: { overflow: 'linebreak' },
                      columnStyles: { 0: { cellWidth: 120 } },
                      addPageContent: function (data) {
                        doc.text('Product Management POS', 40, 30);
                      },
                    }
                  );
                  doc.save('Product Management POS.pdf');
                },
              },
              {
                extend: "csv",
                text: "Excel",
                exportOptions: {
                  columns: [0, 2, 3, 4, 5, 6, 7],
                  modifier: {
                    selected: false
                  },
                },
                className: "btn",
                init: function (api, node, config) {
                  $(node).hover(
                    function () {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black"
                      });
                    }
                  );
                }
              },
              {
                extend: "print",
                exportOptions: {
                  columns: [0, 2, 3, 4, 5, 6, 7],
                  modifier: {
                    selected: false
                  },
                },
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn",
                init: function (api, node, config) {
                  $(node).hover(
                    function () {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black"
                      });
                    }
                  );
                }
              },
            ],
            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
            columns: [
              { width: "10px" }, // column No
              { width: "50px" }, // column Photo
              { width: "140px" }, // column Product Name
              { width: "100px" }, // column Category
              { width: "80px" }, // column Expire Date
              { width: "50px" }, // column Stock
              { width: "100px" }, // column Capital Price
              { width: "75px" }, // column Price
              { width: "75px" }, // column Action
            ],
          });
        }, 1000);
      });
    }
  }

  showTable = () => {
    try {
      return this.props.products.map((item, index) => {
        return (
          <tr key={index}>
            <td className="">{index + 1}</td>
            <td className="">
              <img
                className="table-product-img"
                src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.gambar}`}
                style={{ height: '155.54px', width: '200px', objectFit: 'cover', objectPosition: 'center center', borderRadius: '20px 20px 20px 20px' }}
                alt="product"
              />
            </td>
            <td className="">{item.nama_produk}</td>
            <td className="">{item.nama_kategori}</td>
            <td className="">{item.expired_date}</td>
            <td className="">{item.stok}</td>
            <td className="">{item.harga_modal}</td>
            <td className="">{item.harga_jual}</td>
            <td>
              <button
                className="btn table-actions-button bg-transparent border drop-shadow"
                data-toggle="modal"
                data-target=".bd-example-modal-sm2"
                style={{ borderRadius: "50%", alignItems: "center" }}
              >
                <iconify-icon icon="oi:pencil" />
              </button>
              <button
                className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row"
                style={{ borderRadius: "50%" }}
                onClick={() => {
                  if (window.confirm("Are you sure want to delete this product?")) {
                    this.handleDelete(item.produk_id);

                  }
                }}
              >
                <iconify-icon icon="oi:trash" style={{ marginLeft: 2 }} />
              </button>
            </td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
    }
  };

  UpdateModal = (props) => {
    const {
      handleSubmit,
      handleChange,
      handleFileChange,
      categories,
      product,
    } = props;
  };

  handleDelete = (id) => {
    axios.delete(process.env.REACT_APP_BASE_API + `/produk/${id}`, {
      headers: {
        'api_key': `e3fd6b146fcb65f7419e3531a0a84f4d700b8210`
      }
    })
      .then(response => {
        console.log(response.data);
        Toast({ message: "Product Delete Succesfully!", type: "success" });
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
      <div class="card-body mt-0 pt-1 mb-4">
        <div className=" scrollable-table" style={{ overflowX: "hidden", }}>
          <table
            id="table"
            className="table align-items-center justify-content-center"
          >
            <thead>
              <tr>
                <th className="">No</th>
                <th className="">Photo</th>
                <th className="">Product Name</th>
                <th className="">Category</th>
                <th className="">Expire Date</th>
                <th className="">Stock</th>
                <th className="">Capital Price</th>
                <th className="">Price</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>{this.showTable()}</tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade bd-example-modal-sm2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
        id="myModal"
      >
        <div
        className="modal-dialog modal-sm"
        role="document"
      >
        {/* <form onSubmit={handleSubmit}> */}
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
                  // onChange={handleFileChange}
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
                  // onChange={handleChange}
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
                  // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">
                  Category
                </label>
                <select name="kategori_id" className="form-control" id="category" >
                  {/* <option value="">Select Category</option>
                  {category.map((category) => (
                    <option value={category.kategori_id}>{category.nama_kategori}</option>
                  ))} */}
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
                      // onChange={handleChange}
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
                  // onChange={handleChange}
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
                  // onChange={handleChange}
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
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
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
                  width: 125,
                  height: 35,
                }}
                id="saveBtn"
                
              >
                Update
              </button>
              </a>
              
            </div>
          </div>
        {/* </form> */}
      </div>
      </div>
      

      </>
      
    );
  }
}

export default Table;
