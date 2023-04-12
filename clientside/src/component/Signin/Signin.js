import React from "react";
import Logo from "../../assets/jpeg/logo.png";
import './Signin.css'

function Signin() {
  return (
    <div>
      <div
        className="signin--page"
        style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
      >
        <div className="container">
          <div className="row">
            <h1>Welcome to khaab...</h1>
            <div className="col-md-6">
              <h2>Join khaab to make your khaab true</h2>
              <form className="signin-form">
                <input className="no-outline" type="text" placeholder="Email" />
                <input
                  className="no-outline"
                  type="password"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-dark-outline">
                  SignIn
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
