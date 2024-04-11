import React from 'react'
import "./Navbar.css"
import nav_logo from "../../assets/logo.png"
import nav_profile from '../../assets/nav-profile.svg'


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={nav_logo} alt="" />
        <p>The Weavers Thread(Admin Panel)</p>
      </div>

      <img src={nav_profile} alt="" className="nav-profile" />
    </div>
  );
}
