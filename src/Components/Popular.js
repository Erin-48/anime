import React, { Component } from "react";
import Showicon from "./Showicon";

export class Popular extends Component {
  render() {
    return (
      <div className="home-sec container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="title">
              <h2>Popular Shows</h2>
              <a href="#">
                View all <i class="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-1.jpg.webp"
                protitle="Sen to Chihiro no Kamikakushi"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-2.jpg.webp"
                protitle="Kizumonogatari III: Reiket su-hen"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-3.jpg.webp"
                protitle="Shirogane Tamashii hen Kouhan sen"
              />
            </div>
            <div className="icon-row">
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-4.jpg.webp"
                protitle="Rurouni Kenshin: Meiji Kenkaku Romantan"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-5.jpg.webp"
                protitle="Mushishi Zoku Shou 2nd Season"
              />
              <Showicon
                proimage="https://preview.colorlib.com/theme/anime/img/popular/popular-6.jpg.webp"
                protitle="Monogatari Series: Second Season"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
