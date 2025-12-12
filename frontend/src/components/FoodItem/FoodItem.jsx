import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, image, price, description, category }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          {/* <span>&#x09F3;</span> */}${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
