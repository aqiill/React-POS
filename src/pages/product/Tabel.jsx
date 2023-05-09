import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "pdfmake/build/pdfmake.min.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "jspdf-font";
import React, { Component } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";
import $ from "jquery";
import EditModal from "../product/EditModal";

class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            pageLength: 5,
            scrollY: "calc(610px - 230px)",
            scrollCollapse: true,
            processing: true,
            dom: "<'row'<'col-md-6'B><'col-md-6'f>>" + "<'row'<'col-md-12't>>" + "<'row'<'col-md-6'i><'col-md-6'p>>",

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
                        borderRadius: "10px",
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0)",
                      });
                    }
                  );
                },
                action: function (e, dt, button, config) {
                  var data = dt.buttons.exportData();
                  var headers = dt
                    .columns()
                    .header()
                    .to$()
                    .map(function () {
                      return this.innerText;
                    })
                    .get();
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
                  data = JSON.parse(JSON.stringify(data).replace(/<[^>]*>/g, ""));
                  var doc = new jsPDF("l", "pt", this.pageSize);
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
                      styles: { overflow: "linebreak" },
                      columnStyles: { 0: { cellWidth: 120 } },
                      addPageContent: function (data) {
                        doc.text("Product Management POS", 40, 30);
                      },
                    }
                  );
                  doc.save("Product Management POS.pdf");
                },
              },
              {
                extend: "csv",
                text: "Excel",
                exportOptions: {
                  columns: [0, 2, 3, 4, 5, 6, 7],
                  modifier: {
                    selected: false,
                  },
                },
                className: "btn",
                init: function (api, node, config) {
                  $(node).hover(
                    function () {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: "10px",
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0)",
                      });
                    }
                  );
                },
              },
              {
                extend: "print",
                exportOptions: {
                  columns: [0, 2, 3, 4, 5, 6, 7],
                  modifier: {
                    selected: false,
                  },
                },
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body).find("table").addClass("compact").css("font-size", "inherit");
                },
                className: "btn",
                init: function (api, node, config) {
                  $(node).hover(
                    function () {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: "10px",
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                      });
                    },
                    function () {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0)",
                      });
                    }
                  );
                },
              },
            ],
            fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
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
                style={{ height: "155.54px", width: "200px", objectFit: "cover", objectPosition: "center center", borderRadius: "20px 20px 20px 20px" }}
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
              <button className="btn table-actions-button bg-transparent border drop-shadow mr-2 align-item-center rounded-circle" 
              data-toggle="modal" data-target={`#updateModal${item.produk_id}`}>
                <iconify-icon icon="oi:pencil" />
              </button>
              <button
                className="btn table-actions-button bg-transparent border drop-shadow delete-row align-item-center rounded-circle"
                id={`button-${index}`}
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
    const { handleSubmit, handleChange, handleFileChange, categories, product } = props;
  };

  handleDelete = (id) => {
    axios
      .delete(process.env.REACT_APP_BASE_API + `/produk/${id}`, {
        headers: {
          api_key: `e3fd6b146fcb65f7419e3531a0a84f4d700b8210`,
        },
      })
      .then((response) => {
        console.log(response.data);
        Toast({ message: "Product Delete Succesfully!", type: "success" });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <>
        <div class="card-body mt-0 pt-1 mb-4 pr-0">
          <div className=" scrollable-table" style={{ height: "500px", overflowY: "auto" }}>
            <table id="table" className="table align-items-center justify-content-center">
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

        <EditModal />
      </>
    );
  }
}

export default Table;
