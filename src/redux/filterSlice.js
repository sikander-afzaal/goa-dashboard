import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterListed: "unlisted",
};

export const filterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filterListed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
