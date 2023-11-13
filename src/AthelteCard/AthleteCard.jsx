import React from "react";
import g1 from "../assets/g2.png";
import "./AthleteCard.css";
import { Link } from "react-router-dom";
const AthleteCard = ({ name, no, team, status, age, weight }) => {
  return (
    <div className="athleteCard">
      <div className="nandno">
        <h3>{name}</h3>
        <h3>#{no}</h3>
      </div>
      <img src={g1} alt="Athlete" className="cardImage" />
      <div className="rinfo">
        <div className="info">
          <p>Team</p>
          <p>{team}</p>
        </div>
        <div className="info">
          <p>Status</p>
          {status === "Active" ? (
            <p style={{ color: "green", fontWeight: "bold" }}>Active</p>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>Offline</p>
          )}
        </div>
      </div>
      <div className="rinfo" style={{ marginTop: "1rem" }}>
        <div className="info">
          <p>Age</p>
          <p>{age}</p>
        </div>
        <div className="info">
          <p>Weight</p>
          <p>{weight}</p>
        </div>
      </div>
      <Link className="viewBtn" to="./dashboard">
        View Dashboard
      </Link>
    </div>
  );
};

export default AthleteCard;
