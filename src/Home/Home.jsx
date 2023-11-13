import React from "react";
import Navbar from "../Navbar";
import landing from "../assets/g8.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="landing">
        <div className="lleft">
          <p className="con">TRACK, ANALYZE,</p>
          <p className="con">SUCCEED,</p>
          <p className="con suc">GAMECHANGER.</p>
          <p
            style={{
              width: "60%",
              fontSize: "1.1rem",
              float: "right",
              lineHeight: "0.4",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            - Your Coach's Playbook
          </p>
        </div>
        <div className="lright">
          <img src={landing} alt="landing" className="landingImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
