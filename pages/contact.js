import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
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
                href="/"
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
                      <li className="nav-item">
                        <a className="nav-link tm-nav-link" href="/">
                          Videos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link tm-nav-link" href="about">
                          About
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link tm-nav-link" href="contact">
                          Contact <span className="sr-only">(current)</span>
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
      <div className="tm-welcome-container tm-fixed-header tm-fixed-header-3">
        <div className="text-center">
          <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 mt-lg-0 mt-5 text-white mx-auto">
            Talk to Us
            <br />
            about any question you have
          </p>
        </div>
      </div>
      <div id="tm-fixed-header-bg" /> {/* Header image */}
    </div>
    {/* Page content */}
    <main>
      <div className="container-fluid px-0">
        <div className="mx-auto tm-content-container">
          <div className="row mt-3 mb-5 pb-3">
            <div className="col-12">
              <div className="mx-auto tm-about-text-container px-3">
                <h2 className="tm-page-title mb-4 tm-text-primary">
                  Contact our team
                </h2>
                <p className="mb-4">
                  Integer sit amet odio id libero tincidunt dignissim in eget
                  arcu. Aliquam tristique ut magna sit amet tincidunt. Sed
                  tempor tellus nulla, molestie luctus lectus tincidunt id. You
                  are <u>not allowed</u> to re-distribute the template ZIP file
                  on any template collection website.
                </p>
                <p className="mb-4">
                  Video Catalog is a free website template for your business.
                  This is 100% free Bootstrap v4.4.1 layout. You can modify and
                  adapt this template for your CMS websites. You can use it for
                  commercial or non-commercial work. If you wish to suport{" "}
                  <a
                    rel="nofollow"
                    target="_parent"
                    href="https://templatemo.com"
                    className="tm-text-primary"
                  >
                    TemplateMo
                  </a>
                  , please contact us.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto pb-3 tm-about-text-container px-3">
            <div className="row">
              <div className="col-lg-6 mb-5">
                <form
                  id="contact-form"
                  action
                  method="POST"
                  className="tm-contact-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-0"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-0"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="contact-select"
                      name="inquiry"
                    >
                      <option value="-">Subject</option>
                      <option value="sales">Sales &amp; Marketing</option>
                      <option value="creative">Creative Design</option>
                      <option value="uiux">UI / UX</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      rows={8}
                      name="message"
                      className="form-control rounded-0"
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="mapouter mb-60">
                  <div className="gmap_canvas">
                    <iframe
                      width="100%"
                      height={520}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="parallax-window parallax-window-2"
          data-parallax="scroll"
          data-image-src="img/contact-2.jpg"
        />
        <div className="mx-auto tm-content-container mt-4 px-3 mb-3">
          <div className="row">
            <div className="col-12">
              <h2 className="tm-page-title mb-5 tm-text-primary">
                Testimonials
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 pt-3">
              <div className="media tm-testimonial">
                <img
                  className="mr-4 rounded-circle img-fluid"
                  src="img/testimonial-1.jpg"
                  alt="Generic placeholder image"
                />
                <p className="media-body pt-3 tm-testimonial-text">
                  Vestibulum non lectus id lacus aliquet porttitor in non nulla.
                  Aenean urna diam, finibys id lorem nec, feugiat convallis
                  dolor. Integer aliquam, eros eget rutrum iaculis.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-5 pt-3">
              <div className="media tm-testimonial">
                <img
                  className="mr-4 rounded-circle img-fluid"
                  src="img/testimonial-2.jpg"
                  alt="Generic placeholder image"
                />
                <p className="media-body pt-3 tm-testimonial-text">
                  Maecenas et libero in eros laoreet finibus sed vitae diam.
                  Etiam consetetur, nunc sed pretium elementum, diam erat
                  fringilla tortor, placerat condimentum.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-5 pt-3">
              <div className="media tm-testimonial">
                <img
                  className="mr-4 rounded-circle img-fluid"
                  src="img/testimonial-3.png"
                  alt="Generic placeholder image"
                />
                <p className="media-body pt-3 tm-testimonial-text">
                  Aliquam tristique ut magna sit amet tincidunt. Sed tempor
                  tellus nulla, molestie luctus lectus tincidunt id. Cras
                  duismod leo a urna placerat, vel blandit turpis fermentum.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-5 pt-3">
              <div className="media tm-testimonial">
                <img
                  className="mr-4 rounded-circle img-fluid"
                  src="img/testimonial-4.png"
                  alt="Generic placeholder image"
                />
                <p className="media-body pt-3 tm-testimonial-text">
                  Nulla suscipit posuere lectus ut venenatis. Proin sed orci
                  eget tellus euismod vulputate eu eu arcu. Etiam a bibendum
                  lorem. Cura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="container-fluid tm-content-container mx-auto pt-4">
      {/* Subscribe form and footer links */}
      <div className="row pt-3">
        <div className="col-xl-6 col-lg-12 mb-4">
          <div className="tm-bg-gray p-5 h-100">
            <h3 className="tm-text-primary mb-3">
              Do you want to get our latest updates?
            </h3>
            <p className="mb-5">
              Please subscribe our newsletter for upcoming new videos and latest
              information about our work. Thank you.
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
    </div>
  </div>
  	<script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/parallax.min.js"></script>

</>

  )
}
