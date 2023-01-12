import Details from "./Details";
import Nfts from "./Nfts";

const Rent = () => {
  return (
    <div className="page">
      <Details />
      <img src="/assets/roadmap-break.png" alt="" className="breakline" />
      <Nfts />
    </div>
  );
};

export default Rent;
