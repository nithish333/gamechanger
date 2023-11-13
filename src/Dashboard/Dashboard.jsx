import React from "react";
import Navbar from "../Navbar";
import "./Dashboard.css";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g4 from "../assets/g4.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dContent">
        <h1 style={{ fontSize: "3rem", lineHeight: "0.6", color: "#059669" }}>
          Dashboard
        </h1>
        <p style={{ maxWidth: "80ch", lineHeight: "1.6", fontSize: "1.2rem" }}>
          With our easy-to-use dashboard, you can manage all of your athletes
          and teams in one central location. Navigate through the menu to access
          athelete profiles, team rosters and generate reports. Our streamlined
          process allows coaches and managers to save time and efficienly track
          athlete progress.
        </p>
        <div className="dLinks">
          <div className="dLink">
            <img src={g1} className="dImage" alt="manage teams" />
            <Link to="./manageteams" className="btn dBtn">
              Manage teams
              <AiOutlineArrowRight className="icon" />
            </Link>
          </div>
          <div className="dLink">
            <img src={g2} className="dImage" alt="manage teams" />
            <Link to="./manageteams" className="btn dBtn">
              Manage Athletes
              <AiOutlineArrowRight className="icon" />
            </Link>
          </div>
          <div className="dLink">
            <img src={g4} className="dImage" alt="manage teams" />
            <Link to="./manageteams" className="btn dBtn">
              Manage movements
              <AiOutlineArrowRight className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
