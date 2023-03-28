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
class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            scrollY: "210px",
            scrollCollapse: true,
            paging: false,
            processing: true,
            dom: "<'row'<'col-md-6'B><'col-md-6'f>>" +
                "<'row'<'col-md-12't>>" +
                "<'row'<'col-md-6'l><'col-md-6'p>>",

            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pdfHtml5",
                text: "PDF",
                
                // exportOptions: {
                //   columns: [0, 2, 3, 4, 5, 6, 7],
                //   exclude: [1, 8]
                // },
                // customize: function (doc) {
                //   doc.content[1].table.widths = Array(
                //     doc.content[1].table.body[0].length + 1
                //   ).join('*').split('');
                // },
                orientation: "landscape",
                pageSize: "A4",
                titleAttr: "PDF",
                className: "btn btn-secondary bg-secondary",
                style: {
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "normal",
                  fontSize: "smaller",
                  width: 100,
                  height: 35,
                  border: "none",
                },
                action: function (e, dt, button, config) {
                  var data = dt.buttons.exportData();
                  var headers = dt.columns().header().to$().map(function () {
                      return this.innerText;
                  }).get();
                  var excludedColumns = [1, 8];
                  var columnIndexes = headers
                      .map(function(column, index) { 
                          if (excludedColumns.includes(index)) {
                              return null;
                          }
                          return index;
                      })
                      .filter(function(columnIndex) {
                          return columnIndex !== null;
                      });
                  data = JSON.parse(JSON.stringify(data).replace(/<[^>]*>/g, ''));
                  var doc = new jsPDF('l', 'pt', this.pageSize);
                  doc.autoTable(
                      columnIndexes.map(function(columnIndex) {
                          return headers[columnIndex];
                      }), 
                      data.body.map(function(row) {
                          return columnIndexes.map(function(columnIndex) {
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
                className: "btn btn-secondary bg-secondary",
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
                className: "btn btn-secondary bg-secondary",
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
      return this.props.products.map((item, index) => {
        return (
          <tr>
            <td className="">{index + 1}</td>
            <td className="">
              <img class="table-product-img" src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.gambar}`} alt="product" />
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

  render() {
    return (
      <div class="card-body">
        <div className=" scrollable-table" style={{ overflowY: "hidden" }}>
          <table
            id="table"
            className="table align-items-center justify-content-center mb-0"
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
    );
  }
}

export default Table;
