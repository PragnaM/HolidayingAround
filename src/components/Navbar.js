import React from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia.js";

function Navbar() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to="/">
            <i class="fa-solid fa-house"></i>&nbsp;Home
          </Link>
        </li>
        <li>
          <Link to="/destinations">
            <i class="fa-sharp fa-solid fa-earth-americas"></i>
            &nbsp;Destinations
          </Link>
        </li>
        <li>
          <Link to="/feedbacks">
            <i class="fa-sharp fa-solid fa-map-location-dot"></i>
            &nbsp;Feedbacks
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fa-solid fa-user"></i>&nbsp;About
          </Link>
        </li>
      </ul>
      <div className="Footer">
        <ul class="socialmedia">
          <li>
            <a href="http://www.instagram.com/pragna_m97">
              <i class="fa-brands fa-instagram"></i> Instagram &nbsp;
              <SocialMedia username="pragna_m97" />
            </a>
          </li>
          <li>
            <a href="https://t.snapchat.com/FUqFOtWp">
              <i class="fa-brands fa-snapchat"></i> Snapchat &nbsp;
              <SocialMedia username="pragnam" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
