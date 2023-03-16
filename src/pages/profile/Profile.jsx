import React from 'react'
import Header from '../../components/header/Header'
import { useEffect } from "react";
import MenuProfile from '../../components/menu/MenuProfile';

const Profile = () => {
    useEffect(() => {
        document.title = "POS | Profile";
        document.body.classList.add( 
          "hold-transition",
          "light-mode",
          "sidebar-mini",
          "layout-fixed",
          "layout-navbar-fixed",
          "layout-footer-fixed",
          "sidebar-mini-xs"
        );
        document.body.style.overflowX = "hidden";
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
  return (
    <div className="wrapper">
        <Header/>
        <MenuProfile />
        <div className="content-wrapper mt-0 pt-0 mb-0 pb-0" style={{backgroundColor: '#E7EEF8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
        <div className="box">
            <div className="card" style={{height: 755, width: 750}}>
            <div className="card-body">
                <div className="profile-pic mt-3" style={{marginLeft: 280}}>
                <img src="https://via.placeholder.com/150" alt="Profile Picture" />
                <input type="file" className="file-upload" />
                </div>
                <div className="form-group" style={{marginTop: 56}}>
                <label className="font-weight-light" htmlFor="name" style={{color: 'grey'}}>Full Name</label>
                <div className="input-group">
                    <input type="text" className="form-control-plaintext" id="name" defaultValue="Lamda Ganteng" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', fontSize: 'larger'}} readOnly />
                    <button className="btn btn-secondary input-group-text" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', backgroundColor: 'rgba(1, 1, 1, 0)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0}} type="button" id="editButton">
                    <i className="bi bi-pencil-fill" style={{color: 'black'}} data-target="#name" />
                    </button>
                </div>
                <label className="font-weight-light" htmlFor="role" style={{color: 'grey', marginTop: 45}}>Role</label>
                <input type="text" className="form-control-plaintext" id="role" defaultValue="Owner" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', fontSize: 'larger'}} readOnly />
                <label className="font-weight-light" htmlFor="mail" style={{color: 'grey', marginTop: 45}}>Email</label>
                <input type="email" className="form-control-plaintext" id="mail" defaultValue="lamda@gmail.com" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', fontSize: 'larger'}} readOnly />
                <label className="font-weight-light" htmlFor="pw" style={{color: 'grey', marginTop: 45}}>Password</label>
                <div className="input-group">
                    <input type="password" className="form-control-plaintext" id="pw" defaultValue="Lamda Ganteng" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', fontSize: 'larger'}} readOnly />
                    <button className="btn btn-secondary input-group-text" style={{borderBottom: '3px solid rgba(211, 211, 211, 0.8)', backgroundColor: 'rgba(1, 1, 1, 0)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0}} type="button" id="editButton2">
                    <a href="/pages/profileEditpw.html">
                        <i className="bi bi-pencil-fill" style={{color: 'black'}} />
                    </a>
                    </button>
                </div>
                </div>
            </div>
            </div> 
        </div>
        </div>
    </div>

  )
}

export default Profile