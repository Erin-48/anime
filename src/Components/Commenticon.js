import React, { Component } from "react";

export class Commenticon extends Component {
  render() {
    return (
      <div className="comment-icon">
        <div className="comment-img">
          <img src={this.props.commimg} alt="new comment" />
        </div>
        <div className="comment-text">
          <ul>
            <li>Active</li>
            <li>Movie</li>
          </ul>
          <div className="comment-title">
            <p>{this.props.commtitle}</p>
          </div>
          <div className="comment-views">
            <i class="fa fa-eye"></i> 19,141 views
          </div>
        </div>
      </div>
    );
  }
}

export default Commenticon;
