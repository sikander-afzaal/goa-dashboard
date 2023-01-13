import { useState } from "react";
import CounterOfferModal from "../CounterOfferModal/CounterOfferModal";
import "./OfferCard.css";

const OfferCard = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="offer-card-div">
      {modal && <CounterOfferModal setModal={setModal} />}
      <OfferNft
        img="/assets/nft-imgs/heimdall.png"
        name="Heimdall"
        type="Legenday"
      />
      <OfferRow
        setModal={setModal}
        offer={"60/40"}
        address="0ax4gfrt5gkkl65ggjkl9......ss45g"
      />
      <OfferRow
        setModal={setModal}
        offer={"60/40"}
        address="0ax4gfrt5gkkl65ggjkl9......ss45g"
      />
      <OfferRow
        setModal={setModal}
        offer={"60/40"}
        address="0ax4gfrt5gkkl65ggjkl9......ss45g"
      />
    </div>
  );
};

export default OfferCard;

const OfferNft = ({ img, name, type }) => {
  return (
    <div className="nft-card">
      <div className="nft-card-img">
        <img src={img} alt="" />
        <p>{name} #0001</p>
      </div>
      <div className="bottom-card2">
        <div className="nft-desc">
          <div className="card-row">
            <img src="/assets/user-ico.png" alt="" />
            <p>{name}</p>
          </div>
          <div className="card-row">
            <img src="/assets/card-ico.png" alt="" />
            <p>70/30</p>
          </div>
        </div>
        <p>
          NFT TYPE: <span>{type}</span>
        </p>
      </div>
    </div>
  );
};

const OfferRow = ({ offer, address, setModal }) => {
  return (
    <div className="offer-row">
      <div className="left-offer">
        <h3>
          {" "}
          <img src="/assets/card-ico.png" alt="" /> {offer}
        </h3>
        <p>{address}</p>
      </div>
      <div className="right-offer">
        <button className="accept">Accept</button>
        <button className="deny">Deny</button>
        <p onClick={() => setModal(true)}>Make Counter offer</p>
      </div>
    </div>
  );
};
