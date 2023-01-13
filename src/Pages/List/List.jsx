import { useState } from "react";
import { useSelector } from "react-redux";
import ListModal from "../../Components/ListModal/ListModal";
import Filter from "./Filter";
import Nfts from "./Nfts";

const List = () => {
  const [modal, setModal] = useState(false);
  const { selectedNfts, filterListed, unlistedNfts } = useSelector(
    (state) => state.nfts
  );
  return (
    <div className="page">
      {modal && <ListModal setModal={setModal} />}
      <Filter />
      <Nfts />
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
  );
};

export default List;
