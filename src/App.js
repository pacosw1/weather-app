import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { ForecastContainer } from "./components/ForecastContainer";
import { ContentContainer } from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="wind">
        <div id="sidebar">
          <div className="side-item">
            <p>Home</p>
            <p>About</p>
          </div>

          <div className="side-item">
            <p>Settings</p>
            <p>Report A bug</p>
          </div>
        </div>

        <div id="main">
          <div id="search">
            <input
              className="content-item"
              id="search-input"
              placeholder="Search for a city"
            />
            <button id="temp">C</button>
          </div>

          <div id="header">
            <h2 className="content-item">Monterrey, NL</h2>
          </div>

          <div id="mainDisplay">
            <div id="curr-temp">
              <h3 className="content-item">Cloudy</h3>
              <h2 className="content-item">13c</h2>
            </div>
            <div id="forecast-details">
              <div>
                <h4>Rain</h4>
                <span>50%</span>
              </div>
              <div>
                <h4>Wind</h4>
                <span>2 km/h</span>
              </div>

              <div>
                <h4>Wind Direction</h4>
                <span>N</span>
              </div>

              <div>
                <h4>Humidity</h4>
                <span>30%</span>
              </div>
            </div>
          </div>

          <div id="forecasts">
            <div className="forecast" id="weekly">
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Tue</p>
              </div>
              <div>
                <p>Wed</p>
              </div>
              <div>
                <p>Thu</p>
              </div>
              <div>
                <p>Fri</p>
              </div>
              <div>
                <p>Sat</p>
              </div>
              <div>
                <p>Sun</p>
              </div>
            </div>
            <div className="forecast" id="hourly">
              <div>
                <p>Sun</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
            </div>
          </div>
          <p />
        </div>
      </div>
    );
  }
}

export default App;

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h4>Hello</h4>
    </div>
  );
};

const Content = props => {
  return (
    <div className="fContent" style={{ flex: "1 100%" }}>
      <Navbar />
      <ForecastContainer />
      <ContentContainer />
    </div>
  );
};
