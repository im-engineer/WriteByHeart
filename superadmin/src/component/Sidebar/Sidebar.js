import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProtectedOutlet from '../../Protected';
import Dashboard from "../Dashboard/Dashboard"
import Writer from "../Writer/Writer";


function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link className="nav-link" to={"/dashboard"}>
          <i className="fa-solid fa-dashboard"></i>
        </Link>
        <Link className="nav-link" to={"/writer/data"}>
          <i className="fa-solid fa-user-edit"></i>
        </Link>
      </div>
      <div className="content">
        <Routes>
          <Route element={<ProtectedOutlet />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path = "/writer/data" element={<Writer/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Sidebar;
