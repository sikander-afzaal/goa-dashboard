import Filter from "./Filter";
import Nfts from "./Nfts";

const List = () => {
  return (
    <div className="page">
      <Filter />
      <Nfts />
      <button className="outline-btn">Continue</button>
    </div>
  );
};

export default List;
