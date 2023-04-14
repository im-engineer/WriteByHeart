import React, { useState } from "react";
import Logo from "../../assets/jpeg/logo.png";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // make API call to submit the form data
      console.log("Form submitted");
    } else {
      alert("Please fill in all the fields");
    }
  };

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
              <form className="signin-form" onSubmit={handleSubmit}>
                <input
                  className="no-outline"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <input
                  className="no-outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="8"
                  required
                />
                <button type="submit" className="btn btn-outline-dark">
                  Access
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
