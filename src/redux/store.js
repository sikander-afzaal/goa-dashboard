import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./listSlice";
import filterReducer from "./filterSlice";
import rentReducer from "./rentSlice";

export const store = configureStore({
  reducer: {
    listed: nftReducer,
    filter: filterReducer,
    rent: rentReducer,
  },
});
