import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import Logo from "../../resources/images/lg.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="ff-grid">
            <div>
              <p>
                Welcome to our acharya electrical shop, your trusted destination
                for all your electrical needs. With a wide range of top-notch
                products, expert repair services, and a friendly team of
                professionals, we are committed to providing exceptional
                quality, expertise, and customer satisfaction. From reliable
                appliances to cutting-edge innovations, we have everything you
                need to power your world. Experience convenience, reliability,
                and outstanding service at our trusted and customer-focused
                electrical shop.
              </p>
            </div>
            <div className="falano">
              <h2>ACHARYA ELECTRICS</h2>
              <h1>WANT TO CONTACT US</h1>
              <p>
                If you have any inquiries, service requests, or need expert
                advice, don't hesitate to reach out to us. We're here to assist
                you promptly and provide the support you need.
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
                  <Link className="footer-links" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/">
                    Acharya Electrics
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    className="footer-links"
                    to="https://www.academia.edu/37047984/Electrical_Installation_and_Maintenance_strand"
                    target="next"
                  >
                    Article 1
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-links"
                    to="https://www.allaboutcircuits.com/technical-articles/"
                    target="next"
                  >
                    Article 2
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/services">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>FOLLOW ACHARYA ELECTRICS</h5>
              <div className="flex topMargin">
                <MdFacebook className="ii-c" size={28} />
                <AiOutlineWhatsApp className="ii-c" size={28} />
                <AiOutlineInstagram className="ii-c" size={28} />
                <FaTiktok className="ii-c" size={28} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
