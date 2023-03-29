import Header from "../../components/header/Header";
import SidebarCashier from "../../components/sidebar/SidebarCashier";
import OrderList from "../../components/content/orderList";
import { useEffect, useState } from "react";

const Cashier = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    document.title = "POS | Cashier";
    document.body.classList.add("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");

    return () => {
      document.body.classList.remove("hold-transition", "light-mode", "sidebar-mini", "layout-fixed", "layout-navbar-fixed", "layout-footer-fixed", "sidebar-mini-xs");
    };
  }, []);
  return (
    <>
      <div className="wrapper" style={{overflow: 'hidden'}}>
        <Header />
        <SidebarCashier activePage="Cashier" />
        <div className="content-wrapper row">
          <section className="content col">
            <section className="container-fluid">
              <div className="col-lg-12">
              <div
                    className="card"
                    style={{
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: 10,
                      height: "auto",
                    }}
                  >
                  <div style={{display:'flex', justifyContent: 'flex-end'}}>
                    <input type="search" placeholder="input kode produk" style={{borderRadius: '10px', margin: '10px', width: '25%', padding: '3px'}}/>
                    <button class="btn bg-transparent table-category-button" style={{marginRight: '15px', marginLeft: '0px'}}>
                      <iconify-icon icon="oi:plus"></iconify-icon>
                    </button>
                  </div>
                  <div className="card-body" style={{padding: '0px 24px', margin:'10px', overflowY: 'scroll', minHeight: '300px', maxHeight: '300px'}}>
                    <table className="table">
                      <thead style={{position: 'sticky', top: '0', backgroundColor: '#fff'}}>
                        <tr className="text-muted fs-10">
                          <td scope="col">No</td>
                          <td scope="col">Photo</td>
                          <td scope="col">Product Name</td>
                          <td scope="col">Expire Date</td>
                          <td scope="col">Price</td>
                          <td scope="col">Quantity</td>
                          <td scope="col">Sub Total</td>
                          <td scope="col">Actions</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-10">
                          <td scope="row">1</td>
                          <td>
                            <img className="table-product-img" src="../dist/img/susu.png" alt=""/>
                          </td>
                          <td>Susu Ultra Milk Coklat 200ml</td>
                          <td>22/02/2023</td>
                          <td>IDR 25,500.00</td>
                          <td>1</td>
                          <td>IDR 25,500.00</td>
                          <td>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:minus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:plus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                          </td>
                        </tr>
                        <tr className="fs-10">
                          <td scope="row">1</td>
                          <td>
                            <img className="table-product-img" src="../dist/img/susu.png" alt=""/>
                          </td>
                          <td>Susu Ultra Milk Coklat 200ml</td>
                          <td>22/02/2023</td>
                          <td>IDR 25,500.00</td>
                          <td>1</td>
                          <td>IDR 25,500.00</td>
                          <td>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:minus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:plus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                          </td>
                        </tr>
                        <tr className="fs-10">
                          <td scope="row">1</td>
                          <td>
                            <img className="table-product-img" src="../dist/img/susu.png" alt=""/>
                          </td>
                          <td>Susu Ultra Milk Coklat 200ml</td>
                          <td>22/02/2023</td>
                          <td>IDR 25,500.00</td>
                          <td>1</td>
                          <td>IDR 25,500.00</td>
                          <td>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:minus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                            <button className="btn table-actions-button bg-transparent">
                              <iconify-icon icon="mdi:plus-circle-outline" style={{color: 'black', width: '20'}}></iconify-icon>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>  
                </div>
                <OrderList />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cashier;
