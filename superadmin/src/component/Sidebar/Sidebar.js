import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <Link class="nav-link" to={"/dashboard"}>
        <i class="fa-solid fa-dashboard"></i>
      </Link>
    </div>
  );
}

export default Sidebar;
