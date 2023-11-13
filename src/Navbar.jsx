import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div className="navleft">
        <ul className="links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/manageteams">
              Teams
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard/manageteams/viewteam">
              Athletes
            </Link>
          </li>
        </ul>
        <Link className="loginBtn" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
