import React, { Component } from "react";
import Commenticon from "./Commenticon";

export class Newcomment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="title">
          <h2>New Comment</h2>
        </div>
        <div className="comment-icons">
          <Commenticon
            commimg="https://preview.colorlib.com/theme/anime/img/sidebar/xcomment-1.jpg.pagespeed.ic.-jz5AGaNp8.webp"
            commtitle="The Seven Deadly Sins: Wrath of the Gods"
          />
          <Commenticon
            commimg="https://preview.colorlib.com/theme/anime/img/sidebar/xcomment-2.jpg.pagespeed.ic.-jz5AGaNp8.webp"
            commtitle="Shirogane Tamashii hen Kouhan sen"
          />
          <Commenticon
            commimg="https://preview.colorlib.com/theme/anime/img/sidebar/xcomment-3.jpg.pagespeed.ic.-jz5AGaNp8.webp"
            commtitle="Kizumonogatari III: Reiket su-hen"
          />
          <Commenticon
            commimg="https://preview.colorlib.com/theme/anime/img/sidebar/xcomment-4.jpg.pagespeed.ic.-jz5AGaNp8.webp"
            commtitle="Monogatari Series: Second Season"
          />
        </div>
      </div>
    );
  }
}

export default Newcomment;
