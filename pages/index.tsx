import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
// import "../styles/styles.css";
import Synthex from "../public/images/Synthex.png";
import api from "../public/images/demo/api.jpg";
import Image from "next/legacy/image";
import logow from "../public/images/logow.png";
import logo from "../public/images/logo.png";
import blockchain from "../public/images/blockchain.png";
import art_photo_2 from "../public/images/art-photo-2.jpg";

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(`Session is ${JSON.stringify(session)}`);
  const router = useRouter();

  const priceDetails = (e: any) => {
    e.preventDefault();
    router.push("/price-details");
  };

  const sliderProps = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <LandingLayout>
      <div className="header landing bg-dark light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="">
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-primary"
                        width={113}
                        height={21}
                        layout="responsive"
                      />
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-white"
                        width={339}
                        height={63}
                        layout="responsive"
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
                        <Link className="nav-link text-primary" href="">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          onClick={(e) => {
                            priceDetails(e);
                          }}
                        >
                          App
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" href="blog">
                          Company
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" href="contact">
                          Support
                        </Link>
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

      <div className="intro2 section-padding bg-dark" id="intro">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="intro-content">
                <h1 className="text-white">
                  Buy and sell <br /> tokenized assets
                </h1>
                <p>
                  Easy and fast way to trade your <br />
                  favourite company's stocks
                </p>
                <div className="intro-form">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Premium access"
                    />
                    <button type="submit">
                      <i className="la la-arrow-right first"></i>
                      <i className="la la-arrow-right second"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="intro-form-exchange">
                <form
                  name="myform"
                  className="currency_validate trade-form row g-3"
                >
                  <div className="col-12">
                    <label className="form-label">Buy</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="tcs">TCS</option>
                        <option value="reliance">RELIANCE</option>
                        <option value="hdfcbank">HDFC Bank</option>
                        <option value="icicibank">ICICI Bank</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.012  Matic"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Sell</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="reliance">RELIANCE</option>
                        <option value="tcs">TCS</option>
                        <option value="hdfcbank">HDFC Bank</option>
                        <option value="icicibank">ICICI Bank</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.012  Matic"
                      />
                    </div>
                  </div>

                  <p className="mb-0">
                    1 MATIC ~ 95.90 INR <br />
                    <Link href="#">Expected rate</Link>
                  </p>
                  <button type="button" className="btn btn-primary">
                    Buy Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="market section-padding page-section"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>An Amazing Tokenized Asset Exchange</h2>
                <p>
                  Trade Futures tokens, Stock tokens, and hundreds of other{" "}
                  <br /> financial derivatives in minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="market-table">
                <div className="table-responsive">
                  <table className="table mb-0 table-responsive-sm table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="coin_icon">
                          <i className="cc BTC"></i>
                          <span>
                            Bitcoin <b>BTC</b>
                          </span>
                        </td>

                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td>
                          <span className="sparkline8"></span>
                        </td>
                        <td>
                          <Link href="#" className="btn btn-success">
                            Buy
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="coin_icon">
                          <i className="cc ETH"></i>
                          <span>
                            Ethereum <b>ETH</b>
                          </span>
                        </td>

                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td>
                          <span className="sparkline8"></span>
                        </td>
                        <td>
                          <Link href="#" className="btn btn-success">
                            Buy
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="coin_icon">
                          <i className="cc BCH-alt"></i>
                          <span>
                            Bitcoin Cash <b>BCH</b>
                          </span>
                        </td>

                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td>
                          <span className="sparkline8"></span>
                        </td>
                        <td>
                          <Link href="#" className="btn btn-success">
                            Buy
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="coin_icon">
                          <i className="cc LTC"></i>
                          <span>
                            Litecoin <b>LTC</b>
                          </span>
                        </td>

                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-danger">-0.47%</span>
                        </td>
                        <td>
                          <span className="sparkline8"></span>
                        </td>
                        <td>
                          <Link href="#" className="btn btn-success">
                            Buy
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-star"></i>
                </span>
                <h4>Best rates on the market</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-heart"></i>
                </span>
                <h4>Transparent 0.25% fee</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-clock"></i>
                </span>
                <h4>5-30 min transactions</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-cash"></i>
                </span>
                <h4>High exchange limits</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-headset"></i>
                </span>
                <h4>24/7 live chat support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-feature section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title">
                <h2 className="text-start">24-hour statistics</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere odit fuga nesciunt similique rerum nulla asperiores
                  ullam deserunt architecto inventore.
                </p>
              </div>
              <div className="product-feature-content">
                <div className="row">
                  <div className="col-6">
                    <div className="product-feature-text">
                      <h4>
                        <span>
                          <i className="bi bi-person"></i>
                        </span>{" "}
                        27 %
                      </h4>
                      <p>New users</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product-feature-text">
                      <h4>
                        <span>
                          <i className="bi bi-people"></i>
                        </span>{" "}
                        73 %
                      </h4>
                      <p>Regular users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-primary">
                      <i className="bi bi-cash-stack"></i>
                    </span>
                    <h4>1900</h4>
                    <p>Transactions made</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-secondary">
                      <i className="bi bi-trophy"></i>
                    </span>
                    <h4>ETH-BTC</h4>
                    <p>Today's champion pair</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-success">
                      <i className="bi bi-people"></i>
                    </span>
                    <h4>27 150</h4>
                    <p>Visits today</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-info">
                      <i className="bi bi-clock"></i>
                    </span>
                    <h4>14.0 minutes</h4>
                    <p>Average processing time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-product section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title">
                <h2>So, What brings new product today?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="new-product-content">
                <Image
                  className="Image-fluid"
                  src={api}
                  alt=""
                  layout="responsive"
                />
                <h4>Integrate our API</h4>
                <p>
                  A white-label solution for your project, whether it is a
                  wallet, a marketplace or a service provider. Set it up to
                  accept any of 140+ cryptocurrencies listed on Tendex and get
                  revenue for each transaction made.
                </p>
                <Link href="#" className="btn btn-dark px-4">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="new-product-content">
                <Image
                  className="Image-fluid"
                  src={Synthex}
                  alt=""
                  layout="responsive"
                />
                <h4>Join our Affiliate Program</h4>
                <p>
                  Place an affiliate link or customizable widget on your
                  website, blog or social media profile. Get 50% of our revenue
                  from every transaction made via either of the tools used.
                </p>
                <Link href="#" className="btn btn-outline-dark px-4">
                  Become an affiliate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trust section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-flower1"></i>
                </span>
                <h4>EASY</h4>
                <p>
                  Create an account, choose your crypto, input your receiving
                  address, and send your funds
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-shield-lock"></i>
                </span>
                <h4>SAFE</h4>
                <p>
                  As a non-custodial exchange, we don’t hold your deposits, so
                  your funds are never vulnerable to hacks.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-brightness-high"></i>
                </span>
                <h4>COMPETITIVE</h4>
                <p>
                  Our exchange rates are updated in real time. What you see is
                  what you get--with no additional fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <span>Ask Question</span>
                <h2>Let us hear from you directly!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12">
              <div className="info-list">
                <h4 className="mb-3">Address</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> Vishwakarma Institute
                    of Technology, Pune
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (+91) 988 121 0225
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    mustansir.bohari21@vit.edu
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12">
              <form name="myform" className="contact_validate">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Full name </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Full name"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Email </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control p-3"
                        name="message"
                        rows="5"
                        placeholder="Tell us what we can help you with!"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send message
                </button>
              </form>
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
                  className="pb-3"
                  src={Synthex}
                  alt=""
                  width={339}
                  height={63}
                  layout="responsive"
                  style={{ verticalAlign: "top" }}
                />

                <p>
                  <br />A decentralized fintech platform that allows you to
                  create and trade customized synthetic assets.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Affiliate</Link>
                  </li>
                  <li>
                    <Link href="blog">Our Team</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pairs</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <ul>
                      <li>
                        <Link href="#">ETH to BTC</Link>
                      </li>
                      <li>
                        <Link href="#">BTC to ETH</Link>
                      </li>
                      <li>
                        <Link href="#">LTC to ETH</Link>
                      </li>
                      <li>
                        <Link href="#">USDT to BTC</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul>
                      <li>
                        <Link href="#">BTC to USDT</Link>
                      </li>
                      <li>
                        <Link href="#">LTC to BTC</Link>
                      </li>
                      <li>
                        <Link href="#">XMR to BTC</Link>
                      </li>
                      <li>
                        <Link href="#">ETC to DASH</Link>
                      </li>
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
                  © Copyright <span id="year"></span>{" "}
                  <Link href="#">Mustansir</Link> I All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-youtube"></i>
                    </Link>
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
export default Index;
