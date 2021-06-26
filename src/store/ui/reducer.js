import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isCartShown = !state.isCartShown;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const { toggle, setNotification } = uiSlice.actions;
export default uiSlice.reducer;
