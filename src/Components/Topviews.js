import React, { Component } from "react";
import Topicon from "./Topicon";

export class Topviews extends Component {
  render() {
    return (
      <div className="topviews">
        <div className="title">
          <h2>Top Views</h2>
          <ul>
            <li>Day</li>
            <li>Week</li>
            <li>Month</li>
            <li>Year</li>
          </ul>
        </div>
        <div className="topicon">
          <Topicon
            topimg="https://preview.colorlib.com/theme/anime/img/sidebar/tv-1.jpg.webp"
            toptitle="Boruto: Naruto next generations"
          />
        </div>
      </div>
    );
  }
}

export default Topviews;
