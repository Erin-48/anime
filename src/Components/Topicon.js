import React, { Component } from "react";

export class Topicon extends Component {
  render() {
    return (
      <div className="topicon">
        <img src={this.props.topimg} alt="top icon" />
        <div className="ep">18/?</div>
        <div className="view">
          <i class="fa fa-eye"></i>9141
        </div>
        <div className="toptitle">
          <p>{this.props.toptitle}</p>
        </div>
      </div>
    );
  }
}

export default Topicon;
