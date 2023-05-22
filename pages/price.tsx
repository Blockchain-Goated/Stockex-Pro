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
import FooterComponent from "../src/components/FooterComponent";
import PriceOne from "../src/components/Price/PriceOne";

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
            <PriceOne
              classs="price-widget bg-btc"
              classss="cc BTC"
              coin="Bitcoin"
              price="$ 11,785.10"
              chart_class="chart"
            />

            <PriceOne
              classs="price-widget bg-eth"
              classss="cc ETH"
              coin="Ethereum"
              price="$ 11,785.10"
              chart_class="chart2"
            />

            <PriceOne
              classs="price-widget bg-usdt"
              classss="cc USDT"
              coin="Tether"
              price="$ 11,785.10"
              chart_class="chart3"
            />

            <PriceOne
              classs="price-widget bg-xrp"
              classss="cc XRP"
              coin="Ripple"
              price="$ 11,785.10"
              chart_class="chart4"
            />

            <PriceOne
              classs="price-widget bg-ltc"
              classss="cc LTC"
              coin="Litecoin"
              price="$ 11,785.10"
              chart_class="chart5"
            />

            <PriceOne
              classs="price-widget bg-ada"
              classss="cc ADA"
              coin="Cardano"
              price="$ 11,785.10"
              chart_class="chart6"
            />

            <PriceOne
              classs="price-widget bg-eos"
              classss="cc EOS"
              coin="EOS"
              price="$ 11,785.10"
              chart_class="chart7"
            />

            <PriceOne
              classs="price-widget bg-xmr"
              classss="cc XMR"
              coin="Monero"
              price="$ 11,785.10"
              chart_class="chart8"
            />

            <PriceOne
              classs="price-widget bg-xtz"
              classss="cc XTZ"
              coin="Tezos"
              price="$ 11,785.10"
              chart_class="chart9"
            />
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
            <FooterComponent />
          </div>
        </div>
      </div>

      <FooterComponent />
    </LandingLayout>
  );
};

export default Price;
