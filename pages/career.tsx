import { NextPage } from "next";
import { Accordion } from "react-bootstrap";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Career: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <LandingLayout>
        <div className="header landing @@headerClass">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
                      <img
                        src="./images/logo.png"
                        alt=""
                        className="logo-primary"
                      />
                      <img src="./images/logow.png" alt="" className="logo-white" />
                    </Link>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                          >Home
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="/"
                            >Home 1</Link                          >
                          <Link className="dropdown-item" href="index2"
                            >Home 2</Link                          >
                          <Link className="dropdown-item" href="index3"
                            >Home 3</Link                          >
                           </div>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="price">Price</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="app">App</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle text-primary"
                          href="#"
                          data-toggle="dropdown"
                          >Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="about"
                            >About us</Link                          >
                          <Link className="dropdown-item" href="team">Team</Link>
                          <Link className="dropdown-item" href="blog">Blog</Link>
                          <Link
                            className="dropdown-item text-primary"
                            href="career"
                            >Career</Link                          >
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                          >Support
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="contact"
                            >Contact us</Link                          >
                          <Link className="dropdown-item" href="helpdesk"
                            >Help Desk</Link                          >
                          <Link className="dropdown-item" href="privacy-policy"
                            >Privacy</Link                          >
                          <Link className="dropdown-item" href="faq">FAQ</Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="dashboard"
                          >Dashboard</Link                        >
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link className="btn btn-primary" href="signin">Sign in</Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Choose your team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div id="accordion-faq" className="accordion">
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseOne1"
                    >
                      <i className="fa"></i>Business Development & Sales
                    </h4>
                  </div>
                  <div
                    id="collapseOne1"
                    className="collapse show"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Business Development Director
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseTwo2"
                    >
                      <i className="fa"></i>Engineering - Frontend
                    </h4>
                  </div>
                  <div
                    id="collapseTwo2"
                    className="collapse"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Frontend Engineer, Identity
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseThree3"
                    >
                      <i className="fa"></i>Marketing & Communications
                    </h4>
                  </div>
                  <div
                    id="collapseThree3"
                    className="collapse"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Head of Product and Performance Marketing
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="bottom-logo">
                <img className="pb-3" src="./images/logow.png" alt="" />

                <p>
                  Tendex is a unique and beautiful collection of UI elements
                  that are all flexible and modular. A complete and customizable
                  solution to building the website of your dreams.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li><Link href="about">About</Link></li>
                  <li><Link href="career">Career</Link></li>
                  <li><Link href="#">Affiliate</Link></li>
                  <li><Link href="team">Our Team</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li><Link href="contact">Contact us</Link></li>
                  <li><Link href="faq">FAQ</Link></li>
                  <li><Link href="blog">Blog</Link></li>
                  <li><Link href="helpdesk">Helpdesk</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pair</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <ul>
                      <li><Link href="#">ETH to BTC</Link></li>
                      <li><Link href="#">BTC to ETH</Link></li>
                      <li><Link href="#">LTC to ETH</Link></li>
                      <li><Link href="#">USDT to BTC</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul>
                      <li><Link href="#">BTC to USDT</Link></li>
                      <li><Link href="#">LTC to BTC</Link></li>
                      <li><Link href="#">XMR to BTC</Link></li>
                      <li><Link href="#">ETC to DASH</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright <span id="year"></span> <Link href="#">Tendex</Link> I
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link href="#"><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-twitter"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-linkedin"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Career;
