import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNft, unListNft } from "../../redux/listSlice";
import "./NftCard.css";

const NftCard = ({
  img,
  name,
  rented,
  select,
  id,
  listed,
  ongoing,
  you,
  renter,
}) => {
  const [rent, setRent] = useState(false);

  const [selected, setSelected] = useState(false);

  const { selectedNfts } = useSelector((state) => state.listed);
  const dispatch = useDispatch();

  useEffect(() => {
    let flag = false;
    selectedNfts.forEach((elem) => {
      if (elem.id === id) {
        flag = true;
      }
    });
    if (flag) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedNfts]);

  return (
    <div className="nft-card">
      <div className="nft-card-img">
        <img src={img} alt="" />
        <p>{name} #0001</p>
      </div>
      <div className="bottom-card">
        <div className="name-div">
          <div className="card-row">
            <img src="/assets/user-ico.png" alt="" />
            <p>{name}</p>
          </div>
          <div className="card-row">
            <img src="/assets/card-ico.png" alt="" />
            <p>
              {you}/{renter}
            </p>
          </div>
        </div>
        {rented && (
          <button
            onClick={() => setRent((prev) => !prev)}
            className={`${rent ? "rented-btn" : ""}`}
          >
            {rent ? "Rented" : "Rent"}
          </button>
        )}
        {select && (
          <button
            onClick={() => dispatch(selectNft({ img, name, id }))}
            className={`${selected ? "rented-btn" : ""}`}
          >
            {selected ? "Selected" : "Select"}
          </button>
        )}
        {listed && (
          <button onClick={() => dispatch(unListNft({ id, name, img }))}>
            Listed
          </button>
        )}
        {ongoing && <button>Ongoing</button>}
      </div>
    </div>
  );
};

export default NftCard;
