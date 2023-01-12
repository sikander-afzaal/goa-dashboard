import { useState } from "react";
import "./styles/Filter.css";

const Filter = () => {
  const [filterTabSelected, setFilterTabSelected] = useState("unlisted");
  return (
    <div className="max">
      <div className="filter-div">
        <button
          onClick={() => setFilterTabSelected("unlisted")}
          className={filterTabSelected === "unlisted" ? "active-filter" : ""}
        >
          Unlisted NFTS
        </button>
        <button
          onClick={() => setFilterTabSelected("listed")}
          className={filterTabSelected === "listed" ? "active-filter" : ""}
        >
          Listed NFTS
        </button>
        <button
          onClick={() => setFilterTabSelected("ongoing")}
          className={filterTabSelected === "ongoing" ? "active-filter" : ""}
        >
          Ongoing rentals
        </button>
      </div>
    </div>
  );
};

export default Filter;
