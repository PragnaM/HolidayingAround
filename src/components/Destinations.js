import React from "react";
import city from "../images/city.jpg";
import fw from "../images/FortWayne.jpg";
import chicago from "../images/Chicago.jpg";
import seattle from "../images/Seattle.jpg";
import hoh from "../images/Hoh.jpg";
import np from "../images/NP.jpg";
import ncnp from "../images/NCNP.jpg";
import rainier from "../images/MtRainierNP.jpg";
import "../css/Destinations.scss";

function Destinations() {
  return (
    <div className="content">
      <p style={{ fontSize: "40px" }}>
        <u>Places I've been to </u>
      </p>
      <div className="cities">
        <p style={{ fontSize: "40px" }}>
          <u> Cities </u>
        </p>
        <img src={city} alt="city" height="200" width="300" />
      </div>
      <div className="citiescontent">
        <div className="cities">
          <p> Fort Wayne </p>
          <img src={fw} alt="Fort Wayne" height="300" width="200" />
        </div>
        <div className="cities">
          <p> Chicago </p>
          <img src={chicago} alt="Chicago" height="300" width="400" />
        </div>
        <div className="cities">
          <p> Seattle </p>
          <img src={seattle} alt="Seattle" height="300" width="200" />
        </div>
      </div>

      <div className="nationalparks">
        <p style={{ fontSize: "40px" }}>
          <u> National Parks </u>
        </p>
        <img src={np} alt="National Park" height="200" width="300" />
      </div>
      <div className="npcontent">
        <div className="nationalparks">
          <p> North Cascades National Park </p>
          <img
            src={ncnp}
            alt="North Cascades National Park"
            height="300"
            width="200"
          />
        </div>
        <div className="nationalparks">
          <p> Olympic National Park </p>
          <img src={hoh} alt="Olympic National Park" height="300" width="200" />
        </div>
        <div className="nationalparks">
          <p> Mt. Rainier National Park </p>
          <img
            src={rainier}
            alt="Mt. Rainier National Park"
            height="300"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
