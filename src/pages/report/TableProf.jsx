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

import $ from "jquery";

class TableProf extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#tableProf").DataTable({
            destroy: true,
            pageLength: 10,
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
                  var excludedColumns = [];
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
                        doc.text('Report Profit POS', 40, 30);
                      },
                    }
                  );
                  doc.save('Report Profit POS.pdf');
                },
              },
              {
                extend: "csv",
                text: "Excel",
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
          });
        }, 1000);
      });
    }
  }

  showTable = () => {
    try {
      return this.props.profit.map((item, index) => {
        return (
          <tr>
            <td className="">{index + 1}</td>
            <td className="">{item.nama_produk}</td>
            <td className="">{item.total_terjual}</td>
            <td className="">{item.keuntungan}</td>
          </tr>
        );
      });
    } catch (e) {
      alert(e.message);
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
      <div class="card-body" style={{ padding: "0px 24px" }}>
        <div className=" scrollable-table" style={{ overflowX: "hidden" }}>
          <table
            id="tableProf"
            className="table align-items-center justify-content-center mb-0"
          >
            <thead>
              <tr>
                <th className="">No</th>
                <th className="">Product Name</th>
                <th className="">Total Sales</th>
                <th className="">Total Profit</th>
              </tr>
            </thead>
            <tbody>{this.showTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableProf;
