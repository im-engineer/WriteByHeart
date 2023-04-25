import React, { useState } from "react";
import Logo from "../../assets/logo/-logo.png";
import "./Signin.css";
import { adminAccess } from "../../service/authService";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../store/authSlice";
import {useDispatch} from "react-redux"
import Navbar from "../Navbar/Navbar";

function Signin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
console.log(input)
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({	
      ...previousValue,
      [name]: value,
    }));
  };

  const Login = async () => {
    try {
      const apiResponse = await adminAccess(input.email, input.password);
      console.log(apiResponse.data, "res");
      if (apiResponse.data.status === true) {
        // setLoading(true);
        dispatch(adminLogin(apiResponse.data));
        navigate("/")
        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
      } else {
      }
    } catch (e) {
    console.log("🚀 ~ file: SignIn.js ~ line 39 ~ Login ~ e", e);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <Navbar/>
      <div
        className="signin--page"
        style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
      >
        <div className="container">
          <div className="row">
            <h1>Welcome to khaab...</h1>
            <div className="col-md-6">
              <h2>Join khaab to make your khaab true</h2>
              <form className="signin-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                  className="no-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  // value={email}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => onHandleChange(e)}
                />
                <input
                  className="no-outline"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={password}
                  onChange={(e) => onHandleChange(e)}
                  minLength="8"
                  required
                />
                <button type="submit" className="btn btn-outline-dark" onClick={Login}>
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
