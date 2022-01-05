import React, { Component } from "react";
import Banner from "./Banner";
import Live from "./Live";
import Newcomment from "./Newcomment";
import Popular from "./Popular";
import Recent from "./Recent";
import Topviews from "./Topviews";
import Trending from "./Trending";

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <Trending></Trending>
              <Popular></Popular>
              <Recent></Recent>
              <Live></Live>
            </div>
            <div className="col-lg-4 col-sm-12">
              <Topviews></Topviews>
              <Newcomment></Newcomment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
