import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/-logo.png";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <link></link>
        <a to="/">Access</a>
        <a to="/">Join</a>
      </div>
    </div>
  );
}

export default Navbar;
