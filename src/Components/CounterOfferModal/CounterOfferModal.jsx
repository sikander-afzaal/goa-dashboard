import "./CounterOfferModal.css";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterOfferModal = ({ setModal }) => {
  const [inputYou, setInputYou] = useState();
  const [inputRenter, setInputRenter] = useState();

  return (
    <>
      <div onClick={() => setModal(false)} className="overlay"></div>
      <div className="counter-offer">
        <FontAwesomeIcon onClick={() => setModal(false)} icon={faXmark} />
        <div className="left-list-modal">
          <div className="list-row orange-row">
            <p>You</p>
            <div className="input-div-list">
              <input
                type="number"
                value={inputYou}
                onChange={(e) => {
                  setInputRenter(100 - e.target.value);
                  setInputYou(e.target.value);
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
        <button onClick={() => setModal(false)} className="outline-btn">
          SEND
        </button>
      </div>
    </>
  );
};

export default CounterOfferModal;
