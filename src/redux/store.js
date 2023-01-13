import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./listSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    listed: nftReducer,
    filter: filterReducer,
  },
});
