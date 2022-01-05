import React, { Component } from "react";
import Showicon from "./Showicon";

export class Trending extends Component {
  render() {
    return (
      <div className="home-sec container-fluid">
        <div className="row title">
          <div className="col-md-8">
            <h2>Popular Shows</h2>
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
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-1.jpg.webp"
              protitle="Sen to Chihiro no Kamikakushi"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-2.jpg.webp"
              protitle="Kizumonogatari III: Reiket su-hen"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-3.jpg.webp"
              protitle="Shirogane Tamashii hen Kouhan sen"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-4.jpg.webp"
              protitle="Rurouni Kenshin: Meiji Kenkaku Romantan"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-5.jpg.webp"
              protitle="Mushishi Zoku Shou 2nd Season"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Showicon
              proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-6.jpg.webp"
              protitle="Monogatari Series: Second Season"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
