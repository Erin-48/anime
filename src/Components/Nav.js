import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <header>
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
              <ul className="sub-menu">
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Anime Details</a>
                </li>
                <li>
                  <a href="#">Anime Watching</a>
                </li>
                <li>
                  <a href="#">Blog Details</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Log In</a>
                </li>
              </ul>
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
        <div className="menu">
          <div className="menu-item">
            <p>
              Menu{" "}
              <span>
                <i class="fa fa-bars"></i>
              </span>
            </p>
          </div>
          <ul className="dropdown">
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Nav;
