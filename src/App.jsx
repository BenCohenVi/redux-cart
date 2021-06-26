import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification/Notification";
import { sendCartData, fetchCartData } from "./store/cart/actions";

import fakeProducts from "./data/fake-products";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const shouldShowCart = useSelector((state) => state.ui.isCartShown);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchCartData());
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification notification={notification} />}
      <Layout>
        {shouldShowCart && <Cart />}
        <Products items={fakeProducts} />
      </Layout>
    </>
  );
};

export default App;
