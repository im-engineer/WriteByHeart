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
  // console.log(userdata.data.result.image, "user");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handellogout = () => {
    dispatch(adminLogout());
    localStorage.clear();
    navigate("/");
  };
  let path = `https://localhost:5001/Image/${userdata?.data?.result?.image}`

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {userdata.isLoggedIn ? (
        <div>
          <img className="profile-image" src={path} alt="Profile"/>
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
