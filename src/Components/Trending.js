import React, { Component } from "react";
import Showicon from "./Showicon";

export class Trending extends Component {
  render() {
    return (
      <div className="home-sec container-fluid">
        <div className="row title">
          <div className="col-md-8">
            <h2>Trending Now</h2>
          </div>
          <div className="col-md-4">
            <a href="#">
              View all <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row icon-row">
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg.webp"
              protitle="The Seven Deadly Sins: Wrath of the Gods"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-2.jpg.webp"
              protitle="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-3.jpg.webp"
              protitle="Shingeki no Kyojin Season 3 Part 2"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-4.jpg.webp"
              protitle="Fullmetal Alchemist: Brotherhood"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-5.jpg.webp"
              protitle="Shiratorizawa Gakuen Koukou"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-6.jpg.webp"
              protitle="Code Geass: Hangyaku no Lelouch R2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
