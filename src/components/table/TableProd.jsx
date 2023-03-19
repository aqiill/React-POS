import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import { Component } from "react";

const names = [
  {
    "photo" : "../dist/img/susu.png",
    "productName" : "Susu Ultra Milk Coklat 200ml",
    "brand" : "Ultra Jaya",
    "category" : "Milk",
    "expireDate" : "22/02/2023",
    "stock" : 500,
    "capitalPrice" : "IDR 4,500.00",
    "price" : "IDR 25,500.00",
    // "actions" :
  },
  {
    "photo" : "../dist/img/susu.png",
    "productName" : "aSusu Ultra Milk Coklat 200ml",
    "brand" : "Ultra Jaya",
    "category" : "Milk",
    "expireDate" : "22/02/2023",
    "stock" : 500,
    "capitalPrice" : "IDR 4,500.00",
    "price" : "IDR 25,500.00",
    // "actions" :
  },
  {
    "photo" : "../dist/img/susu.png",
    "productName" : "bSusu Ultra Milk Coklat 200ml",
    "brand" : "Ultra Jaya",
    "category" : "Milk",
    "expireDate" : "22/02/2023",
    "stock" : 500,
    "capitalPrice" : "IDR 4,500.00",
    "price" : "IDR 25,500.00",
    // "actions" :
  },
  {
    "photo" : "../dist/img/susu.png",
    "productName" : "bSusu Ultra Milk Coklat 200ml",
    "brand" : "Ultra Jaya",
    "category" : "Milk",
    "expireDate" : "22/02/2023",
    "stock" : 500,
    "capitalPrice" : "IDR 4,500.00",
    "price" : "IDR 25,500.00",
    // "actions" :
  }
]


class Table extends Component {

  componentDidMount(){
 if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
              setTimeout(function () {
                $("#table").DataTable({
                  destroy: true,
                  pagingType: "full_numbers",
                  pageLength: 20,
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
                      }
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
          return names.map((item, index) => {
            return (
                <tr>
                <td className="text-muted fs-10">{index +1}</td>
                <td className="text-muted fs-10"><img class="table-product-img" src={item.photo} alt="product" /></td>
                <td className="text-muted fs-10">{item.productName}</td>
                <td className="text-muted fs-10">{item.brand}</td>
                <td className="text-muted fs-10">{item.category}</td>
                <td className="text-muted fs-10">{item.expireDate}</td>
                <td className="text-muted fs-10">{item.stock}</td>
                <td className="text-muted fs-10">{item.capitalPrice}</td>
                <td className="text-muted fs-10">{item.price}</td>
<td></td>
</tr>
                );
          });
        } catch (e) {
          alert(e.message);
        }
      };

  render(){
  return(
  <div class="card-body" >
    <div className=" scrollable-table" style={{maxHeight: 300, overflowY: 'auto'}}>
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
              <tr>
                <th className="text-muted fs-10">No</th>
                <th className="text-muted fs-10">Photo</th>
                <th className="text-muted fs-10">Product Name</th>
                <th className="text-muted fs-10">Brand</th>
                <th className="text-muted fs-10">Category</th>
                <th className="text-muted fs-10">Expire Date</th>
                <th className="text-muted fs-10">Stock</th>
                <th className="text-muted fs-10">Capital Price</th>
                <th className="text-muted fs-10">Price</th>
                <th></th>
              </tr>
           </thead>
           <tbody>
                   {this.showTable()}
           </tbody>
       </table>
    </div>
  </div>
  )}
}

export default Table;