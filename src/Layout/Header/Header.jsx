import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <div className="container dash-header">
      {openHeader && <div className="overlay"></div>}
      <header>
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="" />
        </Link>
        <div className={`dash-links ${openHeader ? "active-dash-header" : ""}`}>
          <div className="inner-dash-links">
            <Link to="/">Home</Link>
            <a href="#" className="active-link">
              Dashboard
            </a>
            <a href="#">Game Manual</a>
          </div>
          <button>
            <img src="/assets/metamask.png" alt="" /> <p>Connect To Wallet</p>
          </button>
        </div>
        <FontAwesomeIcon
          onClick={() => {
            setOpenHeader((prev) => !prev);
          }}
          icon={openHeader ? faXmark : faBars}
        />
      </header>
    </div>
  );
};

export default DashboardHeader;
