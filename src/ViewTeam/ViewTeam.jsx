import React from "react";
import Navbar from "../Navbar";
import Heading from "../Heading";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import "./ViewTeam.css";
import AthleteCard from "../AthelteCard/AthleteCard";

const ViewTeam = () => {
  return (
    <div>
      <Navbar />
      <div className="viewTeam">
        <Heading title="Manage Your Athletes" />
        <SearchAndFilter add="Athlete" />
        <div className="athleteCards">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <AthleteCard
              key={i}
              name="Shekar"
              no="23"
              team="Heya"
              status="Active"
              age="23"
              weight="187"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
