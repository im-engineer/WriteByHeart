import React, { useState } from "react";
import Logo from "../../assets/jpeg/logo.png"
import './Signup.css'

function Signup() {
 
  return (
    <div>
        <div
                className="signup--page"
                style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
              >
              
                <div className="container">
                  <div className="row">
                    <h1>Welcome to khaab...</h1>
                    <div className="col-md-6">
                      <h2>Join khaab to make your khaab true</h2>
                      <form className="signup-form">
                        <input
                          className="no-outline"
                          type="text"
                          placeholder="Fullname"
                        />
                        <input
                          className="no-outline"
                          type="text"
                          placeholder="Username"
                        />
                        <input
                          className="no-outline"
                          type="text"
                          placeholder="Email"
                        />
                        <input
                          className="no-outline"
                          type="password"
                          placeholder="Password"
                        />
                        <input
                          className="no-outline"
                          type="text"
                          placeholder="Contact no."
                        />
                        <button type="submit" className="btn btn-primary">
                          Sign up
                        </button>
                      </form>
                    </div>
                    <div className="col-md-6">
                        <img src={Logo} alt=""/>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Signup