import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { ForecastContainer } from "./components/ForecastContainer";
import { ContentContainer } from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="window">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;

const Sidebar = props => {
  return (
    <div className="sidebar">
      <h1>Hello</h1>
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
