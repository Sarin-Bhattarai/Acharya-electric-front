import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import Logo from "../../resources/images/group.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="ff-grid">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos autem nostrum doloribus amet harum, quis dolorum,
                fugiat ut atque, quia sed possimus debitis asperiores doloremque
                nihil beatae minus voluptatum sit? Doloremque ducimus laudantium
                odio totam illum mollitia, saepe perferendis at sapiente
                possimus, autem nihil et pariatur facilis odit labore,
                voluptatem ex assumenda officiis dolores quod quo sequi? Ratione
                nulla voluptatem tempora fugit eligendi facere corporis
                assumenda necessitatibus quam eaque. Et ipsam maxime dolorem
                corporis dolores voluptates consequuntur optio facere inventore!
              </p>
            </div>
            <div className="falano">
              <h2>FALANO COMPANY</h2>
              <h1>WANT TO CONTACT US</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                explicabo, veritatis aperiam inventore consectetur esse aliquid
                voluptatem doloribus vero accusamus incidunt voluptatum quo
                dolores officia.
              </p>
            </div>
          </div>

          <div className="fs-grid">
            <div>
              <img src={Logo} alt="footer" />
            </div>
            <div>
              <ul>
                <li>
                  <Link className="footer-links" to="/company">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/">
                    Harry Guest House
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/others">
                    Other Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link className="footer-links" to="/company">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/">
                    Harry Guest House
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/others">
                    Other Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link className="footer-links" to="/company">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/">
                    Harry Guest House
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/others">
                    Other Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>FOLLOW ACHARYA ELECTRICS</h5>
              <div className="flex topMargin">
                <MdFacebook size={28} />
                <AiOutlineTwitter size={28} />
                <AiOutlineInstagram size={28} />
                <FaTiktok size={28} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
