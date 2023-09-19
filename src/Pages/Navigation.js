import React from "react";
import { NavLink } from "react-router-dom";
import "../Layout/heading.css";

const Navigation = () => {
  return (
    <div className="main-navigation">
      <div className="heading-h1">
        <NavLink to="/" className="logo"><h1>Schools</h1></NavLink>
      </div>
      <div className="navigation-containner">
        <NavLink to="/" className="navigation-btn">
          Home
        </NavLink>
        <NavLink to="/about" className="navigation-btn">
          About
        </NavLink>
        <NavLink to="/student-data" className="navigation-btn">
          Student Data
        </NavLink>
        <NavLink to="/add-student" className="navigation-btn">
          {" "}
          Add Student
        </NavLink>
        <NavLink to="/contact" className="navigation-btn">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
