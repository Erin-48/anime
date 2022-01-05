import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="scrollup">
          <a href="#">
            <i class="fa fa-chevron-up"></i>
          </a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 logo">
              <p>
                Ani<span>me</span>
              </p>
            </div>
            <div className="col-md-6">
              <ul className="nav-links">
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="contact">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>
                Copyright ©2022 All rights reserved | This template is made by
                Colorlib
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
