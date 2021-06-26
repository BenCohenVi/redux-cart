import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui/reducer";
import cartReducer from "./cart/reducer";

const store = configureStore({ reducer: { ui: uiReducer, cart: cartReducer } });

export default store;
