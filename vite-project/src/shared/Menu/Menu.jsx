import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const logoMG =
    "https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/logo.png?alt=media&token=b1ad3ea6-0a63-4a39-8bbb-4a9dd1ad4338";
  const logoSptfy="https://firebasestorage.googleapis.com/v0/b/musica-eha.appspot.com/o/logoSpotify.png?alt=media&token=33bff431-8c6e-4cd9-bab9-9e37f6f7b704";  
//wind + . 🤐
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-light">
        <div className="container-fluid ">
          <a className="navbar-brand ">
            <img
            className="banner-main"
              src={logoMG}
              alt="logo"
              style={{ width: "60px", height: "40px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link txtMenu">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link txtMenu">
                  About Their Hits
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link txtMenu nav-link disabled" href="#">
                  In molecular Building...🦠
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">  
              <li className="nav-item ">
                <Link className="nav-link txtMenu" to="/api">
                  <img className="latido" src={logoSptfy} style={{ width: "30px", height: "30px" }} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Menu };
