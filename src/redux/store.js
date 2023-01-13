import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./nftSlice";

export const store = configureStore({
  reducer: {
    nfts: nftReducer,
  },
});
