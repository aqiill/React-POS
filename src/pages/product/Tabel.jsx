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


import $ from "jquery";
import React, { Component } from "react";

class Table extends Component {
  componentDidMount() {
    if (!$.fn.DataTable.isDataTable("#myTable")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            destroy: true,
            //   pagingType: "full_numbers",
            //   pageLength: 20,
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
                
                exportOptions: {
                  columns: [0, 1, 2, 3, 4, 5, 6, 7],
                },
                customize: function (doc) {
                  doc.content[1].table.widths = Array(
                    doc.content[1].table.body[0].length + 1
                  )
                    .join("*")
                    .split("");
                },
                orientation: "landscape",
                pageSize: "A4",
                title: "Contoh PDF",
                filename: "contoh.pdf",
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
              },
              {
                extend: "csv",
                className: "btn btn-secondary bg-secondary",
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
