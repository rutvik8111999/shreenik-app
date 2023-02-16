import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../images/brandlogo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import BasicModal from "./BasicModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <a
          href="/"
          className="nav-logo"
          onClick={() => setOpen(false)}
          style={{ fontSize: "40px", fontWeight: "900" }}
        >
          <img src={Logo} alt="logo" />
        </a>
        <div onClick={() => setOpen(!open)} className="nav-icon">
          {open ? (
            <FiX color="#000" size={50} />
          ) : (
            <FiMenu color="#000" size={50} />
          )}
        </div>
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li className="nav-items">
            <a href="/" className="nav-link" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>

          <li className="nav-items">
            <a
              href="/about"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About Us
            </a>
          </li>
          <li className="nav-items">
            <a
              href="/Services"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
          </li>
          <li className="nav-items">
            <a
              href="/Projects"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>

          <li className="nav-items">
            <a
              href="/contact"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Contact us
            </a>
          </li>
        </ul>
        <BasicModal />
        <div className="socialicons">
          <a href="https://www.instagram.com/">
            {" "}
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com/">
            <TwitterIcon />
          </a>
          <a href="https://www.twitter.com/">
            <EmailIcon />
          </a>
          {/* <button className="letsmeet">let's meet</button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
