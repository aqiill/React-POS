import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import React, { Component } from "react";

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
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "copy",
                className: "btn btn-secondary",
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
      return this.props.categories.map((item, index) => {
        return (
          <tr>
            <td className="">{index + 1}</td>
            <td className="">{item.nama_kategori}</td>
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
      <div className="card-body">
        <div className=" scrollable-table" style={{ overflowY: "hidden" }}>
          <table
            id="table"
            className="table align-items-center justify-content-center mb-0"
          >
            <thead>
              <tr>
                <th className="">No</th>
                <th className="">Nama</th>
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
