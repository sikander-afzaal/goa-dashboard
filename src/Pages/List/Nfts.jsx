import { useDispatch, useSelector } from "react-redux";
import NftCard from "../../Components/Nftcard/NftCard";
import { selectAll } from "../../redux/listSlice";
import "./styles/Nft.css";

const Nfts = ({ setModal }) => {
  const dispatch = useDispatch();
  const { unlistedNfts, listedNfts, allNfts, selectedNfts } = useSelector(
    (state) => state.listed
  );
  const { filterListed } = useSelector((state) => state.filter);
  return (
    <>
      <div className="max nft-div">
        <div className="top-nft-row">
          {filterListed === "unlisted" && unlistedNfts.length > 0 && (
            <button onClick={() => dispatch(selectAll())}>Select All</button>
          )}
          {filterListed === "unlisted" && unlistedNfts.length > 0 && (
            <button
              onClick={() => {
                if (selectedNfts.length > 0) {
                  setModal(true);
                } else {
                  return;
                }
              }}
              className="outline-btn"
            >
              Continue
            </button>
          )}
        </div>
        <div className="nft-grid">
          {filterListed === "unlisted" &&
            unlistedNfts.map((elem, idx) => {
              return (
                <NftCard {...elem} select key={idx + "nft-select-unlist"} />
              );
            })}
          {filterListed === "listed" &&
            listedNfts.map((elem, idx) => {
              return (
                <NftCard {...elem} listed key={idx + "nft-select-unlist"} />
              );
            })}
          {filterListed === "ongoing" &&
            allNfts.map((elem, idx) => {
              return (
                <NftCard {...elem} ongoing key={idx + "nft-select-unlist"} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Nfts;
