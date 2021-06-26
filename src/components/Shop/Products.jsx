import React from "react";

import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";

const Products = ({ items }) => {
  const products = items.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
