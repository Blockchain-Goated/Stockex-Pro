import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import profileTwo from "../public/images/profile/profileTwo.png";
import logoi from "../public/images/logoi.png";
import android from "../public/images/android.svg";
import apple from "../public/images/apple.svg";

const SettingsActivity: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <SettingsLayouts name="Activity">
      <div id="main-wrapper">
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
                    <div className="dark-light-toggle" onClick="themeToggle()">
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
                          <Image layout="responsive" src={profileTwo} alt="" />
                        </span>
                        <span className="arrow">
                          <i className="icofont-angle-down"></i>
                        </span>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <Image
                                layout="responsive"
                                src={profileTwo}
                                alt=""
                              />
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
            <Link href="index">
              <Image src={logoi} alt="" width={30} />
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
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="page-title">
                  <h4>Activity</h4>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="settings-menu">
                      <Link href="settings-profile">Profile</Link>
                      <Link href="settings-application">Application</Link>
                      <Link href="settings-security">Security</Link>
                      <Link href="settings-activity">Activity</Link>
                      <Link href="settings-privacy">Privacy</Link>
                      <Link href="settings-payment-method">Payment Method</Link>
                      <Link href="settings-api">API</Link>
                      <Link href="settings-fees">Fees</Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">
                              Third-Party Applications
                            </h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="d-flex align-items-center">
                              <span className="me-3 icon-circle bg-warning text-white">
                                <i className="icofont-question-square"></i>
                              </span>
                              <div>
                                <h5 className="mb-0">
                                  You haven't authorized any applications yet.
                                </h5>
                                <p>
                                  After connecting an application with your
                                  account, you can manage or revoke its access
                                  here.
                                </p>
                                <Link className="btn btn-primary" href="#">
                                  Authorize now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Web Sessions</h4>

                            <small>
                              These sessions are currently signed in to your
                              account. Sign out all other sessions
                            </small>
                          </div>
                          <div className="card-body px-0">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Signed In</th>
                                    <th>Browser</th>
                                    <th>IP Address</th>
                                    <th>Near</th>
                                    <th>Current</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1 day ago</td>
                                    <td>Chrome (Windows)</td>
                                    <td>250.364.239.254</td>
                                    <td>Bangladesh, Dhaka</td>
                                    <td>
                                      <span>
                                        <i className="icofont-check-alt"></i>
                                      </span>
                                      <span>
                                        <i className="icofont-close-line"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>1 day ago</td>
                                    <td>Chrome (Windows)</td>
                                    <td>250.364.239.254</td>
                                    <td>Bangladesh, Dhaka</td>
                                    <td>
                                      <span>
                                        <i className="icofont-check-alt"></i>
                                      </span>
                                      <span>
                                        <i className="icofont-close-line"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>1 day ago</td>
                                    <td>Chrome (Windows)</td>
                                    <td>250.364.239.254</td>
                                    <td>Bangladesh, Dhaka</td>
                                    <td>
                                      <span>
                                        <i className="icofont-check-alt"></i>
                                      </span>
                                      <span>
                                        <i className="icofont-close-line"></i>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Confirmed Devices</h4>

                            <small>
                              These devices are currently allowed to access your
                              account. Remove all other devices
                            </small>
                          </div>
                          <div className="card-body px-0">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Confirmed</th>
                                  <th>Browser</th>
                                  <th>IP Address</th>
                                  <th>Near</th>
                                  <th>Current</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1 day ago</td>
                                  <td>Chrome (Windows)</td>
                                  <td>250.364.239.254</td>
                                  <td>Bangladesh, Dhaka</td>
                                  <td>
                                    <span>
                                      <i className="icofont-check-alt"></i>
                                    </span>
                                    <span>
                                      <i className="icofont-close-line"></i>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>8 days ago</td>
                                  <td>Chrome (Windows)</td>
                                  <td>250.364.239.254</td>
                                  <td>Bangladesh, Dhaka</td>

                                  <td>
                                    <span>
                                      <i className="icofont-check-alt"></i>
                                    </span>
                                    <span>
                                      <i className="icofont-close-line"></i>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>15 days ago</td>
                                  <td>Chrome (Windows)</td>
                                  <td>250.364.239.254</td>
                                  <td>Bangladesh, Dhaka</td>

                                  <td>
                                    <span>
                                      <i className="icofont-check-alt"></i>
                                    </span>
                                    <span>
                                      <i className="icofont-close-line"></i>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Account Activity</h4>

                            <small>Recent activity on your account.</small>
                          </div>
                          <div className="card-body px-0">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Action</th>
                                  <th>Source</th>
                                  <th>IP Address</th>
                                  <th>Location</th>
                                  <th>When</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>api</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">about 1 hour ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>api</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">about 2 hours ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>second factor failure</td>
                                  <td>api</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">about 2 hours ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>device confirmation completed</td>
                                  <td>web</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">1 day ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signin</td>
                                  <td>web</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">1 day ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>web</td>
                                  <td>157.119.239.254</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">1 day ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signout</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signin</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signout</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signout</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>device confirmation completed</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signin</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">8 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signout</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signin</td>
                                  <td>web</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signout</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>web</td>
                                  <td>23.106.249.39</td>
                                  <td>Singapore</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>verified second factor</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>phone verified</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>phone added</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>signin</td>
                                  <td>api</td>
                                  <td>157.119.239.214</td>
                                  <td>Bangladesh</td>
                                  <td>
                                    <Link href="#">15 days ago</Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Close Account</h4>
                          </div>
                          <div className="card-body px-0">
                            <p>
                              Withdraw funds and close your Tendex account -
                              <span className="text-danger">
                                this cannot be undone
                              </span>
                            </p>
                            <Link href="#" className="btn btn-danger">
                              Close Account
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsActivity;
