import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <p>
            Ani<span>me</span>
          </p>
        </div>
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
        <div className="nav-icons">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li>
              <Link to="login">
                <i class="fa fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
