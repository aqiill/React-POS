import { useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function Category() {
const [] = useState(false);

const handleSave = () => {
//..
}

const destroy = () => {
  //..
  }
 
  useEffect(() => {
    document.title = "Category | POS";
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );
    document.body.style.background = "#e7eef8";
    

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
      document.body.style.background = null;
    };
  }, []);
  
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar activePage="category" />
        <div className="content-wrapper row">
        <section className="content col">
        <div className="container-fluid">    
        <div className="row content-card">
          <div className="col-lg-12">
            <div className="card"style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px',height: '755px'}}>
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <div className="add-export" style={{display: 'flex'}}>
                    <button className="btn bg-transparent table-category-button" data-toggle="modal" data-target=".bd-example-modal-sm">
                      <iconify-icon icon="oi:plus"></iconify-icon>
                      Add Category
                    </button>
                    <div className="modal fade bd-example-modal-sm" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                          <div className="modal-header" style={{border: 'none'}}>
                            <h5 className="modal-title">Add Category</h5>
                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <label htmlFor="namecategory1">Category Name</label>
                              <input type="name" className="form-control" id="namecategory1" aria-describedby="name" placeholder="Input Category Name"/>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-between" style={{border: 'none'}}>
                            <button type="button" className="btn" data-dismiss="modal" style={{backgroundColor: 'white', color: 'black', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px', border: 'none'}}>Cancel</button>
                            <button type="button" className="btn ms-auto" style={{backgroundColor: '#5B7CFD', color: 'white', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px'}} id="saveBtn" onClick={() => handleSave()} data-dismiss="modal" >Add Items</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn bg-transparent table-category-button" onClick={() => window.print()}>
                      <iconify-icon icon="oi:share-boxed"></iconify-icon>
                      Export Category</button>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{padding: '0px 24px'}}>
                <table className="table" id="myTable" data-page-length="10" style={{width: '100%'}}>
                  <thead>
                    <tr className="text-muted fs-10">
                      <td scope="col" style={{width: '10%'}}>No</td>
                      <td scope="col" style={{width: '80%'}}>Category Name</td>
                      <td scope="col" style= {{width: '10%'}}>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fs-10">
                      <td scope="row">1</td>
                      <td>Food</td>
                      <td>
                        <button className="btn table-actions-button bg-transparent border drop-shadow"data-toggle="modal" data-target=".bd-example-modal-sm2" style={{borderRadius: '50%'}} >
                          <iconify-icon icon="oi:pencil"></iconify-icon>
                        </button>
                        <div class="modal fade bd-example-modal-sm2" id="myModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-sm" role="document" >
                            <div class="modal-content">
                              <div class="modal-header" style={{border: 'none'}}>
                                <h5 class="modal-title">Update Category</h5>
                              </div>
                              <div class="modal-body">
                                <div class="form-group">
                                  <label for="namecategory1">Category Name</label>
                                  <input type="name" class="form-control" id="namecategory1" aria-describedby="name" placeholder="Input Category Name" value="Category"/>
                                </div>
                              </div>
                              <div class="modal-footer d-flex justify-content-between"style={{border: 'none'}}>
                                <button type="button" class="btn" data-dismiss="modal" style={{backgroundColor: 'white', color: 'black', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px', border: 'none'}}>Cancel</button>
                                <button type="button" class="btn ms-auto" style={{backgroundColor: '#5B7CFD', color: 'white', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px'}} id="saveBtn" onClick={handleSave()} data-dismiss="modal">Update</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn table-actions-button bg-transparent border drop-shadow ml-2 delete-row" data-toggle="modal" data-target=".delete" style={{borderRadius: '50%'}}>
                          <iconify-icon icon="oi:trash"></iconify-icon>
                        </button>
                        <div class="modal delete"tabindex="-1" role="dialog" id="confirmModal">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header"style={{border: 'none'}}>
                                <h5 class="modal-title">Delete Category</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p>Are you sure want to delete this category ?</p>
                              </div>
                              <div class="modal-footer d-flex justify-content-between"style={{border: 'none'}}>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"style={{backgroundColor: 'white', color: 'black', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px', border: 'none'}}>Cancel</button>
                                <button type="button" class="btn btn-danger ms-auto" id="deleteBtn"  style={{backgroundColor: '#D94343', color: 'white', fontWeight: 'normal', fontSize: 'smaller', width: '100px', height: '35px'}} onClick={destroy()} data-dismiss="modal">Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer"  style={{backgroundColor: 'white', borderRadius:'10px', display: 'flex', justifyContent: 'center'}} >
                <ul className="pagination" id="pagination"></ul>
              </div>
            </div>
          </div>
          </div>
        </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default Category;