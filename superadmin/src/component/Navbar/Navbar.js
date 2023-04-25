import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adminLogout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const userdata = useSelector((state) => state.auth);
  console.log(userdata, "user");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handellogout = () => {
    dispatch(adminLogout());
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {userdata.isLoggedIn ? (
        <div>
          <button className="btn btn-outline-light" onClick={handellogout}>
            <i class="fa-solid fa-power-off"></i>logout
          </button>
          &nbsp;&nbsp;
        </div>
      ) : (
        <div className="links">
          <button className="btn btn-outline-light">
            <Link to="/signin">Access</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
