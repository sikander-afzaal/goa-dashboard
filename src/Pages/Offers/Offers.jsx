import OfferCard from "../../Components/OfferCard/OfferCard";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="page">
      <div className="max offer-div">
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
};

export default Offers;
