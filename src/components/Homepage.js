import React, { Component } from "react";
import airplaneicon from "../images/Airplaneicon.png";
import Navbar from "./Navbar.js";
import { Outlet } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="headercontainer">
          <img
            className="headerimg"
            src={airplaneicon}
            alt="airplane-icon"
            height="120"
            width="180"
          />
          &nbsp;
          <h1 className="headertitle">Holidaying Around!</h1>
        </div>
        <div className="container">
          <Navbar />
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Homepage;
