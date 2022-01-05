import React, { Component } from "react";

export class Blogbox extends Component {
  render() {
    return (
      <div className="blog-box">
        <img src={this.props.blogimg} alt="blog pic" />
        <div className="blog-text">
          <p>
            <i class="fa fa-calendar"></i>01 March 2020
          </p>
          <h4>{this.props.blogtext}</h4>
        </div>
      </div>
    );
  }
}

export default Blogbox;
