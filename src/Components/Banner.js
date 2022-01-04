import React, { Component } from "react";

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img
          src="https://preview.colorlib.com/theme/anime/img/hero/hero-1.jpg.webp"
          alt="hero"
        />
        <div className="banner-content">
          <p className="label">Adventure</p>
          <h2>
            Fate / Stay Night: Unlimited <br /> Blade Works
          </h2>
          <p>After 30 days of travel across the world...</p>
          <a href="#">
            Watch Now <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
