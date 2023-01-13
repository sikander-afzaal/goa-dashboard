import "./ListModal.css";
import NftCard from "../Nftcard/NftCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listNfts, changePercentage } from "../../redux/listSlice";

const ListModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const [inputYou, setInputYou] = useState();
  const [inputRenter, setInputRenter] = useState();
  const { selectedNfts } = useSelector((state) => state.listed);
  useEffect(() => {
    dispatch(changePercentage({ you: inputYou, renter: inputRenter }));
  }, [inputYou]);

  return (
    <>
      <div onClick={() => setModal(false)} className="overlay"></div>
      <div className="list-modal">
        <FontAwesomeIcon onClick={() => setModal(false)} icon={faXmark} />
        <div className="nft-row-list custom-scroll">
          {selectedNfts.map((elem, idx) => {
            return <NftCard {...elem} select key={idx + "nft-select-unlist"} />;
          })}
        </div>
        <div className="bottom-list-modal">
          <div className="left-list-modal">
            <div className="list-row orange-row">
              <p>You</p>
              <div className="input-div-list">
                <input
                  type="number"
                  value={inputYou}
                  onChange={(e) => {
                    setInputYou(e.target.value);
                    setInputRenter(100 - e.target.value);
                  }}
                />
                <h6>%</h6>
              </div>
            </div>
            <div className="list-row">
              <p>Renter</p>
              <div className="input-div-list">
                <input
                  type="number"
                  value={inputRenter}
                  onChange={(e) => {
                    setInputRenter(e.target.value);
                    setInputYou(100 - e.target.value);
                  }}
                />
                <h6>%</h6>
              </div>
            </div>
            <h5>Total % must equal 100%</h5>
          </div>
          <div className="right-list-modal">
            <button className="inverse-orange-btn">Minimum Wins</button>
            <button
              onClick={() => {
                dispatch(listNfts([...selectedNfts]));
                setModal(false);
              }}
              className="orange-btn"
            >
              List Nft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListModal;
