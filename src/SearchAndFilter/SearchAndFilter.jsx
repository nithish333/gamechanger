import React from "react";

import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
const SearchAndFilter = ({ add }) => {
  return (
    <div className="mttop">
      <div className="searchBar">
        <input type="text" placeholder="Search..." className="searchBox" />
        <button className="searchBtn">
          <AiOutlineSearch style={{}} size={20} />
        </button>
      </div>
      <div style={{ display: "flex" }} className="addTeamBtn">
        <div>
          <Link style={{ textDecoration: "none", color: "black" }}>
            Add {add}
          </Link>
        </div>
        <AiOutlinePlus style={{ marginTop: "0.2rem", marginLeft: "0.7rem" }} />
      </div>
      <div>
        <Dropdown fname="Filter" fname1="A - Z" fname2="Z - A" />
      </div>
    </div>
  );
};

export default SearchAndFilter;
