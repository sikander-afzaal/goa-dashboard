import "./NftCard.css";

const NftCard = ({ img, name, rented, select }) => {
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
            <p>70/30</p>
          </div>
        </div>
        <button className={`${rented ? "rented-btn" : ""}`}>
          {select ? "Select" : rented ? "Rented" : "Rent"}
        </button>
      </div>
    </div>
  );
};

export default NftCard;
