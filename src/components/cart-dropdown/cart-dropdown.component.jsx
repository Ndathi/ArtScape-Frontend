import React from "react";

import { useNavigate } from "react-router";
import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { toogleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
      </div>
      <Link to="checkout">
        <CustomButton
          onClick={() => {
            // navigate("/checkout");

            dispatch(toogleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
