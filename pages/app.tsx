import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import logo from "../public/images/logo.png"
import logow from "../public/images/logow.png"
import one from "../public/images/about/1.jpg"
import app2 from "../public/images/app2.png"
import android from "../public/images/android.svg"
import apple from "../public/images/apple.svg"
import map from "../public/images/map.png"
import Image from 'next/legacy/image'

const Apps: NextPage = () => {
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
                      <Image layout="responsive"
                        src={logo}
                        alt=""
                        className="logo-primary"
                      />
                      <Image layout="responsive" src={logow} alt="" className="logo-white" />
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
                        <Link className="nav-link text-primary" href="app"
                          >App</Link                        >
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                          >Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="about"
                            >About us</Link                          >
                          <Link className="dropdown-item" href="team">Team</Link>
                          <Link className="dropdown-item" href="blog">Blog</Link>
                          <Link className="dropdown-item" href="career"
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

      <div className="appss section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="appss-img">
                <Image layout="responsive" className="img-fluid" src={app2} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="appss-content">
                <h3>Mobile app</h3>
                <p>
                  Get the best mobile app to exchange or buy crypto on the go:
                </p>
                <ul>
                  <li><i className="la la-check"></i> Best rates on the market</li>
                  <li><i className="la la-check"></i> High limits</li>
                  <li>
                    <i className="la la-check"></i> No verification for exchange
                    transactions
                  </li>
                  <li>
                    <i className="la la-check"></i> More than 150 cryptocurrencies
                  </li>
                  <li>
                    <i className="la la-check"></i> Buy bitcoin | buy crypto with
                    USD, EUR or GBP
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="#" className="btn btn-success my-1 waves-effect">
                    <Image layout="responsive" src={android} alt="" />
                  </Link>
                  <Link href="#" className="btn btn-success my-1 waves-effect">
                    <Image layout="responsive" src={apple} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wallet-feature section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title">
                <h2>Tendex for wallets</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="wallet-feature-content">
                <span><i className="bi bi-cash"></i></span>
                <h4>Built-in white-label instant exchange</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="wallet-feature-content">
                <span><i className="bi bi-headset"></i></span>
                <h4>Dedicated support line</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="wallet-feature-content">
                <span><i className="bi bi-wallet2"></i></span>
                <h4>Top-up the wallet with 140+ cryptos</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="wallet-feature-content">
                <span><i className="bi bi-x-octagon"></i></span>
                <h4>Vast cross-marketing opportunities</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="wallet-feature-content">
                <span><i className="bi bi-clipboard-check"></i></span>
                <h4>Revenue share from every transaction</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-coin section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Easily send and receive crypto</h2>
                <p>
                  Pay anyone in the world with just their Tendex Wallet username
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="wallet-map text-center">
                <Image layout="responsive" src={map} alt="" className="img-fluid" />
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
                <Image layout="responsive" className="pb-3" src={logow} alt="" />

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

export default Apps;
