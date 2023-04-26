import React, { useState } from "react";
import Logo from "../../assets/jpeg/logo.png";
import "./Signup.css";
import { writerRegistration } from "../../service/authService";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    contactNo: "",
    dob: "",
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
    if (!formValues.dob) {
      newErrors.dob = "Date of birth is required";
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

  const [input, setInput] = useState({
    fullname : "",
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    dob:"",
    image: null,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((previousValue) => ({
  //     ...previousValue,
  //     [name]: value,
  //   }));
  // };
  
  const onFileChange = (e) => {
    setInput((previous) => ({
      ...previous,
      image: e.target.files[0],
    }));
  };


  const joinWriter = async (e) => {
    e.preventDefault();
    const fromdata = new FormData();
    fromdata.append("image", input.image);
    fromdata.append("fullname", input.fullname);
    fromdata.append("username", input.username);
    fromdata.append("address", input.dob);
    fromdata.append("mobile", input.phonenumber);
    fromdata.append("email", input.email);
    fromdata.append("password", input.password);
    try {
      const response = await writerRegistration(fromdata);
      if (response.data.status === true) {
        // setLoading(true);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {

          navigate("/verifyotp");

        }, 1000);
      } else {
        toast.warning(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
    console.log("🚀 ~ file: SignUp.js ~ line 158 ~ signupUser ~ err", err);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  
  return (
    <>
      <div
        className="signup--page"
        style={{ backgroundColor: "rgba(000,000,000,0.3)" }}
      >
        <div className="container">
          <div className="row">
            <h1>Welcome to khaab...</h1>
            <div className="col-md-6">
              <h2>Join khaab to make your khaab true</h2>
              <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                {/* <label>Upload Image</label> */}
                <input
                  type="file"
                  className="product__input"
                  name="profile"
                  onChange={onFileChange}
                />

                <input
                  className={`no-outline${
                    errors.fullName ? " is-invalid" : ""
                  }`}
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
                  className={`no-outline${
                    errors.username ? " is-invalid" : ""
                  }`}
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
                  className={`no-outline${
                    errors.password ? " is-invalid" : ""
                  }`}
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
                  className={`no-outline${
                    errors.contactNo ? " is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Contact No."
                  name="phonenumber"
                  value={formValues.phonenumber}
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
                <button type="submit" className="btn btn-outline-dark" onClick={joinWriter}>
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
      </>
  );
}
export default Signup;
