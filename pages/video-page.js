import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
 ;<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Video Catalog</title>
  <link rel="stylesheet" href="fontawesome/css/all.min.css" />{" "}
  {/* https://fontawesome.com/ */}
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
    rel="stylesheet"
  />
  {/* https://fonts.google.com/ */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/templatemo-video-catalog.css" />
  {/*

TemplateMo 552 Video Catalog

https://templatemo.com/tm-552-video-catalog

*/}
  <div className="tm-page-wrap mx-auto">
    <div className="position-relative">
      <div className="potition-absolute tm-site-header">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-7 col-md-4">
              <a
                href="index.html"
                className="tm-bg-black text-center tm-logo-container"
              >
                <i className="fas fa-video tm-site-logo mb-3" />
                <h1 className="tm-site-name">Video Catalog</h1>
              </a>
            </div>
            <div className="col-5 col-md-8 ml-auto mr-0">
              <div className="tm-site-nav">
                <nav
                  className="navbar navbar-expand-lg mr-0 ml-auto"
                  id="tm-main-nav"
                >
                  <button
                    className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-nav"
                    aria-controls="navbar-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span>
                      <i className="fas fa-bars tm-menu-closed-icon" />
                      <i className="fas fa-times tm-menu-opened-icon" />
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse tm-nav"
                    id="navbar-nav"
                  >
                    <ul className="navbar-nav text-uppercase">
                      <li className="nav-item active">
                        <a className="nav-link tm-nav-link" href="index.html">
                          Videos <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link tm-nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link tm-nav-link" href="contact.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tm-welcome-container tm-fixed-header tm-fixed-header-1">
        <div className="text-center">
          <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">
            Background image can be fixed. Content will simply slide over.
          </p>
        </div>
      </div>
      {/* Header image */}
      <div id="tm-fixed-header-bg" />
    </div>
    {/* Page content */}
    <div className="container-fluid">
      <div className="mx-auto tm-content-container">
        <main>
          <div className="row mb-5 pb-4">
            <div className="col-12">
              {/* Video player 1422x800 */}
              <video width={1422} height={800} controls autoPlay>
                <source src="video/wheat-field.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="row mb-5 pb-5">
            <div className="col-xl-8 col-lg-7">
              {/* Video description */}
              <div className="tm-video-description-box">
                <h2 className="mb-5 tm-video-title">
                  Mauris dapibus urna nec ipsum posuere
                </h2>
                <p className="mb-4">
                  Cras dictum pretium est, et imperdiet ex. Fusce vitae
                  vestibulum ipsum. Maecenas ultricies ipsum a urna ullamcorper,
                  id interdum est blandit. Vivamus sit amet justo sed erat
                  iaculis consequat. Nulla suscipit posuere lectus ut venenatis.
                  Proin sed orci eget tellus euismod vulputate eu eu arcu.
                </p>
                <p className="mb-4">
                  Etiam a bibendum lorem. Curabitur ac bibendum odio. Vivamus
                  euismod dui mauris, ut tincidunt mi congue quis. Phasellus
                  luctus orci dolor, a luctus massa tincidunt vitae. Integer sit
                  amet odio id libero tincidunt dignissim in eget arcu.
                </p>
                <p className="mb-4">
                  Aliquam tristique ut magna sit amet tincidunt. Sed tempor
                  tellus nulla, molestie luctus lectus tincidunt id. Cras
                  euismod leo a urna placerat, vel blandit turpis fermentum.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/* Share box */}
              <div className="tm-bg-gray tm-share-box">
                <h6 className="tm-share-box-title mb-4">Share this video</h6>
                <div className="mb-5 d-flex">
                  <a href className="tm-bg-white tm-share-button">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href className="tm-bg-white tm-share-button">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href className="tm-bg-white tm-share-button">
                    <i className="fab fa-pinterest" />
                  </a>
                  <a href className="tm-bg-white tm-share-button">
                    <i className="far fa-envelope" />
                  </a>
                </div>
                <p className="mb-4">
                  Author:{" "}
                  <a href="https://templatemo.com" className="tm-text-link">
                    TemplateMo
                  </a>
                </p>
                <a
                  href="#"
                  className="tm-bg-white px-5 mb-4 d-inline-block tm-text-primary tm-likes-box tm-liked"
                >
                  <i className="fas fa-heart mr-3 tm-liked-icon" />
                  <i className="far fa-heart mr-3 tm-not-liked-icon" />
                  <span id="tm-likes-count">486 likes</span>
                </a>
                <div>
                  <button className="btn btn-primary p-0 tm-btn-animate tm-btn-download tm-icon-download">
                    <span>Download Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4 pb-5">
            <div className="col-12">
              <h2 className="mb-5 tm-text-primary">Related Videos for You</h2>
              <div className="row tm-catalog-item-list">
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-01.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Nam tincidunt consectetur
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-02.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Praesent posuere rhoncus
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-03.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Turpis massa aliquam
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-04.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Nam tincidunt consectetur
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-05.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Praesent posuere rhoncus
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src="img/tn-06.jpg"
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-3 tm-catalog-item-description">
                    <h3 className="tm-text-gray text-center tm-catalog-item-title">
                      Turpis massa aliquam
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Subscribe form and footer links */}
        <div className="row mt-5 pt-3">
          <div className="col-xl-6 col-lg-12 mb-4">
            <div className="tm-bg-gray p-5 h-100">
              <h3 className="tm-text-primary mb-3">
                Do you want to get our latest updates?
              </h3>
              <p className="mb-5">
                Please subscribe our newsletter for upcoming new videos and
                latest information about our work. Thank you.
              </p>
              <form action method="GET" className="tm-subscribe-form">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email..."
                  required
                />
                <button
                  type="submit"
                  className="btn rounded-0 btn-primary tm-btn-small"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
            <div className="p-5 tm-bg-gray">
              <h3 className="tm-text-primary mb-4">Quick Links</h3>
              <ul className="list-unstyled tm-footer-links">
                <li>
                  <a href="#">Duis bibendum</a>
                </li>
                <li>
                  <a href="#">Purus non dignissim</a>
                </li>
                <li>
                  <a href="#">Sapien metus gravida</a>
                </li>
                <li>
                  <a href="#">Eget consequat</a>
                </li>
                <li>
                  <a href="#">Praesent eu pulvinar</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
            <div className="p-5 tm-bg-gray h-100">
              <h3 className="tm-text-primary mb-4">Our Pages</h3>
              <ul className="list-unstyled tm-footer-links">
                <li>
                  <a href="#">Our Videos</a>
                </li>
                <li>
                  <a href="#">License Terms</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* row */}
        <footer className="row pt-5">
          <div className="col-12">
            <p className="text-right">
              Copyright 2020 The Video Catalog Company - Designed by{" "}
              <a href="https://templatemo.com" rel="nofollow" target="_parent">
                TemplateMo
              </a>
            </p>
          </div>
        </footer>
      </div>{" "}
      {/* .tm-content-container */}
    </div>
  </div>
	<script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/drugi.js"></script>

</>
 
  )
}
