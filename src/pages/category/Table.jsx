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
import EditModal from "./EditModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/toast/Toast";

import $ from "jquery";
import { Modal } from "bootstrap";
class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            pageLength: 7,
            scrollY: "430px",
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
                init: function(api, node, config) {
                  $(node).hover(
                    function() {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function() {
                      // efek ketika mouse meninggalkan tombol
                      $(this).css({
                        backgroundColor: "white",
                        color: "black"
                      });
                    }
                  );
                }
                ,action: function (e, dt, button, config) {
                  var data = dt.buttons.exportData();
                  var headers = dt
                    .columns()
                    .header()
                    .to$()
                    .map(function () {
                      return this.innerText;
                    })
                    .get();
                  var excludedColumns = [2];
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
                        doc.text("Category Management POS", 40, 30);
                      },
                    }
                  );
                  doc.save("Category Management POS.pdf");
                },
              },
              {
                extend: "csv",
                text: "Excel",
                exportOptions: {
                  columns: [0, 1],
                  modifier: {
                    selected: false,
                  },
                },
                className: "btn",
                init: function(api, node, config) {
                  $(node).hover(
                    function() {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function() {
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
                  columns: [0, 1],
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
                init: function(api, node, config) {
                  $(node).hover(
                    function() {
                      // efek hover saat tombol dihover
                      $(this).css({
                        borderRadius: '10px',
                        backgroundColor: "#5B7CFD",
                        color: "white",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
                      });
                    },
                    function() {
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
              { width: "10%" },
              { width: "70%" },
              { width: "20%" },
            ],
          });
        }, 1000);
      });
    }
  }

  showTable = () => {
    try {
      return this.props.category.map((item, index) => {
        return (
          <tr key={index}>
            <td className="">{index + 1}</td>
            <td className="">{item.nama_kategori}</td>
            <td>
              <button
                className="btn table-actions-button bg-transparent border drop-shadow"
                data-toggle="modal"
                data-target={`#editModal${item.kategori_id}`}
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
                      "Are you sure want to delete this category?"
                    )
                  ) {
                    this.handleDelete(item.kategori_id);
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

  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/kategori/${id}`, {
      headers: {
        'api_key': `e3fd6b146fcb65f7419e3531a0a84f4d700b8210`
      }
    })
      .then(response => {
        console.log(response.data);
        Toast({ message: "Category Deleted Succesfully!", type: "success" });
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>

        <div class="card-body mt-0 pt-1">
          <div className=" scrollable-table" style={{ overflowX: "hidden" }}>
            <table
              id="table"
              className="table align-items-center justify-content-center mb-0"
            >
              <thead>
                <tr>
                  <th className="">No</th>
                  <th className="">Name</th>
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
