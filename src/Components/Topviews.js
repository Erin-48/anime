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
          <Topicon
            topimg="https://preview.colorlib.com/theme/anime/img/sidebar/tv-2.jpg.webp"
            toptitle="The Seven Deadly Sins: Wrath of the Gods"
          />
          <Topicon
            topimg="https://preview.colorlib.com/theme/anime/img/sidebar/tv-3.jpg.webp"
            toptitle="Sword art online alicization war of underworld"
          />
          <Topicon
            topimg="https://preview.colorlib.com/theme/anime/img/sidebar/tv-4.jpg.webp"
            toptitle="Fate/stay night: Heaven's Feel I. presage flower"
          />
          <Topicon
            topimg="https://preview.colorlib.com/theme/anime/img/sidebar/tv-5.jpg.webp"
            toptitle="Fate stay night unlimited blade works"
          />
        </div>
      </div>
    );
  }
}

export default Topviews;
