import React from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";

import "./item-popup.css";

import { selectItem } from "../../redux/shop/shop.selectors";

const ItemPopup = ({ item, addItem }) => {
  const obj = useParams();
  console.log(obj);

  const { name, price, imageUrl, description } = item;
  return (
    <div className="bidhaa-container">
      <div className="picha-container">
        <img src={imageUrl} alt="" id="picha" />
        <div className="maelezo-container">
          <div className="price-dollar">KSH {price}</div>
          <h2 className="bidhaa-title">{name}</h2>
          <div className="bidhaa-description">
            <p>{description}</p>
          </div>
          <div className="kidude-container">
            <CustomButton onClick={() => addItem(item)}>
              Add to cart
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { collectionID, itemID } = useParams();

  return {
    item: selectItem(collectionID, itemID)(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPopup);
