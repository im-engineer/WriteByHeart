import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo/-logo.png"
import Logo from "../../assets/jpeg/logo.png"

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
      >
        <div className="container-fluid">
          <img src={logo} alt=""/>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
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
              onClick={openModal}
            >
              <i className="fa fa-user-plus" />
              Join
            </Link>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              className="blur-background"
            >
              <div
                className="signup--page"
                style={{ backgroundColor: "rgba(000,000,000,0.2)" }}
              >
                <button
                  onClick={closeModal}
                  style={{ margin: "1rem", float: "right", width:"20px", background:"none" }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
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
            </Modal>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
