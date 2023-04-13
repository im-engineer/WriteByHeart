import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Navbar.css";
import logo from "../../assets/logo/-logo.png";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(null);

  const toggleModal = (modalName) => {
    setModalOpen((prev) => (prev === modalName ? null : modalName));
  };

  const isJoinModalOpen = modalOpen === "join";
  const isSignInModalOpen = modalOpen === "signIn";

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
        style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/publish">
                  Publish
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
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
              Sign In
            </Link>
            <Modal
              isOpen={isSignInModalOpen}
              onRequestClose={toggleModal}
              className="blur-background"
            >
              <Signin />
            </Modal>
          </div>
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;
