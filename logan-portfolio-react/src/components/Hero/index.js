import React from "react";
import "./style.css";
import Photo from "../../images/port-pic.jpeg";

function Hero() {
  return (
    <div className="hero text-center" >
      <img src={Photo} alt="Logo" />
    </div>
  );
}

export default Hero;
