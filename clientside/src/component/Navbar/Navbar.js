import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../../assets/logo/-logo.png";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { writerlogout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(null);

  const toggleModal = (modalName) => {
    setModalOpen((prev) => (prev === modalName ? null : modalName));
  };

  const isJoinModalOpen = modalOpen === "join";
  const isSignInModalOpen = modalOpen === "signIn";

  const userdata = useSelector((state) => state.auth);
  console.log(userdata, "user");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handellogout = () => {
    dispatch(writerlogout());
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgba(000,000,000,0.4)" }}
      >
        <nav className="container-fluid">
          <img src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {userdata.isLoggedIn ? (
            <>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/publish"
                    >
                      Publish
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link disabled"
                      to="/"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  className="btn btn-outline-light"
                  onClick={handellogout}
                >
                  <i class="fa-solid fa-power-off"></i>logout
                </button>
                &nbsp;&nbsp;
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  className="navlink"
                  style={{
                    padding: "1rem",
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => toggleModal("join")}
                >
                  <i className="fa fa-user-plus" />
                  Join
                </Link>
                <Modal
                  isOpen={isJoinModalOpen}
                  onRequestClose={toggleModal}
                  className="blur-background"
                >
                  <Signup />
                </Modal>
              </div>
              <div>
                <Link
                  className="navlink"
                  style={{
                    padding: "1rem",
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={() => toggleModal("signIn")}
                >
                  <i className="fa fa-sign-in-alt" />
                  Access
                </Link>
                <Modal
                  isOpen={isSignInModalOpen}
                  onRequestClose={toggleModal}
                  className="blur-background"
                >
                  <Signin />
                </Modal>
              </div>
            </>
          )}
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;
