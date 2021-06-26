import React from "react";
import { useDispatch } from "react-redux";

import { addItem, removeItem } from "../../../store/cart/reducer";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(addItem(props.item));
  };

  const decreaseQuantityHandler = () => {
    dispatch(removeItem(id));
  };

  const total = quantity * price;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
