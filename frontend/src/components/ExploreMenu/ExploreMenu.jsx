import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";
const ExploreMenu = ({ category, setCategory }) => {
  console.log(category);
  console.log(menu_list);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="text-3xl">Explore our menu</h1>
      <p className="explore-menu-text">
        Our bakery’s diverse and flavorful menu consistently exceeds customer
        expectations, ensuring a high level of satisfaction.The use of fresh
        ingredients and appealing presentation in our menu helps build strong
        customer trust and satisfaction.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
