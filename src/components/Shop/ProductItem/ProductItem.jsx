import React from "react";
import { useDispatch } from "react-redux";

import Card from "../../UI/Card/Card";
import { addItem } from "../../../store/cart/reducer";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, title, price, description } = props.item;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
