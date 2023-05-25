import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import profileTwo from "../public/images/profile/profileTwo.png";
import logoi from "../public/images/logoi.png";
import SideBarComponent from "../src/components/SideBarComponent";
import Notifications from "../src/components/settings_fees/NotificationsComponent";
import { notifications } from "./data/SettingsFees";

const SettingsFees: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <SettingsLayouts name="Fees">
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
                          <Notifications notifications={notifications} />

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

        <SideBarComponent logo={logoi} />

        <div className="content-body">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="page-title">
                  <h4>Fees</h4>
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
                            <h4 className="card-title">Normal User</h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Tier</th>
                                    <th>Total Tendex holding</th>
                                    <th>30-day Trading Volume (BTC)</th>
                                    <th>Maker Fee</th>
                                    <th>Taker Fee</th>
                                    <th>24h Withdrawal Limit (BTC)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">VIP User</h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Tier</th>
                                    <th>Total Tendex holding</th>
                                    <th>30-day Trading Volume (BTC)</th>
                                    <th>Maker Fee</th>
                                    <th>Taker Fee</th>
                                    <th>24h Withdrawal Limit (BTC)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
                                  </tr>
                                  <tr>
                                    <td>Lv 1</td>
                                    <td>&#60; 500</td>
                                    <td>&#60; 1000</td>
                                    <td>&#60; 0.100%</td>
                                    <td>&#60; 0.150%</td>
                                    <td>500</td>
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
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsFees;
