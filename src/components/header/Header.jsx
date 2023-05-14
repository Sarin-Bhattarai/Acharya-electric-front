import React, { useState } from "react";
import logo from "../../resources/images/group.png";
import { Link } from "react-router-dom";
import "./header.css";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 150);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>
          <div className="flex iii">
            <HiPhone className="ii" size={30} />
            <h2
              style={{
                color: "#0DC561",
                marginTop: "-4px",
              }}
            >
              - 9856038173
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
