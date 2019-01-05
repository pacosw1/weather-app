import React, { Component } from "react";
import "./css/Content.css";
export const ContentContainer = props => {
  return (
    <div className="content">
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
};

const HourlyForecast = prop => {
  return (
    <div className="row scroll">
      <div className="list-item">1</div>
      <div className="list-item">2</div>
      <div className="list-item">3</div>
      <div className="list-item">5</div>
      <div className="list-item">6</div>
      <div className="list-item">7</div>
      <div className="list-item">8</div>
      <div className="list-item">8</div>
      <div className="list-item">8</div>
      <div className="list-item">8</div>
      <div className="list-item">8</div>
    </div>
  );
};

const WeeklyForecast = props => {
  return (
    <div className="row scroll">
      <div className="list-item">Mon</div>
      <div className="list-item">Tue</div>
      <div className="list-item">Wed</div>
      <div className="list-item">Thu</div>
      <div className="list-item">Fri</div>
      <div className="list-item">Sat</div>
      <div className="list-item">Sun</div>
    </div>
  );
};
