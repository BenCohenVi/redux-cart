import React from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);

  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemsElements}</ul>
    </Card>
  );
};

export default Cart;
