import React, { useState, useEffect } from "react";
import "../Assets/styles/header.css";
import logo from "../Assets/images/logoY.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Header = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showNavbar = () => setVisible(true);
    const hideNavbar = () => setVisible(false);

    const hoverArea = document.querySelector(".hover-area");
    hoverArea.addEventListener("mouseenter", showNavbar);
    hoverArea.addEventListener("mouseleave", hideNavbar);

    return () => {
      hoverArea.removeEventListener("mouseenter", showNavbar);
      hoverArea.removeEventListener("mouseleave", hideNavbar);
    };
  }, []);

  return (
    <>
      <div className="hover-area"></div>
      <div className={`header ${visible ? "visible" : ""}`}>
        <div className="header-container">
          <a href="#landing" className="header-logo" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="IEEE Logo"
              style={{
                width: "60%",
              }}
            />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "header-menu active" : "header-menu"}>
            <li className="header-item">
              <a
                href="#landing"
                className="header-links"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li className="header-item">
              <a
                href="#about"
                className="header-links"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className="header-item">
              <a
                href="#gallery"
                className="header-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>
            <li className="header-item">
              <a
                href="#team"
                className="header-links"
                onClick={closeMobileMenu}
              >
                Team
              </a>
            </li>
            <li className="header-item">
              <a
                href="#footer"
                className="header-links"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
