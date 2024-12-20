import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <div className="background-container">
      <div className="shadow-overlay" aria-hidden="true"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
        aria-label="Background video of universe"
      >
        <source src={video} type="video/mp4" />
        <p>Your browser does not support the video tag. Here’s a fallback image:</p>
        <img src={fallbackImage} alt="Universe scene" />
      </video>
    </div>
  );
};

export default Background;
