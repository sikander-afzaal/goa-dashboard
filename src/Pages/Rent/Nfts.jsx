import "./styles/Nfts.css";
import NftCard from "../../Components/Nftcard/NftCard";

const Nfts = () => {
  return (
    <div className="max ">
      <div className="nft-grid">
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
        <NftCard img={"/assets/nft-imgs/heimdall.png"} rented name="Heimdall" />
      </div>
    </div>
  );
};

export default Nfts;
