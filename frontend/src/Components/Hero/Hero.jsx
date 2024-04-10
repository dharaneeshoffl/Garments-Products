import React from 'react'
import './Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"

import hero_img from "../Assets/hero_image.png"


export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS BEGINS</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="hand-icon" />
        </div>
        <p>Collections</p>
        <p>For All</p>
        
        <div className="hero-latest-btn">
            <div>New Collections</div>
            <img src={arrow_icon} alt="arrow-icon" />
          </div>
        
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="hero-img" />
      </div>
    </div>
  );
}
