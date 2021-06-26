import fetchCart from "../../api/fetch-cart";
import updateCart from "../../api/update-cart";

import { setNotification } from "../ui/reducer";
import { replaceCart } from "./reducer";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      setNotification({
        status: "pending",
        title: "Pending...",
        message: "Sending cart data",
      })
    );
    try {
      await updateCart(cart);
      dispatch(
        setNotification({
          status: "success",
          title: "Success",
          message: "Send cart data successfully",
        })
      );
    } catch {
      dispatch(
        setNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      setNotification({
        status: "pending",
        title: "Pending...",
        message: "Asking for cart data",
      })
    );
    try {
      dispatch(replaceCart(await fetchCart()));
      dispatch(
        setNotification({
          status: "success",
          title: "Success",
          message: "Received cart data successfully",
        })
      );
    } catch {
      dispatch(
        setNotification({
          status: "error",
          title: "Error",
          message: "Getting cart data failed",
        })
      );
    }
  };
};
