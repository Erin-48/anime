import React, { Component } from "react";
import Banner from "./Banner";
import Popular from "./Popular";
import Trending from "./Trending";

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Trending></Trending>
        <Popular></Popular>
      </div>
    );
  }
}

export default Home;
