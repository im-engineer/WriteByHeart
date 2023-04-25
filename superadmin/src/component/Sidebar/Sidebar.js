import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProtectedOutlet from '../../Protected';
import Dashboard from "../Dashboard/Dashboard"


function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link class="nav-link" to={"/dashboard"}>
          <i class="fa-solid fa-dashboard"></i>
        </Link>
      </div>
      <div class="content">
        <Routes>
          <Route element={<ProtectedOutlet />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Sidebar;
