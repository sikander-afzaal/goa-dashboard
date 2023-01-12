import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="container">
      <div className="max top-bar">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-tab" : undefined)}
        >
          RENT NFT
        </NavLink>
        <NavLink
          to={"/list"}
          className={({ isActive }) => (isActive ? "active-tab" : undefined)}
        >
          LIST NFT
        </NavLink>
        <NavLink
          to={"/guild"}
          className={({ isActive }) => (isActive ? "active-tab" : undefined)}
        >
          GUILD NFT
        </NavLink>
        <NavLink
          to={"/offers"}
          className={({ isActive }) => (isActive ? "active-tab" : undefined)}
        >
          OFFERS
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
