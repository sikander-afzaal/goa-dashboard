import "./styles/Details.css";

const Details = () => {
  return (
    <div className="max details-div">
      <div className="details__img-div">
        <img src="/assets/frame.png" alt="" className="frame" />
        <img src="/assets/nft-imgs/odin.png" alt="" className="detail-img" />
      </div>
      <div className="detail-grid">
        <div className="detail-row">
          <h3 className="trajan">Energy:</h3>
          <p>3/10</p>
        </div>
        <div className="detail-row">
          <h3 className="trajan">Rewards earned:</h3>
          <p>0 $ASG</p>
        </div>
        <div className="detail-row">
          <h3 className="trajan">Time left:</h3>
          <p>10 hrs 29 mins</p>
        </div>
        <div className="detail-row">
          <h3 className="trajan">Owner:</h3>
          <p>0xiEat..............hole420</p>
        </div>
      </div>
    </div>
  );
};

export default Details;