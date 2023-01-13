import "./styles/Nfts.css";
import NftCard from "../../Components/Nftcard/NftCard";
import { useSelector } from "react-redux";

const Nfts = () => {
  const { allNfts } = useSelector((state) => state.listed);
  return (
    <div className="max ">
      <div className="nft-grid">
        {allNfts.map((elem, idx) => {
          return <NftCard {...elem} rented key={idx + "rented"} />;
        })}
      </div>
    </div>
  );
};

export default Nfts;
