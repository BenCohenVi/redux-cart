import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggle } from "../../../store/ui/reducer";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartQuantity = cart.reduce(
    (currentAmount, item) => currentAmount + item.quantity,
    0
  );

  const toggleCart = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
