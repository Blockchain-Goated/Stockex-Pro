import { NextPage } from "next";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import logow from "../public/images/logow.png";
import logo from "../public/images/logo.png";
import ListComponent from "../src/components/ListComponent";
import FooterComponent from "../src/components/FooterComponent";
import HelpCat from "../src/components/helpdesk/HelpCat";
import HelpAuto from "../src/components/helpdesk/HelpAuto";

const Helpdesk: NextPage = () => {
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
                    <Link href="index">
                      <Image
                        layout="responsive"
                        src={logo}
                        alt=""
                        className="logo-primary"
                      />
                      <Image
                        layout="responsive"
                        src={logow}
                        alt=""
                        className="logo-white"
                      />
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Home
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="index">
                            Home 1
                          </Link>
                          <Link className="dropdown-item" href="index2">
                            Home 2
                          </Link>
                          <Link className="dropdown-item" href="index3">
                            Home 3
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="app">
                          App
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="about">
                            About us
                          </Link>
                          <Link className="dropdown-item" href="team">
                            Team
                          </Link>
                          <Link className="dropdown-item" href="blog">
                            Blog
                          </Link>
                          <Link className="dropdown-item" href="career">
                            Career
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle text-primary"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Support
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="contact">
                            Contact us
                          </Link>
                          <Link
                            className="dropdown-item text-primary"
                            href="helpdesk"
                          >
                            Help Desk
                          </Link>
                          <Link className="dropdown-item" href="privacy-policy">
                            Privacy
                          </Link>
                          <Link className="dropdown-item" href="faq">
                            FAQ
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="dashboard">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link className="btn btn-primary" href="signin">
                      Sign in
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="helpdesk-search section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="helpdesk-search-content">
                <p className="mb-1">Tendex knowledge Base</p>
                <h2 className="mb-5">How can we help you today?</h2>
                <div className="helpdesk-form">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-category section-padding">
        <div className="container">
          <div className="row">
            <HelpCat headi="Video Guide" classs="bi bi-camera-video" />
            <HelpCat headi="FAQ" classs="bi bi-clipboard-check" />
            <HelpCat headi="API for developers" classs="bi bi-braces" />
          </div>
          <div className="row justify-content-center">
            <HelpAuto headi="Troubleshooting" />
            <HelpAuto headi="Partnership" />
            <HelpAuto headi="Getting started" />
            <HelpAuto headi="Wallets" />
            <HelpAuto headi="Healthy Tips" />
            <HelpAuto headi="Crypto-definitions" />
          </div>
        </div>
      </div>

      <div className="troubleshooting section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Troubleshooting</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="troubleshooting-content">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>My Transaction</h4>
                    <ul>
                      <li>
                        <Link href="#">My transaction is stuck</Link>
                      </li>
                      <li>
                        <Link href="#">The amount is too low</Link>
                      </li>
                      <li>
                        <Link href="#">Sorry, payment was not received</Link>
                      </li>
                      <li>
                        <Link href="#">Still didn't get my refund</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>My Wallet</h4>
                    <ul>
                      <li>
                        <Link href="#">
                          My wallet address is recognized as invalid
                        </Link>
                      </li>
                      <li>
                        <Link href="#">What does ‘Not yet redeemed?’ mean</Link>
                      </li>
                      <li>
                        <Link href="#">
                          I sent my ABC coins to a non-ABC wallet
                        </Link>
                      </li>
                      <li>
                        <Link href="#">ETH contract addresses</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>Other</h4>
                    <ul>
                      <li>
                        <Link href="#">Customer service doesn't reply</Link>
                      </li>
                      <li>
                        <Link href="#">The amount is too low</Link>
                      </li>
                      <li>
                        <Link href="#">Can't log in</Link>
                      </li>
                      <li>
                        <Link href="#">Can’t enable / disable 2-FA</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-box section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ticket-box-content">
                <h3>Can't find what you're looking for?</h3>
                <p>Let us help you!</p>
                <Link href="#" className="btn btn-dark">
                  Submit Ticket
                </Link>
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
                <Image
                  layout="responsive"
                  className="pb-3"
                  src={logow}
                  alt=""
                />

                <p>
                  Tendex is a unique and beautiful collection of UI elements
                  that are all flexible and modular. A complete and customizable
                  solution to building the website of your dreams.
                </p>
              </div>
            </div>
            <ListComponent />
          </div>
        </div>
      </div>

      <FooterComponent />
    </LandingLayout>
  );
};

export default Helpdesk;
