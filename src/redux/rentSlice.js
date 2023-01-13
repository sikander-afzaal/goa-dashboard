import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroImg: "/assets/nft-imgs/odin.png",
};

export const rentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {
    changeImg: (state, action) => {
      state.heroImg = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeImg } = rentSlice.actions;

export default rentSlice.reducer;
