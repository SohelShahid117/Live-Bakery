import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    // <div className="navbar">{<img src={assets.logo} alt="" srcset="" />}</div>
    <div className="navbar">
      <span className="text-5xl font-bold text-amber-600 w-auto cursor-pointer">
        Live Bakery
      </span>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobileApp")}
          className={menu === "mobileApp" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href=""
          onClick={() => setMenu("aboutUs")}
          className={menu === "aboutUs" ? "active" : ""}
        >
          About Us
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contactUs")}
          className={menu === "contactUs" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot bg-amber-600"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="border 1px border-amber-600"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
