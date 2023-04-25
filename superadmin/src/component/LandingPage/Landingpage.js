import React from 'react'
import './Landingpage.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Signin from "../SignIn/Signin"


function Landingpage() {
  const user = useSelector((state) => state.auth);

  return (
    <div className='landing--page'>
        <Navbar/>
        <div className="content">
        {user.isLoggedIn ? (
          <div>
            <Sidebar />{" "}
            <Routes>
              <Route path="/signin" element={<Signin/>}></Route>
            </Routes>
          </div>
        ) : (
          <div>
            <Routes></Routes>
          </div>
        )}
        <main className="main">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  )
}

export default Landingpage