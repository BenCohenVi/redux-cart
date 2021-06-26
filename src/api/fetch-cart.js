import axios from "axios";

import config from "../config/config.json";

const fetchCart = async () => {
  const response = await axios.get(`${config.serverUrl}/cart.json`);
  return response.data;
};

export default fetchCart;
