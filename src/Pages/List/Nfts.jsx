import NftCard from "../../Components/Nftcard/NftCard";
import "./styles/Nft.css";

const Nfts = () => {
  return (
    <div className="max nft-div">
      <button>Select All</button>
      <div className="nft-grid">
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
        <NftCard select img={"/assets/nft-imgs/heimdall.png"} name="Heimdall" />
      </div>
    </div>
  );
};

export default Nfts;
