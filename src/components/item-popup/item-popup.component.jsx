import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./item-popup.css";

import img from "./biggie.jpeg";

const ItemPopup = () => (
  <div className="item-container">
    <div className="image-container">
      <img src={img} alt="" id="image" />
      <div className="info-container">
        <div className="price-dollar">$9.95</div>
        <h2 className="item-title">Manjano Twig</h2>
        <div className="item-description">
          <p className="item-description">
            This painting is part of the manjano series .It portrays traditional
            african earings from the Ameru tribe in Kenya.
          </p>
        </div>
        <div className="btn-container">
          {" "}
          <CustomButton>Add to Cart</CustomButton>
        </div>
      </div>
    </div>
  </div>
);

export default ItemPopup;
