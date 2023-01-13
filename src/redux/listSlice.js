import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNfts: [
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 1 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 2 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 3 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 4 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 5 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 6 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 7 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 8 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 9 },
  ],
  selectedNfts: [],
  listedNfts: [],
  unlistedNfts: [
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 1 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 2 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 3 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 4 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 5 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 6 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 7 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 8 },
    { img: "/assets/nft-imgs/heimdall.png", name: "Heimdall", id: 9 },
  ],
};

export const nftSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectNft: (state, action) => {
      let flag = false;
      //i use a flag variable to check if the nft is already selected or not
      const newArr = state.selectedNfts.filter((elem) => {
        if (elem.id === action.payload.id) {
          flag = true;
          return;
        } else {
          return elem;
        }
      });
      //if its selected, i remove the selection, else i select the nft
      if (!flag) {
        state.selectedNfts.push({ ...action.payload });
      } else {
        state.selectedNfts = newArr;
      }
    },
    selectAll: (state) => {
      state.selectedNfts = state.unlistedNfts;
    },
    listNfts: (state, action) => {
      //first i add the new nft to listed array
      state.listedNfts = [...state.listedNfts, ...action.payload];
      //i empty/remove the selections
      state.selectedNfts = [];
      //then i remove the listed nfts from unlisted nft array
      state.unlistedNfts = state.unlistedNfts.filter((elem) => {
        let flag = false;
        action.payload.forEach((elem2) => {
          if (elem2.id === elem.id) {
            flag = true;
          }
        });
        return !flag && elem;
      });
    },

    unListNft: (state, action) => {
      //first i remove the listed nft from listed array
      state.listedNfts = state.listedNfts.filter(
        (elem) => elem.id !== action.payload.id
      );
      //then add the removed nft to the unlisted array
      state.unlistedNfts.push({ ...action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectNft, listNfts, selectAll, unListNft } = nftSlice.actions;

export default nftSlice.reducer;
