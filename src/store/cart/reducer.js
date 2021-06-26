import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.splice(0, state.length);
      for (let item of action.payload) {
        state.push(item);
      }
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        ++existingItem.quantity;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === itemId);
      if (state[existingItemIndex].quantity !== 1) {
        --state[existingItemIndex].quantity;
      } else {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { replaceCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
