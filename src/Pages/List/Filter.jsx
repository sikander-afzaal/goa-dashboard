import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import "./styles/Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { filterListed } = useSelector((state) => state.filter);
  return (
    <div className="max">
      <div className="filter-div">
        <button
          onClick={() => dispatch(changeFilter("unlisted"))}
          className={filterListed === "unlisted" ? "active-filter" : ""}
        >
          Unlisted NFTS
        </button>
        <button
          onClick={() => dispatch(changeFilter("listed"))}
          className={filterListed === "listed" ? "active-filter" : ""}
        >
          Listed NFTS
        </button>
        <button
          onClick={() => dispatch(changeFilter("ongoing"))}
          className={filterListed === "ongoing" ? "active-filter" : ""}
        >
          Ongoing rentals
        </button>
      </div>
    </div>
  );
};

export default Filter;
