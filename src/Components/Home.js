import React, { Component } from "react";
import Banner from "./Banner";
import Live from "./Live";
import Popular from "./Popular";
import Recent from "./Recent";
import Trending from "./Trending";

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Trending></Trending>
        <Popular></Popular>
        <Recent></Recent>
        <Live></Live>
      </div>
    );
  }
}

export default Home;
