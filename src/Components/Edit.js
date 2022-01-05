import React, { Component } from "react";
import Showicon from "./Showicon";

export class Trending extends Component {
  render() {
    return (
      <div className="home-sec container-fluid">
        <div className="row">
          <div className="title">
            <div className="col-md-8">
              <h2>Recently Added Shows</h2>
            </div>
            <div className="col-md-4">
              <a href="#">
                View all <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row icon-row">
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-1.jpg.webp"
              protitle="Great Teacher Onizuka"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-2.jpg.webp"
              protitle="Fate/stay night Movie: Heaven's Feel - II. Lost"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-3.jpg.webp"
              protitle="Mushishi Zoku Shou: Suzu no Shizuku"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-4.jpg.webp"
              protitle="Fate/Zero 2nd Season"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-5.jpg.webp"
              protitle="Kizumonogatari II: Nekket su-hen"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/recent/recent-6.jpg.webp"
              protitle="The Seven Deadly Sins: Wrath of the Gods"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
