import React, { useState } from "react";
import Logo from "../../assets/jpeg/logo.png";
import "./Signup.css";

function Signup() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    contactNo: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!formValues.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!formValues.username) {
      newErrors.username = "Username is required";
    }
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formValues.contactNo) {
      newErrors.contactNo = "Contact number is required";
    } else if (!/^\d{10}$/.test(formValues.contactNo)) {
      newErrors.contactNo = "Contact number is invalid";
    }
    if (!formValues.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    // Update errors state
    setErrors(newErrors);

    // Submit form if no errors
    if (Object.keys(newErrors).length === 0) {
      // Submit form here
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

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
              <form className="signup-form" onSubmit={handleSubmit}>
                <input
                  className={`no-outline${errors.fullName ? " is-invalid" : ""}`}
                  type="text"
                  placeholder="Fullname"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
                <input
                  className={`no-outline${errors.username ? " is-invalid" : ""}`}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formValues.username}
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
                <input
                  className={`no-outline${errors.email ? " is-invalid" : ""}`}
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
                <input
                  className={`no-outline${errors.password ? " is-invalid" : ""}`}
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
                <input
                  className={`no-outline${errors.contactNo ? " is-invalid" : ""}`}
                  type="text"
                  placeholder="Contact No."
                  name="contactNo"
                  value={formValues.contactNo}
                  onChange={handleInputChange}
                />
                {errors.contactNo && (
                  <div className="invalid-feedback">{errors.contactNo}</div>
                )}
                <input
                  className={`no-outline${errors.dob ? " is-invalid" : ""}`}
                  type="date"
                  placeholder="Date of birth"
                  name="dob"
                  value={formValues.dob}
                  onChange={handleInputChange}
                />
                {errors.dob && (
                  <div className="invalid-feedback">{errors.dob}</div>
                )}
                <button type="submit" className="btn btn-outline-dark">
                  Join
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
export default Signup;
