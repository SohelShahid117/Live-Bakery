import React from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";

const Navbar = () => {
  return (
    // <div className="navbar">{<img src={assets.logo} alt="" srcset="" />}</div>
    <div className="navbar">
      <span className="text-5xl font-bold text-amber-600 w-auto">
        Live Bakery
      </span>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
