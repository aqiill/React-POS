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

const data =[
  {
    "gambar" : "../dist/img/susu.png",
    "nama_produk" : "Susu Ultra Milk Coklat 200ml",
    "expired_date" : "22/02/2023",
    "stok" : "1",
    "harga_modal" : "IDR 25,500.00",
    "harga_jual" : "IDR 25,500.00"
  },
  {
    "gambar" : "../dist/img/susu.png",
    "nama_produk" : "Susu Ultra Milk Coklat 200ml",
    "expired_date" : "22/02/2023",
    "stok" : "1",
    "harga_modal" : "IDR 25,500.00",
    "harga_jual" : "IDR 25,500.00"
  },
  {
    "gambar" : "../dist/img/susu.png",
    "nama_produk" : "Susu Ultra Milk Coklat 200ml",
    "expired_date" : "22/02/2023",
    "stok" : "1",
    "harga_modal" : "IDR 25,500.00",
    "harga_jual" : "IDR 25,500.00"
  },
  {
    "gambar" : "../dist/img/susu.png",
    "nama_produk" : "Susu Ultra Milk Coklat 200ml",
    "expired_date" : "22/02/2023",
    "stok" : "1",
    "harga_modal" : "IDR 25,500.00",
    "harga_jual" : "IDR 25,500.00"
  }
]

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
      return data.map((item, index) => {
        return (
          <tr>
            <td className="">{index + 1}</td>
            <td className="">
              <img class="table-product-img" src={item.gambar} alt="product" />
            </td>
            <td className="">{item.nama_produk}</td>
            <td className="">{item.expired_date}</td>
            <td className="">{item.stok}</td>
            <td className="">{item.harga_modal}</td>
            <td className="">{item.harga_jual}</td>
            <td>
              <button className="btn table-actions-button bg-transparent">
                <iconify-icon icon="mdi:minus-circle-outline" style={{color: 'black'}} width={20} />
              </button>
              <button className="btn table-actions-button bg-transparent">
                <iconify-icon icon="mdi:plus-circle-outline" style={{color: 'black'}} width={20} />
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
