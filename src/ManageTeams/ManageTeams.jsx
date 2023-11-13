import React from "react";
import "./ManageTeams.css";
import Navbar from "../Navbar";
import Card from "../Card/Card";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import Heading from "../Heading";
const ManageTeams = () => {
  return (
    <div className="manageteams">
      <Navbar />
      <div className="mtcontent">
        <Heading title="Manage Your Team" />
        <SearchAndFilter add="Team" />
        <div className="teamCards">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card name="Heya" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTeams;
