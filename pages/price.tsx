import { NextPage } from "next";
import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
// import PriceChart from "../src/components/PriceChart";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import logow from "../public/images/logow.png";
import Synthex from "../public/images/synthex.png";

const PriceChart = dynamic(() => import("../src/components/PriceChart"), {
  ssr: false,
});

const Price: NextPage = () => {
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
      <div className="header landing bg-dark light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="index">
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-primary"
                        width={113}
                        height={21}
                      />
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-white"
                        width={339}
                        height={63}
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
                        <Link className="nav-link text-primary" href="index">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="price-details">
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

      <div className="price-grid section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Latest price</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-btc">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc BTC"></i>
                      <span>Bitcoin</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eth">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc ETH"></i>
                      <span>Ethereum</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart2"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-usdt">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc USDT"></i>
                      <span>Tether</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart3"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xrp">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc XRP"></i>
                      <span>Ripple</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart4"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ltc">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc LTC"></i>
                      <span>Litecoin</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart5"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ada">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc ADA"></i>
                      <span>Cardano</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart6"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eos">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc EOS"></i>
                      <span>EOS</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart7"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xmr">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc XMR"></i>
                      <span>Monero</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart8"></div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xtz">
                <Link href="price-details">
                  <div className="price-content">
                    <div className="icon-title">
                      <i className="cc XTZ"></i>
                      <span>Tezos</span>
                    </div>
                    <h5>$ 11,785.10</h5>
                  </div>
                  <div id="chart9"></div>
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
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="career">Career</Link>
                  </li>
                  <li>
                    <Link href="#">Affiliate</Link>
                  </li>
                  <li>
                    <Link href="team">Our Team</Link>
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
                    <Link href="faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="helpdesk">Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pair</h4>
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

      <FooterComponent />
    </LandingLayout>
  );
};

export default Price;
