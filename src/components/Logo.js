import React from "react";
import "./Logo.css";
import imagenetflix from "../images/netflix-logo.png";
import imageshemaroo from "../images/shemaroo-logo.jpg";
import imageerosnow from "../images/erosnow-logo.png";
import imageprimevideo from "../images/primevideo-logo.jpg";
import imagecolors from "../images/colors-logo.png";
import imagemxplayer from "../images/mxplayer-logo.png";
import imagezeetv from "../images/zeetv-logo.jpg";
import imagealt from "../images/alt-logo.jpg";

const TechPool = () => {
  return (
    <div className="techPool">
      <h1>CONTENT LICENSING</h1>
      <div className="tech-container">
        <div className="tech">
          <img src={imagenetflix} alt="reactJs" />
        </div>

        <div className="tech">
          <img src={imageshemaroo} alt="reactJs" />
        </div>
        <div className="tech">
          <img src={imageerosnow} alt="reactJs" />
        </div>
        <div className="tech">
          <img src={imageprimevideo} alt="reactJs" />
        </div>

        <div className="tech">
          <img src={imagecolors} alt="reactJs" />
        </div>
        <div className="tech">
          <img src={imagemxplayer} alt="reactJs" />
        </div>
        <div className="tech">
          <img src={imagezeetv} alt="reactJs" />
        </div>
        <div className="tech">
          <img src={imagealt} alt="reactJs" />
        </div>
      </div>
    </div>
  );
};

export default TechPool;
