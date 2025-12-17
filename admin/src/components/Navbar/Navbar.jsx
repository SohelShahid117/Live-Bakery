import React from "react";
import "./Navbar.css";

import { assets } from "./../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">
        <span
          to="/"
          className="text-5xl font-bold text-amber-600 w-auto cursor-pointer"
        >
          Live Bakery
        </span>
        <br />
        <span>Admin Panel</span>
      </p>
      {/* <img className="logo" src={assets.logo} alt="" /> */}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
