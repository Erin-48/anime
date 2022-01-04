import React, { Component } from "react";

export class Showicon extends Component {
  render() {
    return (
      <div className="product-item">
        <div className="product-img">
          <img src={this.props.proimage} alt="movie image" />
          <div className="ep">18/18</div>
          <div className="comment">
            <i class="fa fa-comments"></i>11
          </div>
          <div className="view">
            <i class="fa fa-eye"></i>9141
          </div>
        </div>
        <div className="product-info">
          <ul>
            <li>Active</li>
            <li>Movie</li>
          </ul>
          <h5>
            <a href="#">{this.props.protitle}</a>
          </h5>
        </div>
      </div>
    );
  }
}

export default Showicon;
