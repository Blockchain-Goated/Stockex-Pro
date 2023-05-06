import { NextPage } from "next";
import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
import PerfectScrollbar from "react-perfect-scrollbar";
import Balance from "../src/components/Balance";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { copyText } from "../src/utils/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/legacy/image'

const PriceChart = dynamic(() => import("../src/components/PriceChart"), {
  ssr: false,
});
const AnalyticChart = dynamic(
  () => import("../src/components/AnalyticsChart"),
  {
    ssr: false,
  }
);

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <>
     <div className="header landing bg-dark light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
                      <img
                        src="./images/Synthex.png"
                        alt=""
                        className="logo-primary"
                        width="113px" height="21px"
                      />
                      <img src="./images/Synthex.png" alt="" className="logo-white" width="339px" height="63px"/>
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
                          className="nav-link text-primary"
                          href="/"
                          >Home
                        </Link>
                      </li>
                     
                      <li className="nav-item">
                        <Link className="nav-link price" href="#">Price</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link price-details" href="#">App</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link
                          blog"
                          >Company
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link
                          contact"
                          >Support
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link dashboard" href="#"
                          >Dashboard</Link                        >
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link className="btn btn-primary signin" href="#">Sign in</Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
       </div>

      <div className="sidebar">
        <div className="brand-logo">
          <Link href="/"
            ><img src="./images/blockchain.png" alt="" width="30" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link
                href="dashboard"
                data-toggle="tooltip"
                data-placement="right"
                title="Home"
              >
                <span><i className="bi bi-house"></i></span>
              </Link>
            </li>
            <li>
              <Link
                href="trade"
                data-toggle="tooltip"
                data-placement="right"
                title="Trade"
              >
                <span><i className="bi bi-globe2"></i></span>
              </Link>
            </li>
            <li>
              <Link
                href="wallet"
                data-toggle="tooltip"
                data-placement="right"
                title="Wallet"
              >
                <span><i className="bi bi-wallet2"></i></span>
              </Link>
            </li>
            <li>
              <Link
                href="settings-profile"
                data-toggle="tooltip"
                data-placement="right"
                title="Settings"
                id="settings"
              >
                <span><i className="bi bi-gear"></i></span>
              </Link>
            </li>
            <li className="logout">
              <Link
                href="signin"
                data-toggle="tooltip"
                data-placement="right"
                title="Signout"
              >
                <span><i className="bi bi-power"></i></span>
              </Link>
            </li>
          </ul>

          <p className="copyright">&#169; <Link href="#">Qkit</Link></p>
        </div>
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-content">
                <p>
                  
                  <strong></strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-6">
                  <div className="card welcome-profile">
                    <div className="card-body">
                      <img src="./images/profile/Art Photo 2.jpeg" alt="" />
                      <h4>Hi, Mustansir Bohari!</h4>
                      <p>
                        Looks like you are not verified yet. Verify yourself to
                        use the full potential of Tendex.
                      </p>

                      <ul>
                        <li>
                          <Link href="#">
                            <span className="verified"
                              ><i className="icofont-check"></i
                            ></span>
                            Verify account
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="not-verified"
                              ><i className="icofont-close-line"></i
                            ></span>
                            Two-factor authentication (2FA)
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="not-verified"
                              ><i className="icofont-close-line"></i
                            ></span>
                            Deposit money
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-12 col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Quick Trade</h4>
                    </div>
                    <div className="card-body">
                      <form
                        name="myform"
                        className="currency_validate trade-form row g-3"
                      >
                        <div className="col-12">
                          <label className="form-label">You Send</label>
                          <div className="input-group">
                            <select className="form-select" name="method">
                              <option value="bank">USD</option>
                              <option value="master">Euro</option>
                            </select>
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control"
                              placeholder="0.0214 BTC"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label className="form-label">You get</label>
                          <div className="input-group">
                            <select className="form-select" name="method">
                              <option value="bank">BTC</option>
                              <option value="master">ETH</option>
                            </select>
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control"
                              placeholder="0.0214 BTC"
                            />
                          </div>
                        </div>

                        <p className="mb-0">
                          1 USD ~ 0.000088 BTC
                          <Link href="#">Expected rate <br />No extra fees</Link>
                        </p>

                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary btn-block"
                        >
                          Exchange Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Position Valuation</h4>
                    </div>
                    <div className="card-body">
                      <ul className="balance-widget position-value">
                        <li>
                          <h5>Opening Cost</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span>Original cost of all open positions.</span>
                          </div>
                        </li>
                        <li>
                          <h5>Current Valuation</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span>Paper valuation of all open positions.</span>
                          </div>
                        </li>
                        <li>
                          <h5>Profit</h5>
                          <div className="text-end">
                            <h5>$0.0000 (0,00%)</h5>
                            <span>Paper profit of all open positions..</span>
                          </div>
                        </li>
                        <li>
                          <h5>Loss</h5>
                          <div className="text-end">
                            <h5>$0.0000 (0,00%)</h5>
                            <span>Paper loss of all open positions.</span>
                          </div>
                        </li>
                        <li>
                          <h5>Fees</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span>Current Fee</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-12 col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="invite-content">
                        <h4>Invite a friend and get $30</h4>
                        <p>
                          You will receive up to $30 when they： 1.Buy Crypto 2.
                          Deposit 3. Finish Trading Tasks <br /><Link href="#"
                            >Learn more</Link                          >
                        </p>

                        <div className="copy-link">
                          <form action="#">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                id="myInput"
                                value="https://www.Tendex.io/join/12345"
                              />
                              <span
                                onClick="copy()"
                                className="input-group-text c-pointer"
                                >Copy</span
                              >
                            </div>
                          </form>
                        </div>

                       
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="col-xl-9">
              <div className="row">
                <div className="col-xxl-8 col-xl-8">
                  <div className="card home-chart">
                    <div className="card-header">
                      <h4 className="card-title home-chart">Analytics</h4>
                      <select
                        className="form-select d-none"
                        name="report-type"
                        id="report-select"
                      >
                        <option value="1">Bitcoin</option>
                        <option value="2">Litecoin</option>
                      </select>
                    </div>
                    <div className="card-body">
                      <div className="home-chart-height">
                        <div className="row">
                          <div
                            className="
                              col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6
                            "
                          >
                            <div className="chart-price-value">
                              <span>24hr Volume</span>
                              <h5>$236,368.00</h5>
                            </div>
                          </div>
                          <div
                            className="
                              col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6
                            "
                          >
                            <div className="chart-price-value">
                              <span>Marketcap</span>
                              <h5>$236.025B USD</h5>
                            </div>
                          </div>
                          <div
                            className="
                              col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6
                            "
                          >
                            <div className="chart-price-value">
                              <span>24hr Volume</span>
                              <h5>56.3 BTC</h5>
                            </div>
                          </div>
                          <div
                            className="
                              col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6
                            "
                          >
                            <div className="chart-price-value">
                              <span>All Time High</span>
                              <h5>$236,368.00</h5>
                            </div>
                          </div>
                        </div>
                        <div id="chartx"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Trade Balances</h4>
                    </div>
                    <div className="card-body">
                      <ul className="balance-widget trade-balance">
                        <li>
                          <h5>Trade Balance</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span>Total margin currency balance.</span>
                          </div>
                        </li>
                        <li>
                          <h5>Equity</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span
                              >Trade balance combined with unrealized
                              profit/loss</span
                            >
                          </div>
                        </li>
                        <li>
                          <h5>Used Margin</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span
                              >Total margin amount used in open positions.</span
                            >
                          </div>
                        </li>
                        <li>
                          <h5>Free Margin</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span
                              >Usable margin balance. Equal to equity
                              minus.</span
                            >
                          </div>
                        </li>
                        <li>
                          <h5>Margin Level</h5>
                          <div className="text-end">
                            <h5>$0.0000</h5>
                            <span
                              >Percentage ratio of equity to used margin.</span
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-8">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Balance</h4>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="balance-chart">
                            <div id="balance-chart"></div>
                            <h4>Total Balance = $ 5360</h4>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <ul className="balance-widget mt-4">
                            <li>
                              <div className="icon-title">
                                <i className="cc BTC"></i>
                                <span>Bitcoin</span>
                              </div>
                              <div className="text-end">
                                <h5>0.000242 BTC</h5>
                                <span>0.125 USD</span>
                              </div>
                            </li>
                            <li>
                              <div className="icon-title">
                                <i className="cc USDT"></i>
                                <span>Tether</span>
                              </div>
                              <div className="text-end">
                                <h5>0.000242 USDT</h5>
                                <span>0.125 USD</span>
                              </div>
                            </li>
                            <li>
                              <div className="icon-title">
                                <i className="cc XTZ"></i>
                                <span>Tezos</span>
                              </div>
                              <div className="text-end">
                                <h5>0.000242 XTZ</h5>
                                <span>0.125 USD</span>
                              </div>
                            </li>
                            <li>
                              <div className="icon-title">
                                <i className="cc XMR"></i>
                                <span>Monero</span>
                              </div>
                              <div className="text-end">
                                <h5>0.000242 XMR</h5>
                                <span>0.125 USD</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-4 col-lg-6">
                      <div className="price-widget">
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
                    <div className="col-xxl-12 col-xl-4 col-lg-6">
                      <div className="price-widget">
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
                    <div className="col-xxl-12 col-xl-4 col-lg-6">
                      <div className="price-widget">
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
                   
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Transaction</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive transaction-table">
                        <table className="table table-striped responsive-table">
                          <thead>
                            <tr>
                              <th>Ledger ID</th>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Currency</th>
                              <th>Amount</th>
                              <th>Fee</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>523640</td>
                              <td>January 15</td>
                              <td>
                                <span className="danger-arrow"
                                  ><i className="icofont-arrow-down"></i> Sell</span
                                >
                              </td>
                              <td className="coin-name">
                                <i className="cc BTC"></i> Bitcoin
                              </td>
                              <td className="text-danger">-0.000242 BTC</td>
                              <td>0.02%</td>
                              <td><strong>0.25484 BTC</strong></td>
                            </tr>
                            <tr>
                              <td>523640</td>
                              <td>January 15</td>
                              <td>
                                <span className="success-arrow"
                                  ><i className="icofont-arrow-up"></i>Buy</span
                                >
                              </td>
                              <td className="coin-name">
                                <i className="cc LTC"></i> Litecoin
                              </td>
                              <td className="text-success">-0.000242 BTC</td>
                              <td>0.02%</td>
                              <td><strong> 0.25484 LTC</strong></td>
                            </tr>
                            <tr>
                              <td>523640</td>
                              <td>January 15</td>
                              <td>
                                <span className="success-arrow"
                                  ><i className="icofont-arrow-up"></i>Buy</span
                                >
                              </td>
                              <td className="coin-name">
                                <i className="cc XRP"></i> Ripple
                              </td>
                              <td className="text-success">-0.000242 BTC</td>
                              <td>0.02%</td>
                              <td><strong> 0.25484 LTC</strong></td>
                            </tr>
                            <tr>
                              <td>523640</td>
                              <td>January 15</td>
                              <td>
                                <span className="success-arrow"
                                  ><i className="icofont-arrow-up"></i>Buy</span
                                >
                              </td>
                              <td className="coin-name">
                                <i className="cc DASH"></i> Dash
                              </td>
                              <td className="text-success">-0.000242 BTC</td>
                              <td>0.02%</td>
                              <td><strong> 0.25484 LTC</strong></td>
                            </tr>
                            <tr>
                              <td>523640</td>
                              <td>January 15</td>
                              <td>
                                <span className="success-arrow"
                                  ><i className="icofont-arrow-up"></i>Buy</span
                                >
                              </td>
                              <td className="coin-name">
                                <i className="cc DASH"></i> Dash
                              </td>
                              <td className="text-success">-0.000242 BTC</td>
                              <td>0.02%</td>
                              <td><strong> 0.25484 LTC</strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
