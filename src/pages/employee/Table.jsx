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

import $ from "jquery";
class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            pageLength: 10,
            scrollY: "210px",
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
                  data = JSON.parse(
                    JSON.stringify(data).replace(/<[^>]*>/g, "")
                  );
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
                        doc.text("Employee Management POS", 40, 30);
                      },
                    }
                  );
                  doc.save("Employee Management POS.pdf");
                },
              },
              {
                extend: "csv",
                text: "Excel",
                exportOptions: {
                  columns: [0, 1, 2, 3],
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
                      });
                    }
                  );
                },
              },

              {
                extend: "print",
                exportOptions: {
                  columns: [0, 1, 2, 3],
                  modifier: {
                    selected: false,
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
                      });
                    }
                  );
                },
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
              { width: "50px" }, // column ID
              { width: "140px" }, // column Product Name
              { width: "100px" }, // column Category
              { width: "80px" }, // column Expire Date
            ],
          });
        }, 1000);
      });
    }
  }

  showTable = () => {
    try {
      return this.props.employee.map((item, index) => {
        if (item.role === "Employee") {
          return (
            <tr key={index}>
              <td className="">{index + 1}</td>
              <td className="">{item.id_user}</td>
              <td className="">{item.nama_user}</td>
              <td className="">{item.email_user}</td>
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
                    if (
                      window.confirm(
                        "Are you sure want to delete this product?"
                      )
                    ) {
                      this.handleDelete(index);
                    }
                  }}
                >
                  <iconify-icon icon="oi:trash" style={{ marginLeft: 2 }} />
                </button>
              </td>
            </tr>
          );
        }
      });
    } catch (e) {
      alert(e.message);
    }
  };

  handleDelete = async (index) => {
    const { products } = this.props;
    const newProducts = [...products];
    newProducts.splice(index, 1);

    try {
      await axios.delete(
        process.env.REACT_APP_BASE_API + `/produk/${products[index].id}`
      );
      this.setState({ products: newProducts });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
        <div className="card-body">
          <div className=" scrollable-table" style={{ overflowX: "hidden" }}>
            <table
              id="table"
              className="table align-items-center justify-content-center mb-0"
            >
              <thead>
                <tr>
                  <th className="">No</th>
                  <th className="">ID</th>
                  <th className="">Name</th>
                  <th className="">Email</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>{this.showTable()}</tbody>
            </table>
          </div>
        </div>
        <div
          className="modal fade bd-example-modal-sm2"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <h5 className="modal-title">Update Cashier</h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="nameCashier1">Cashier Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id="nameCashier1"
                    aria-describedby="name"
                    placeholder="Input Cashier Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="examplHelp"
                    placeholder="Input Email Address"
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
                  type="button"
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
          </div>
        </div>
      </>
    );
  }
}

export default Table;
