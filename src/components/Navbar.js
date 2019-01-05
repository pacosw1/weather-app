import React, { Component } from "react";
import "./css/Navbar.css";

export const Navbar = props => {
  return (
    <div className="navbar">
      <input placeholder="Search for a city" />
      <button className="">&#8451;</button>
    </div>
  );
};
