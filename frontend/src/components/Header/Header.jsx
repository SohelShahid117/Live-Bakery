import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents ">
        <h2>
          Order Your <br /> Favourite Food Here
        </h2>
        <p className="">
          Click on the category to see the FULL MENU of Secret Recipe The price
          as per law, 7.5% VAT on Cakes & Bakery , 5% VAT on Hot Meals &
          Beverages & 10% SD to pizza, pasta, sandwich, fries etc.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
