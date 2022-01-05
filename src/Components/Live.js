import React, { Component } from "react";
import Showicon from "./Showicon";

export class Live extends Component {
  render() {
    return (
      <div className="home-sec container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="title">
              <h2>Live Action</h2>
              <a href="#">
                View all <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-1.jpg.webp"
                protitle="Shouwa Genroku Rakugo Shinjuu"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-2.jpg.webp"
                protitle="Mushishi Zoku Shou 2nd Season"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-3.jpg.webp"
                protitle="Mushishi Zoku Shou: Suzu no Shizuku"
              />
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-4.jpg.webp"
                protitle="The Seven Deadly Sins: Wrath of the Gods"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-5.jpg.webp"
                protitle="Fate/stay night Movie: Heaven's Feel - II. Lost"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/live/live-6.jpg.webp"
                protitle="Kizumonogatari II: Nekketsu-hen"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Live;
