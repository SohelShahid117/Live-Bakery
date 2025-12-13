import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span className="text-5xl font-bold text-amber-600 w-auto cursor-pointer">
            Live Bakery
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum
            omnis, unde reiciendis rerum adipisci! Pariatur quas iste, a
            provident tempore rerum! Quis voluptatem ipsam quaerat distinctio?
            Iure, quam optio.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+8801823012335</li>
            <li>livebakery@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright ©2025 All Rights Reserved | Live Bakery
      </p>
    </div>
  );
};

export default Footer;
