import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import OrderList from "../../components/content/orderList";
import { useEffect, useState } from "react";
import axios from "axios";

const Cashier = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [kodeProduk, setKodeProduk] = useState("");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = "POS | Transaction";
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );

    return () => {
      document.body.classList.remove(
        "hold-transition",
        "light-mode",
        "sidebar-mini",
        "layout-fixed",
        "layout-navbar-fixed",
        "layout-footer-fixed",
        "sidebar-mini-xs"
      );
    };
  }, []);

  const handleTambahProduk = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_API + `/produk/${kodeProduk}`,
        {
          headers: {
            api_key: "e3fd6b146fcb65f7419e3531a0a84f4d700b8210",
          },
        }
      );

      if (response.data) {
        const produk = response.data;
        const produkSudahAda = cart.find(
          (p) => p.kode_produk === produk.data.kode_produk
        );
        // console.log(produkSudahAda);
        if (produkSudahAda) {
          // Jika produk sudah ada di dalam cart, tambahkan jumlahnya
          setCart(
            cart.map((p) => {
              if (p.kode_produk === produk.data.kode_produk) {
                return {
                  ...p,
                  jumlah: p.jumlah + 1,
                };
              }
              return p;
            })
          );
        } else {
          // Jika produk belum ada di dalam cart, tambahkan produk baru
          setCart([
            ...cart,
            {
              id: produk.data.produk_id,
              kode_produk: produk.data.kode_produk,
              nama: produk.data.nama_produk,
              harga: produk.data.harga_jual,
              expired: produk.data.expired_date,
              gambar: produk.data.gambar,
              jumlah: 1,
            },
          ]);
        }

        // Kosongkan input kode_produk setelah berhasil menambahkan produk ke cart
        setKodeProduk("");
      } else {
        alert("Produk tidak ditemukan");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan pada server");
    }
  };
  // Hitung total harga produk yang ada di cart
  useEffect(() => {
    let total = 0;
    cart.forEach((p) => {
      total += p.harga * p.jumlah;
    });
    setTotal(total);
  }, [cart]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      handleTambahProduk();
    }
  };

  // console.log(total);
  return (
    <>
      <div className="wrapper" style={{ overflow: "hidden" }}>
        <Header />
        <Sidebar activePage="transaction" />
        <div className="content-wrapper row">
          <section
            className="content col"
            style={{ height: "calc (100vh - 90px)" }}
          >
            <section className="container-fluid">
              <div
                className="col-lg-12"
                style={{
                  display: "grid",
                  gridTemplateRows: "calc(100vh - 339px) auto",
                }}
              >
                <div
                  className="card"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 10,
                    height: "auto",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <input
                      autoFocus
                      type="search"
                      value={kodeProduk}
                      onChange={(e) => setKodeProduk(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="input kode produk"
                      style={{
                        borderRadius: "10px",
                        margin: "10px",
                        width: "25%",
                        padding: "3px",
                        textIndent: "5px",
                        fontSize: "10pt",
                      }}
                    />
                    <button
                      class="btn bg-transparent table-category-button"
                      style={{ marginRight: "15px", marginLeft: "0px" }}
                      onClick={handleTambahProduk}
                    >
                      <iconify-icon icon="oi:plus"></iconify-icon>
                    </button>
                  </div>
                  <div
                    className="card-body"
                    style={{
                      padding: "0px 24px",
                      margin: "10px",
                      overflowY: "scroll",
                      height: "100%",
                    }}
                  >
                    <table className="table">
                      <thead
                        style={{
                          position: "sticky",
                          top: "0",
                          backgroundColor: "#fff",
                        }}
                      >
                        <tr className="text-muted fs-10">
                          <td scope="col">No</td>
                          <td scope="col">Photo</td>
                          <td scope="col">Product Name</td>
                          <td scope="col">Expire Date</td>
                          <td scope="col">Price</td>
                          <td scope="col">Quantity</td>
                          <td scope="col">Sub Total</td>
                          {/* <td scope="col">Actions</td> */}
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((product, i) => (
                          <tr className="fs-10">
                            <td scope="row">{i + 1}</td>
                            <td>
                              <img
                                className="table-product-img"
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}${product.gambar}`}
                                alt=""
                              />
                            </td>
                            <td>{product.nama}</td>
                            <td>{product.expired}</td>
                            <td>{product.harga}</td>
                            <td>{product.jumlah}</td>
                            <td>{product.harga * product.jumlah}</td>
                            {/* <td>
                              <button className="btn table-actions-button bg-transparent">
                                <iconify-icon icon="mdi:minus-circle-outline" style={{ color: 'black', width: '20' }}></iconify-icon>
                              </button>
                              <button className="btn table-actions-button bg-transparent">
                                <iconify-icon icon="mdi:plus-circle-outline" style={{ color: 'black', width: '20' }}></iconify-icon>
                              </button>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <OrderList total={total} cart={cart} />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cashier;
