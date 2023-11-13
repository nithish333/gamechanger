import React from "react";
import "./Dropdown.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";
const Dropdown = ({ fname, fname1, fname2 }) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        {fname} <MdOutlineKeyboardArrowDown className="dicon" />
      </button>
      <div class="dropdown-content">
        <Link>{fname1}</Link>
        <Link>{fname2}</Link>
      </div>
    </div>
  );
};

export default Dropdown;
