import React from "react";
import g1 from "../assets/g1.png";
import Dropdown from "../Dropdown/Dropdown";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ name }) => {
  return (
    <div className="teamCard">
      <img src={g1} className="cardImage" alt="team" />
      <h3 style={{ margin: "1rem 0 5px 0" }}>{name}</h3>
      <p style={{ margin: "5px 0", color: "#aaa" }}>Athlete</p>
      <Link to="./viewteam" className="btn viewBtn">
        View team
      </Link>
      <Dropdown fname="View more" fname1="Edit team" fname2="Delete team" />
    </div>
  );
};

export default Card;
