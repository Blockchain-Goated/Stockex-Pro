import { NextPage } from "next";
import Balance from "../src/components/Balance";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from 'next/legacy/image'
import two from "../public/images/profile/two.png"
import logoi from "../public/images/logoi.png"
import art_photo_2 from "../public/images/profile/art_photo_2.png"
import blockchain from "../public/images/blockchain.png"
import qr from "../public/images/qr.svg"


const Wallet: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

        const themeToggle = () => {
    e.preventDefault();
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <DashboardLayout>

      <div className="header bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="header-content">
                <div className="header-left">
                  <div className="search">
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Here"
                        />
                        <span className="input-group-text"
                          ><i className="icofont-search"></i
                        ></span>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="header-right">
                  <div className="dark-light-toggle" onClick={themeToggle}>
                    <span className="dark"><i className="bi bi-moon"></i></span>
                    <span className="light"
                      ><i className="bi bi-brightness-high"></i
                    ></span>
                  </div>
                  <div className="notification dropdown">
                    <div className="notify-bell" data-toggle="dropdown">
                      <span><i className="bi bi-bell"></i></span>
                    </div>
                    <div
                      className="
                        dropdown-menu dropdown-menu-right
                        notification-list
                      "
                    >
                      <h4>Announcements</h4>
                      <div className="lists">
                        <Link href="#" className="">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon success"
                              ><i className="bi bi-check"></i
                            ></span>
                            <div>
                              <p>Account created successfully</p>
                              <span>2020-11-04 12:00:23</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon fail"
                              ><i className="bi bi-x"></i
                            ></span>
                            <div>
                              <p>2FA verification failed</p>
                              <span>2020-11-04 12:00:23</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon success"
                              ><i className="bi bi-check"></i
                            ></span>
                            <div>
                              <p>Device confirmation completed</p>
                              <span>2020-11-04 12:00:23</span>
                            </div>
                          </div>
                        </Link>
                        <Link href="#" className="">
                          <div className="d-flex align-items-center">
                            <span className="me-3 icon pending"
                              ><i className="bi bi-exclamation-triangle"></i
                            ></span>
                            <div>
                              <p>Phone verification pending</p>
                              <span>2020-11-04 12:00:23</span>
                            </div>
                          </div>
                        </Link>

                        <Link href="settings-activity"
                          >More <i className="icofont-simple-right"></i
                        ></Link>
                      </div>
                    </div>
                  </div>

                  <div className="profile_log dropdown">
                    <div className="user" data-toggle="dropdown">
                      <span className="thumb"
                        ><Image layout="fill" src={art_photo_2} alt=""
                      /></span>
                      <span className="arrow"
                        ><i className="icofont-angle-down"></i
                      ></span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="user-email">
                        <div className="user">
                          <span className="thumb"
                            ><Image layout="fill" src={art_photo_2} alt=""
                          /></span>
                          <div className="user-info">
                            <h5>Jannatul Maowa</h5>
                            <span>Tendex.inc@gmail.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="user-balance">
                        <div className="available">
                          <p>Available</p>
                          <span>0.00 BTC</span>
                        </div>
                        <div className="total">
                          <p>Total</p>
                          <span>0.00 USD</span>
                        </div>
                      </div>
                      <Link href="profile" className="dropdown-item">
                        <i className="bi bi-person"></i>Profile
                      </Link>
                      <Link href="wallet" className="dropdown-item">
                        <i className="bi bi-wallet"></i>Wallet
                      </Link>
                      <Link href="settings-profile" className="dropdown-item">
                        <i className="bi bi-gear"></i> Setting
                      </Link>
                      <Link href="settings-activity" className="dropdown-item">
                        <i className="bi bi-clock-history"></i> Activity
                      </Link>
                      <Link href="lock" className="dropdown-item">
                        <i className="bi bi-lock"></i>Lock
                      </Link>
                      <Link href="signin" className="dropdown-item logout">
                        <i className="bi bi-power"></i> Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="brand-logo">
          <Link href="/"
            ><Image src={logoi} alt="" width={30} />
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
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Estimated Balance</h5>
                <h2><span className="text-primary">0.000</span> <sub>USD</sub></h2>
                <p>= 0.000000 BTC</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Available Balance</h5>
                <h2><span className="text-success">0.000</span> <sub>USD</sub></h2>
                <p>= 0.000000 BTC</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Pending Balance</h5>
                <h2><span className="text-warning">0.000</span> <sub>USD</sub></h2>
                <p>= 0.000000 BTC</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Locked Balance</h5>
                <h2><span className="text-danger">0.000</span> <sub>USD</sub></h2>
                <p>= 0.000000 BTC</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Wallet Addresses</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Coin Name</th>
                          <th>Address</th>
                          <th>QR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="cc BTC"></i>
                              <span>Bitcoin</span>
                            </div>
                          </td>
                          <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                          <td>
                            <Image
                              className="qr-img"
                              src={qr}
                              alt=""
                              width="40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="cc BTC"></i>
                              <span>Bitcoin</span>
                            </div>
                          </td>
                          <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                          <td>
                            <Image
                              className="qr-img"
                              src={qr}
                              alt=""
                              width="40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="cc BTC"></i>
                              <span>Bitcoin</span>
                            </div>
                          </td>
                          <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                          <td>
                            <Image
                              className="qr-img"
                              src={qr}
                              alt=""
                              width="40"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="cc BTC"></i>
                              <span>Bitcoin</span>
                            </div>
                          </td>
                          <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                          <td>
                            <Image
                              className="qr-img"
                              src={qr}
                              alt=""
                              width="40"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Balance</h4>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="balance-chart">
                        <div id="balance-chart"></div>
                        <h4>Total Balance = $ 5360</h4>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <ul className="balance-widget">
                        <li>
                          <div className="icon-title">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </div>
                          <div className="text-right">
                            <h5>0.000242 BTC</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon-title">
                            <i className="cc USDT"></i>
                            <span>Tether</span>
                          </div>
                          <div className="text-right">
                            <h5>0.000242 USDT</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon-title">
                            <i className="cc XTZ"></i>
                            <span>Tezos</span>
                          </div>
                          <div className="text-right">
                            <h5>0.000242 XTZ</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon-title">
                            <i className="cc XMR"></i>
                            <span>Monero</span>
                          </div>
                          <div className="text-right">
                            <h5>0.000242 XMR</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon-title">
                            <i className="cc XMR"></i>
                            <span>Monero</span>
                          </div>
                          <div className="text-right">
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

            <div className="col-xxl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Balance</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Asset</th>
                          <th>Balance</th>
                          <th>Available</th>
                          <th>Locked</th>
                          <th>% Gain</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>>0</td>
                          <td>0</td>
                          <td className="success-arrow">
                            <strong>0.005%</strong>
                            <i className="bi bi-arrow-up-short ms-2"></i>
                          </td>
                        </tr>
                        <tr>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>>0</td>
                          <td>0</td>
                          <td className="success-arrow">
                            <strong>0.005%</strong>
                            <i className="bi bi-arrow-up-short ms-2"></i>
                          </td>
                        </tr>
                        <tr>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>>0</td>
                          <td>0</td>
                          <td className="success-arrow">
                            <strong>0.005%</strong>
                            <i className="bi bi-arrow-up-short ms-2"></i>
                          </td>
                        </tr>
                        <tr>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>>0</td>
                          <td>0</td>
                          <td className="success-arrow">
                            <strong>0.005%</strong>
                            <i className="bi bi-arrow-up-short ms-2"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Deposit</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Hash</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Withdrawals</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Fee</th>
                          <th>Date</th>
                          <th>Hash</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>0.02%</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>0.02%</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <td>12345</td>
                          <td className="coin-name">
                            <i className="cc BTC"></i>
                            <span>Bitcoin</span>
                          </td>
                          <td>0</td>
                          <td>0.02%</td>
                          <td>Jan 01</td>
                          <td>#1236598745565</td>
                          <td>Pending</td>
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

    </DashboardLayout>
  );
};

export default Wallet;
