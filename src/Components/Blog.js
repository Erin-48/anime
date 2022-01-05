import React, { Component } from "react";
import Blogbox from "./Blogbox";

export class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-banner">
          <h1>Our Blog</h1>
          <p>Welcome to the official Anime blog</p>
        </div>
        <div className="blog-content container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-1.jpg.webp"
                    blogtext="Yuri Kuma Arashi Viverra Tortor Pharetra"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-4.jpg.webp"
                    blogtext="Bok no Hero Academia Season 4 – 18"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-5.jpg.webp"
                    blogtext="Fate/Stay Night: Untimated Blade World"
                  />
                </div>
                <div className="col-lg-12">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-7.jpg.webp"
                    blogtext="Housekishou Richard shi no Nazo Kantei Season 08 - 20"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-10.jpg.webp"
                    blogtext="Fate/Stay Night: Untimated Blade World"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-11.jpg.webp"
                    blogtext="Building a Better LiA Drilling Down"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-2.jpg.webp"
                    blogtext="Fate/Stay Night: Untimated Blade World"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-3.jpg.webp"
                    blogtext="Building a Better LiA Drilling Down"
                  />
                </div>
                <div className="col-lg-12">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-6.jpg.webp"
                    blogtext="Yuri Kuma Arashi Viverra Tortor Pharetra"
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-8.jpg.webp"
                    blogtext="Bok no Hero Academia Season 4 – 18"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-9.jpg.webp"
                    blogtext="Fate/Stay Night: Untimated Blade World"
                  />
                </div>
                <div className="col-lg-12">
                  <Blogbox
                    blogimg="https://preview.colorlib.com/theme/anime/img/blog/blog-12.jpg.webp"
                    blogtext="Yuri Kuma Arashi Viverra Tortor Pharetra"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
