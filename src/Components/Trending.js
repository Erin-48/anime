import React, { Component } from "react";
import Showicon from "./Showicon";

export class Trending extends Component {
  render() {
    return (
      <div className="trending container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="title">
              <h2>Trending Now</h2>
              <a href="#">
                View all <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-1.jpg.webp"
                protitle="The Seven Deadly Sins: Wrath of the Gods"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-2.jpg.webp"
                protitle="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-3.jpg.webp"
                protitle="Shingeki no Kyojin Season 3 Part 2"
              />
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-4.jpg.webp"
                protitle="Fullmetal Alchemist: Brotherhood"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-5.jpg.webp"
                protitle="Shiratorizawa Gakuen Koukou"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/trending/trend-6.jpg.webp"
                protitle="Code Geass: Hangyaku no Lelouch R2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
