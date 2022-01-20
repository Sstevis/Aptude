import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <li>
              <NavLink to="/">Marketing</NavLink>
            </li>
            <li>
              <NavLink to="/">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/">Commerce</NavLink>
            </li>
            <li>
              <NavLink to="/">Insights</NavLink>
            </li>
          </ul>
        </div>
        <div className="col support">
          <h6>Supports</h6>
          <ul>
            <li>
              <NavLink to="/">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/">Documentation</NavLink>
            </li>
            <li>
              <NavLink to="/">Guides</NavLink>
            </li>
            <li>
              <NavLink to="/">API Status</NavLink>
            </li>
          </ul>
        </div>
        <div className="col company">
          <h6>Company</h6>
          <ul>
            <li>
              {" "}
              <NavLink to="/">About</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/">Blogs</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Jobs</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Press</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Partners</NavLink>
            </li>
          </ul>
        </div>
        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li>
              <NavLink to="/">Claims</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/">Privacy</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Cookies</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/">Terms</NavLink>
            </li>
          </ul>
        </div>
        <div className="col subscribe">
          <h6>Subscribe to our News Letter</h6>
          <p>Latest news, articles and resources sent to your inbox weekly.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email " />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>&copy; Aptive Workflow Inc, All Rights Reserved.</p>
          </div>
          <div>
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaGithub />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
