import React, { Component } from 'react'
import BarChart from './Chart'
import Chart from 'chart.js/auto';
// import './Dashboard.css'

const Content = () => {
        return (
            <div className="content-wrapper row">
            {/* Main content */}
            <section className="content col">
                <div className="container-fluid">
                {/* Info boxes */}
                <div className="row">
                    {/* Revenue */}
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="small-box bg-light drop-shadow flex-row">
                        <div className="dropdown d-flex flex-row-reverse">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Today
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">This Week</a>
                            <a className="dropdown-item" href="#">This Month</a>
                            <a className="dropdown-item" href="#">This Year</a>
                        </div>
                        </div>
                        <div className="d-flex flex-row">
                        <img className="top-card-icon" src="./docs/assets/img/revenue_icon.png" alt />
                        <div className="top-card-text">
                            <span className="up-down">▲ 100%</span>
                            <span className="card-amount">IDR 4.500.000,00</span>
                            <span className="card-desc">TOTAL REVENUE</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.revenue */}
                    {/* Profit */}
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="small-box bg-light drop-shadow flex-row" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="dropdown d-flex flex-row-reverse">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Today
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">This Week</a>
                            <a className="dropdown-item" href="#">This Month</a>
                            <a className="dropdown-item" href="#">This Year</a>
                        </div>
                        </div>
                        <div className="d-flex flex-row">
                        <img className="top-card-icon" src="./docs/assets/img/profit_icon.png" alt />
                        <div className="top-card-text">
                            <span className="up-down">▲ 100%</span>
                            <span className="card-amount">IDR 520.000,00</span>
                            <span className="card-desc">TOTAL PROFIT</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.profit */}
                    {/* fix for small devices only */}
                    <div className="clearfix hidden-md-up" />
                    {/* Employee */}
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="small-box bg-light drop-shadow flex-row mb-3" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="d-flex flex-row">
                        <img className="top-card-icon" src="./docs/assets/img/profile-circle.png" alt />
                        <div className="top-card-text">
                            <span className="card-amount">3</span>
                            <span className="card-desc">EMPLOYEES</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.employee */}
                    {/* Member */}
                    <div className="col-12 col-sm-6 col-md-3">
                    <div className="small-box bg-light drop-shadow flex-row mb-3" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                        <div className="d-flex flex-row">
                        <img className="top-card-icon" src="./docs/assets/img/member_icon.png" alt />
                        <div className="top-card-text">
                            <span className="card-amount">5</span>
                            <span className="card-desc">MEMBERS</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.member */}
                </div>
                {/* Main */}
                <div className="row content-card">
                    {/* Stastitic best selling */}
                    <div className="col-lg-6">
                    <div className="card drop-shadow" style={{borderRadius: 10, height: 390}}>
                        <div className="card-header">
                        <h5 className="card-title">Statistic of Best Selling</h5>
                        <div className="card-tools">
                            <div className="btn-group">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bg-white border-0" type="button" data-toggle="dropdown">
                                Today
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#" onclick="updateGraph('data1')">Today</a>
                                <a className="dropdown-item" href="#" onclick="updateGraph('data2')">This week</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className="row">
                                <div className="chart mr-4 ml-4" style={{height: 275, width: 550}}>
                                {/* Sales Chart Canvas */}
                                    <BarChart />
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.card */}
                    </div>
                    {/* Stock Alerts */}
                    <div className="col-lg-6">
                    <div className="card" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 0, height: 390}}>
                        <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title">Stock Alerts</h3>
                        </div>
                        </div>
                        <div className="card-body pl-4 pr-4 mr-4 ml-4" style={{marginBottom: 20, overflowX: 'scroll'}}>
                        <div className="card-deck">
                            <div className="card-dash float-right mb-2" style={{minWidth: 200, maxWidth: 200, height: 250, fontSize: 'small', backgroundColor: '#F6F6F6', borderRadius: 20}}>
                            <img className="card-img-top" src="dist/img/susu.png" alt="Product Image" />
                            <div className="card-body p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', borderRadius: 10}}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="stock" style={{fontWeight: 'normal'}}>
                                10/100
                                </div>
                                <div className="details mt-3" style={{textAlign: 'center'}}>
                                <a href="#" className="d-block" style={{color: 'grey', fontWeight: 'lighter'}}>Go to Product Details</a>
                                </div>
                            </div> 
                            </div> 
                            <div className="card-dash float-right mb-2" style={{minWidth: 200, maxWidth: 200, height: 250, fontSize: 'small', backgroundColor: '#F6F6F6', borderRadius: 20}}>
                            <img className="card-img-top" src="dist/img/susu.png" alt="Product Image" />
                            <div className="card-body p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', borderRadius: 10}}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="stock" style={{fontWeight: 'normal'}}>
                                10/100
                                </div>
                                <div className="details mt-3" style={{textAlign: 'center'}}>
                                <a href="#" className="d-block" style={{color: 'grey', fontWeight: 'lighter'}}>Go to Product Details</a>
                                </div>
                            </div> 
                            </div> 
                            <div className="card-dash float-right mb-2" style={{minWidth: 200, maxWidth: 200, height: 250, fontSize: 'small', backgroundColor: '#F6F6F6', borderRadius: 20}}>
                            <img className="card-img-top" src="dist/img/susu.png" alt="Product Image" />
                            <div className="card-body p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', borderRadius: 10}}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="stock" style={{fontWeight: 'normal'}}>
                                10/100
                                </div>
                                <div className="details mt-3" style={{textAlign: 'center'}}>
                                <a href="#" className="d-block" style={{color: 'grey', fontWeight: 'lighter'}}>Go to Product Details</a>
                                </div>
                            </div> 
                            </div> 
                            <div className="card-dash float-right mb-2" style={{minWidth: 200, maxWidth: 200, height: 250, fontSize: 'small', backgroundColor: '#F6F6F6', borderRadius: 20}}>
                            <img className="card-img-top" src="dist/img/susu.png" alt="Product Image" />
                            <div className="card-body p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', borderRadius: 10}}>
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="stock" style={{fontWeight: 'normal'}}>
                                10/100
                                </div>
                                <div className="details mt-3" style={{textAlign: 'center'}}>
                                <a href="#" className="d-block" style={{color: 'grey', fontWeight: 'lighter'}}>Go to Product Details</a>
                                </div>
                            </div> 
                            </div>  
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Transaction History */}
                    <div className="col-lg-6">
                    <div className="card" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, height: 390}}>
                        <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title">Today's Transaction</h3>
                        </div>
                        </div>
                        <div className="card-body" style={{padding: '0px 24px'}}>
                        <table className="table">
                            <thead>
                            <tr>
                                <td scope="col">Tanggal</td>
                                <td scope="col">Sub Total</td>
                                <td scope="col">Total</td>
                                <td scope="col">Payment</td>
                                <td scope="col">Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td scope="row">02/02/2023</td>
                                <td>IDR 55,000.00</td>
                                <td>IDR 60,500.00</td>
                                <td>Cash</td>
                                <td>
                                <button className="btn fas fa-eye" type="button" data-toggle="modal" data-target="#invoiceModal">
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">02/02/2023</td>
                                <td>IDR 55,000.00</td>
                                <td>IDR 60,500.00</td>
                                <td>Cash</td>
                                <td>
                                <button className="btn fas fa-eye" type="button" data-toggle="modal" data-target="#invoiceModal">
                                </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    {/* Expire Soon */}
                    <div className="col-lg-6">
                    <div className="card" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, height: 390}}>
                        <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title">Expire Soon</h3>
                        </div>
                        </div>
                        <div className="card-body pl-4 pr-4 mr-4 ml-4" style={{marginBottom: 20, overflowX: 'scroll'}}>
                        <div className="card-deck">
                            <div className="card-columns">
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            <div className="card-susu float-right mb-2">
                                <img src="dist/img/susu.png" alt="Image" />
                                <div className="card-text mt-1 p-0 ml-1" style={{fontWeight: 'bold'}}>Susu Ultra Milk Coklat 200ml
                                <div className="progress" style={{height: 6, width: 162, backgroundColor: 'red', marginTop: 35, borderRadius: 10}}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="row" style={{marginBottom: 5, fontWeight: 'normal', fontSize: 'small'}}>
                                    <div className="col-md-6">
                                    9 days left
                                    </div>
                                    <div className="col-md-6 text-right">
                                    10/02/2023
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /.row */}
                </div>{/*/. container-fluid */}
                </div></section>
            {/* /.content */}
            </div>

        )
    }
export default Content
