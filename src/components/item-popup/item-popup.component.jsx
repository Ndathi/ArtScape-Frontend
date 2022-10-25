import React from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./item-popup.css";

import img from "./biggie.jpeg";
import { selectItem } from "../../redux/shop/shop.selectors";

const ItemPopup = ({ item }) => {
  console.log(item);

  const { name, price, imageUrl } = item;
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" id="image" />
        <div className="info-container">
          <div className="price-dollar">${price}</div>
          <h2 className="item-title">{name}</h2>
          <div className="item-description">
            <p className="item-description">
              This painting is part of the manjano series .It portrays
              traditional african earings from the Ameru tribe in Kenya.
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
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { collectionID, itemID } = useParams();

  return {
    item: selectItem(collectionID, itemID)(state),
  };
};

export default connect(mapStateToProps)(ItemPopup);
