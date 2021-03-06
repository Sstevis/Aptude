import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assest/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(!click);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" className="nav-link">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" className="nav-link">
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {!click ? <FaBars /> : <FaTimes />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
