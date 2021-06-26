import axios from "axios";
import config from "../config/config.json";

const updateCart = async (cart) => {
  await axios.put(`${config.serverUrl}/cart.json`, cart);
};

export default updateCart;
