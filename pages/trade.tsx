import { NextPage } from "next";
import BuySellForm from "../src/components/BuySellForm";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from 'next/legacy/image'
import profileTwo from "../public/images/profile/profileTwo.png"
import logoi from "../public/images/logoi.png"
import art_photo_2 from "../public/images/profile/art_photo_2.jpeg"
import blockchain from "../public/images/blockchain.png"


const Trade: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const themeToggle = (e: any) => {
    e.preventDefault();
  }

  const mintToken = (e: any) => {
    e.preventDefault();
  }

  const burnToken = (e: any) => {
    e.preventDefault();
  }

  const transferToken = (e: any) => {
    e.preventDefault();
  }



  if (status === "loading") {
    return <p>Loading...</p>;
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
                          <span className="input-group-text">
                            <i className="icofont-search"></i>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="header-right">
                    <div className="dark-light-toggle" onClick={themeToggle}>
                      <span className="dark">
                        <i className="bi bi-moon"></i>
                      </span>
                      <span className="light">
                        <i className="bi bi-brightness-high"></i>
                      </span>
                    </div>
                    <div className="notification dropdown">
                      <div className="notify-bell" data-toggle="dropdown">
                        <span>
                          <i className="bi bi-bell"></i>
                        </span>
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
                              <span className="me-3 icon success">
                                <i className="bi bi-check"></i>
                              </span>
                              <div>
                                <p>Account created successfully</p>
                                <span>2020-11-04 12:00:23</span>
                              </div>
                            </div>
                          </Link>
                          <Link href="#" className="">
                            <div className="d-flex align-items-center">
                              <span className="me-3 icon fail">
                                <i className="bi bi-x"></i>
                              </span>
                              <div>
                                <p>2FA verification failed</p>
                                <span>2020-11-04 12:00:23</span>
                              </div>
                            </div>
                          </Link>
                          <Link href="#" className="">
                            <div className="d-flex align-items-center">
                              <span className="me-3 icon success">
                                <i className="bi bi-check"></i>
                              </span>
                              <div>
                                <p>Device confirmation completed</p>
                                <span>2020-11-04 12:00:23</span>
                              </div>
                            </div>
                          </Link>
                          <Link href="#" className="">
                            <div className="d-flex align-items-center">
                              <span className="me-3 icon pending">
                                <i className="bi bi-exclamation-triangle"></i>
                              </span>
                              <div>
                                <p>Phone verification pending</p>
                                <span>2020-11-04 12:00:23</span>
                              </div>
                            </div>
                          </Link>

                          <Link href="settings-activity">
                            More <i className="icofont-simple-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="profile_log dropdown">
                      <div className="user" data-toggle="dropdown">
                        <span className="thumb">
                          <Image layout="responsive" src={art_photo_2} alt="" />
                        </span>
                        <span className="arrow">
                          <i className="icofont-angle-down"></i>
                        </span>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <Image layout="responsive" src={profileTwo} alt="" />
                            </span>
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
                        <Link
                          href="settings-activity"
                          className="dropdown-item"
                        >
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
            <Link href="/">
              <Image src={blockchain} alt="" width={30} />
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
                  <span>
                    <i className="bi bi-house"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="trade"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Trade"
                >
                  <span>
                    <i className="bi bi-globe2"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="wallet"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Wallet"
                >
                  <span>
                    <i className="bi bi-wallet2"></i>
                  </span>
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
                  <span>
                    <i className="bi bi-gear"></i>
                  </span>
                </Link>
              </li>
              <li className="logout">
                <Link
                  href="signin"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Signout"
                >
                  <span>
                    <i className="bi bi-power"></i>
                  </span>
                </Link>
              </li>
            </ul>

            <p className="copyright">
              &#169; <Link href="#">Qkit</Link>
            </p>
          </div>
        </div>

        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Mint TCSX Tokens</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-12">
                      <label className="form-label">Create supply</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="10  Tokens"
                          id="mintInput"
                        />
                        <select className="form-control" name="method">
                          <option value="tcs_token">TCSX</option>
                          <option value="reliance_token">RELIANCEX</option>
                          <option value="hdfc_token">HDFCX</option>
                        </select>
                      </div>
                    </div>
                    <p></p>
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={mintToken}
                    >
                      Mint
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Burn TCSX Tokens</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-12">
                      <label className="form-label">Create demand</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="10  Tokens"
                          id="burnInput"
                        />
                        <select className="form-control" name="method">
                          <option value="tcs_token">TCSX</option>
                          <option value="reliance_token">RELIANCEX</option>
                          <option value="hdfc_token">HDFCX</option>
                        </select>
                      </div>
                    </div>
                    <p></p>
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={burnToken}
                    >
                      Burn
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Transfer Tokens</h4>
                  </div>
                  <div className="card-body">
                    <div className="col-12">
                      <label className="form-label">From</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="0x00000..."
                          id="transferFrom"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">To</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="0x00000..."
                          id="transferTo"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Amount</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="currency_amount"
                          className="form-control"
                          placeholder="69"
                          id="transferAmount"
                        />
                      </div>
                    </div>

                    <p></p>
                    <button
                      type="button"
                      className="btn btn-success btn-block"
                      onClick={transferToken}
                    >
                      Transfer Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Convert</h4>
                  </div>
                  <div className="card-body">
                    <form
                      name="myform"
                      className="currency_validate trade-form row g-3"
                    >
                      <div className="col-12">
                        <label className="form-label">From</label>
                        <div className="input-group">
                          <select className="form-control" name="method">
                            <option value="tcs_token">TCSX</option>
                            <option value="reliance_token">RELIANCEX</option>
                            <option value="hdfc_token">HDFCX</option>
                          </select>
                          <input
                            type="text"
                            name="currency_amount"
                            className="form-control"
                            placeholder="6   Tokens"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <label className="form-label">To</label>
                        <div className="input-group">
                          <select className="form-control" name="method">
                            <option value="reliance_token">RELIANCEX</option>
                            <option value="tcs_token">TCSX</option>
                            <option value="hdfc_token">HDFCX</option>
                          </select>
                          <input
                            type="text"
                            name="currency_amount"
                            className="form-control"
                            placeholder="9   Tokens"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        data-toggle="modal"
                        data-target="#convertModal"
                      >
                        Convert Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Buy Transaction</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Coin Name</th>
                            <th>Wallet</th>
                            <th>Amount</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Bank *******5264</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc LTC"></i> Litecoin
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc XRP"></i> Ripple
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc DASH"></i> Dash
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
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
                    <h4 className="card-title">Sell Transaction</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Coin Name</th>
                            <th>Wallet</th>
                            <th>Amount</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Bank *******5264</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc LTC"></i> Litecoin
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc XRP"></i> Ripple
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc DASH"></i> Dash
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
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
                    <h4 className="card-title">Transfer Transaction</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Coin Name</th>
                            <th>Wallet</th>
                            <th>Amount</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Bank *******5264</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc LTC"></i> Litecoin
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc XRP"></i> Ripple
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc DASH"></i> Dash
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
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
                    <h4 className="card-title">Convert Transaction</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Coin Name</th>
                            <th>Wallet</th>
                            <th>Amount</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Bank *******5264</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc LTC"></i> Litecoin
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc XRP"></i> Ripple
                            </td>
                            <td>Using - Card *******8475</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="success-arrow">
                                <i className="bi bi-arrow-up-short"></i> Buy
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc DASH"></i> Dash
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-success">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="danger-arrow">
                                <i className="bi bi-arrow-down-short"></i> Sold
                              </span>
                            </td>
                            <td className="coin-name">
                              <i className="cc BTC"></i> Bitcoin
                            </td>
                            <td>Using - Card *******2321</td>
                            <td className="text-danger">-0.000242 BTC</td>
                            <td>-0.125 USD</td>
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

      <div className="modal fade" id="BuyModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-primary">Buyer Email</span>
                      </td>
                      <td>
                        <span className="text-primary">buyer@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-primary">Seller Email</span>
                      </td>
                      <td>
                        <span className="text-primary">seller@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Exchange Rate</td>
                      <td>0.00212455 BTC</td>
                    </tr>
                    <tr>
                      <td>Fee</td>
                      <td>$28.00 USD</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$854.00 USD</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>
                        <div className="text-danger">$25.00 USD</div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td>$1232.00 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#buySuccessleModal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="buySuccessleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="auth-form">
                <form action="verify-step-2" className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="icofont-check"></i>
                    </span>
                    <p>Congratulation. Your transaction is successful</p>
                  </div>
                </form>
                <div className="card-footer text-center">
                  <Link href="signup">Go to Transaction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="SellModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-primary">Buyer Email</span>
                      </td>
                      <td>
                        <span className="text-primary">buyer@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-primary">Seller Email</span>
                      </td>
                      <td>
                        <span className="text-primary">seller@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Exchange Rate</td>
                      <td>0.00212455 BTC</td>
                    </tr>
                    <tr>
                      <td>Fee</td>
                      <td>$28.00 USD</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$854.00 USD</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>
                        <div className="text-danger">$25.00 USD</div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td>$1232.00 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#buySuccessleModal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="SellSuccessleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="auth-form">
                <form action="verify-step-2" className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="icofont-check"></i>
                    </span>
                    <p>Congratulation. Your transaction is successful</p>
                  </div>
                </form>
                <div className="card-footer text-center">
                  <Link href="signup">Go to Transaction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="transferModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-primary">Buyer Email</span>
                      </td>
                      <td>
                        <span className="text-primary">buyer@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-primary">Seller Email</span>
                      </td>
                      <td>
                        <span className="text-primary">seller@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Exchange Rate</td>
                      <td>0.00212455 BTC</td>
                    </tr>
                    <tr>
                      <td>Fee</td>
                      <td>$28.00 USD</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$854.00 USD</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>
                        <div className="text-danger">$25.00 USD</div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td>$1232.00 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#transferSuccessModal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="transferSuccessModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="auth-form">
                <form action="verify-step-2" className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="icofont-check"></i>
                    </span>
                    <p>Congratulation. Your transaction is successful</p>
                  </div>
                </form>
                <div className="card-footer text-center">
                  <Link href="signup">Go to Transaction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="convertModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-primary">Buyer Email</span>
                      </td>
                      <td>
                        <span className="text-primary">buyer@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-primary">Seller Email</span>
                      </td>
                      <td>
                        <span className="text-primary">seller@example.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Exchange Rate</td>
                      <td>0.00212455 BTC</td>
                    </tr>
                    <tr>
                      <td>Fee</td>
                      <td>$28.00 USD</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$854.00 USD</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>
                        <div className="text-danger">$25.00 USD</div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      <td>$1232.00 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#convertSuccessModal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="convertSuccessModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Success</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="auth-form">
                <form action="verify-step-2" className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="icofont-check"></i>
                    </span>
                    <p>Congratulation. Your transaction is successful</p>
                  </div>
                </form>
                <div className="card-footer text-center">
                  <Link href="signup">Go to Transaction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout >
    
  );
};

export default Trade;
