import React, { Component } from "react";
import "./css/Forecast.css";

export const ForecastContainer = props => {
  return (
    <div id="forecast-container">
      <ForecastHeader />
      <div className="row ">
        <Forecast />
        <div className="row">
          <ForecastDetail />
          <ForecastDetail />
          <ForecastDetail />
        </div>
      </div>
    </div>
  );
};

const ForecastDetail = props => {
  return (
    <div className="col">
      <h5>Rain</h5>
      <span>10</span>
    </div>
  );
};
const Forecast = props => {
  return (
    <div>
      <h2>Cloudy</h2>
      <h2>2&#8451;</h2>
    </div>
  );
};

const ForecastHeader = props => {
  return (
    <div className="top-row">
      <div className="col">
        <h3>Monterrey</h3>
      </div>
    </div>
  );
};
