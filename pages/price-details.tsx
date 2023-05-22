import { NextPage, GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import Link from "next/dist/client/link";
import { copyText } from "../src/utils/utils";
import { useSession } from "next-auth/react";
import Synthex from "../public/images/synthex.png";
import Image from "next/legacy/image";
import { useRef, useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { MyData, MyComponentProps } from "../src/types/priceDetailsTypes";
import { useQuery } from "react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import FooterComp from "../src/components/FooterComp";
import FooterComponent from "../src/components/FooterComponent";
import PriceDetailsOne from "../src/components/price-details/PriceDetailsOne";
import PriceDetailsTwo from "../src/components/price-details/PriceDetailsTwo";

const PriceDetailsChart = dynamic(
  () => import("../src/components/PriceDetailsChart"),
  {
    ssr: false,
  }
);

const PriceDetails: NextPage<MyComponentProps> = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const balanceOf_ = (e: any) => {
    e.preventDefault();
  };

  const copy = (e: any) => {
    e.preventDefault();
  };

  const sellToken_ = (e: any) => {
    e.preventDefault();
  };
  const buyToken_ = (e: any) => {
    e.preventDefault();
  };

  const [ctx, setCtx] = useState<any>(null);

  const queryParamsOne = new URLSearchParams({
    type: "hist",
    symbol: "AAPL",
  });

  const queryParamsTwo = new URLSearchParams({
    type: "hist",
    symbol: "AMZN",
  });

  const url1 = `http://localhost:3000/api/stocks?${queryParamsOne}`;
  const url2 = `http://localhost:3000/api/stocks?${queryParamsTwo}`;

  const fetchStocks = async (url: string) => {
    const response = await fetch(url, { method: "GET" });
    return response.json() as Promise<MyData[]>;
  };

  const { data: data1 } = useQuery(["stocks", url1], () => fetchStocks(url1), {
    staleTime: 1000 * 60 * 60 * 24,
  });
  const { data: data2 } = useQuery(["stocks", url2], () => fetchStocks(url2), {
    staleTime: 1000 * 60 * 60 * 24,
  });

  console.log(`Data is : ${data1}`);

  const options = {
    title: {
      text: "Stock Chart",
    },
    xAxis: {
      type: "category",
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
    plotOptions: {
      series: {
        turboThreshold: 10000,
      },
    },
    series: [
      {
        name: "Stock Price 1",
        data: data1,
      },
      {
        name: "Stock Price 2",
        data: data2,
      },
    ],
  };

  return (
    <LandingLayout>
      <div id="main-wrapper" className="show">
        <div className="header landing bg-dark light">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="navigation">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="brand-logo">
                      <Link href="/">
                        <Image
                          src={Synthex}
                          alt=""
                          className="logo-primary"
                          width={113}
                          height={21}
                          layout="responsive"
                        />
                        <Image
                          layout="responsive"
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
                          <Link className="nav-link text-primary" href="/">
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

        <div className="price-details content-body">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <div className="this-coin-price">
                      <h3>
                        1,145,062.90
                        <sub>USD</sub>
                      </h3>
                      <span className="text-danger">
                        -0.2.30% <i className="icofont-arrow-down"></i>
                      </span>
                    </div>
                    <div>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                    </div>
                    <div className="chart-content text-center">
                      <div className="row">
                        <PriceDetailsOne
                          para="24hr Volume"
                          headi="$1236548.325"
                        />

                        <PriceDetailsOne para="Market Cap" headi="19B USD" />

                        <PriceDetailsOne
                          para="Circulating Supply"
                          headi="29.4M BTC"
                        />

                        <PriceDetailsOne
                          para="All Time High"
                          headi="19.783.06 USD"
                        />

                        <PriceDetailsOne
                          para="Typical hold time"
                          headi="88 days"
                        />

                        <PriceDetailsOne
                          para="Trading activity"
                          headi="70% buy"
                        />

                        <PriceDetailsOne
                          para="Popularity"
                          headi="#1 most held"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Price correlation with</h4>
                  </div>
                  <div className="card-body">
                    <ul className="balance-widget">
                      <PriceDetailsTwo
                        classs="cc BTC"
                        coin="Bitcoin"
                        small="Moves together"
                        price="0.000242 USD"
                        perc="64%"
                      />

                      <PriceDetailsTwo
                        classs="cc LTC"
                        coin="Litecoin"
                        small="Moves together"
                        price="0.000242 USD"
                        perc="0.125 %"
                      />

                      <PriceDetailsTwo
                        classs="cc XRP"
                        coin="Ripple"
                        small="Moves together"
                        price="0.000242 USD"
                        perc="0.125 %"
                      />

                      <PriceDetailsTwo
                        classs="cc DASH"
                        coin="Dash"
                        small="Moves together"
                        price="0.000242 USD"
                        perc="0.125 %"
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="invite-content">
                      <h4>Get your current token balance</h4>
                      <p>
                        How much TCS token do you hold?
                        <br />
                        <br />
                        <Link href="#">Learn more</Link>
                      </p>

                      <div className="copy-link">
                        <form action="#">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="myInput"
                              value="100"
                              readOnly
                            />
                            <span
                              onClick={balanceOf_}
                              className="input-group-text c-pointer"
                            >
                              Fetch
                            </span>
                          </div>
                        </form>
                      </div>

                      <div className="social-share-link">
                        <Link href="#">
                          <span>
                            <i className="icofont-facebook"></i>
                          </span>
                        </Link>
                        <Link href="#">
                          <span>
                            <i className="icofont-twitter"></i>
                          </span>
                        </Link>
                        <Link href="#">
                          <span>
                            <i className="icofont-whatsapp"></i>
                          </span>
                        </Link>
                        <Link href="#">
                          <span>
                            <i className="icofont-telegram"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Deposit</h4>
                  </div>
                  <div className="card-body">
                    <div className="price-deposit">
                      <form action="#">
                        <label className="form-label">
                          BTC Deposit Address
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="myInput"
                            value="35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH"
                          />
                          <span
                            onClick={copy}
                            className="input-group-text c-pointer"
                          >
                            Copy
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="mt-4">
                      <Link href="#" className="btn btn-primary btn-block">
                        Withdraw BTC
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Buy</h4>
                  </div>
                  <div className="card-body">
                    <label className="form-label">Buy TCSX</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.012  Matic"
                        id="buyTokenInput"
                      />
                      <select className="form-control" name="method">
                        <option value="tcs_token">TCSX</option>
                        <option value="reliance_token">RELIANCEX</option>
                        <option value="hdfc_token">HDFCX</option>
                      </select>
                    </div>

                    <button
                      name="buy"
                      className="btn btn-success btn-block mt-4"
                      onClick={buyToken_}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Sell</h4>
                  </div>
                  <div className="card-body">
                    <label className="form-label">Sell TCSX</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.012  Matic"
                        id="sellTokenInput"
                      />
                      <select className="form-control" name="method">
                        <option value="tcs_token">TCSX</option>
                        <option value="reliance_token">RELIANCEX</option>
                        <option value="hdfc_token">HDFCX</option>
                      </select>
                    </div>

                    <button
                      name="sell"
                      className="btn btn-success btn-block mt-4"
                      onClick={sellToken_}
                    >
                      Sell Now
                    </button>
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
                <Image
                  layout="responsive"
                  className="pb-3"
                  src={Synthex}
                  alt=""
                  width={339}
                  height={63}
                  style={{ verticalAlign: "top" }}
                />

                <p>
                  <br />A decentralized fintech platform that allows you to
                  create and trade customized synthetic assets.
                </p>
              </div>
            </div>
            {/* <FooterComponent /> */}
          </div>
        </div>
      </div>

      <FooterComp />
    </LandingLayout>
  );
};

export default PriceDetails;
