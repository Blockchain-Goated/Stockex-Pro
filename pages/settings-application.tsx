import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from 'next/legacy/image'
import profileTwo from "../public/images/profile/profileTwo.png"
import logoi from "../public/images/logoi.png"


const SettingsApplication: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <SettingsLayouts name="Application">
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
                        <span className="input-group-text"
                          ><i className="icofont-search"></i
                        ></span>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="header-right">
                  <div className="dark-light-toggle" onClick="themeToggle()">
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
                        ><Image layout="responsive" src={profileTwo} alt=""
                      /></span>
                      <span className="arrow"
                        ><i className="icofont-angle-down"></i
                      ></span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="user-email">
                        <div className="user">
                          <span className="thumb"
                            ><Image layout="responsive" src={profileTwo} alt=""
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
          <Link href="index"
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
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page-title">
                <h4>Application</h4>
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
                        <div className="card-header">
                          <h4 className="card-title">Preperences</h4>
                        </div>
                        <div className="card-body">
                          <form action="#">
                            <div className="row g-3">
                              <div className="col-sm-6">
                                <label className="form-label"
                                  >Language Default</label
                                >
                                <select className="form-select">
                                  <option value="">English</option>
                                  <option value="">Bangla</option>
                                  <option value="">Hindi</option>
                                </select>
                              </div>
                              <div className="col-sm-6">
                                <label className="form-label"
                                  >Currency Default</label
                                >
                                <select className="form-select">
                                  <option value="">USD</option>
                                  <option value="">CAD</option>
                                  <option value="">Euro</option>
                                </select>
                              </div>
                              <div className="col-sm-6">
                                <label className="form-label">Theme Default</label>
                                <select className="form-select">
                                  <option value="">Light</option>
                                  <option value="">Dark</option>
                                  <option value="">Blue</option>
                                </select>
                              </div>
                              <div className="col-sm-6">
                                <label className="form-label">Time Zone</label>
                                <select className="form-select">
                                  <option>
                                    (GMT-12:00) International Date Line West
                                  </option>
                                  <option>
                                    (GMT-11:00) Midway Island, Samoa
                                  </option>
                                  <option>(GMT-10:00) Hawaii</option>
                                  <option>(GMT-09:00) Alaska</option>
                                  <option>
                                    (GMT-08:00) Pacific Time (US & Canada)
                                  </option>
                                  <option>
                                    (GMT-08:00) Tijuana, Baja California
                                  </option>
                                  <option>GMT-07:00) Arizona</option>
                                  <option>
                                    (GMT-07:00) Chihuahua, La Paz, Mazatlan
                                  </option>
                                  <option>
                                    (GMT-07:00) Mountain Time (US & Canada)
                                  </option>
                                  <option>GMT-06:00) Central America</option>
                                  <option>
                                    (GMT-06:00) Central Time (US & Canada)
                                  </option>
                                  <option>
                                    (GMT-06:00) Guadalajara, Mexico City,
                                    Monterrey
                                  </option>
                                  <option>GMT-06:00) Saskatchewan</option>
                                  <option>
                                    GMT-05:00) Bogota, Lima, Quito, Rio Branco
                                  </option>
                                  <option>
                                    (GMT-05:00) Eastern Time (US & Canada)
                                  </option>
                                  <option>(GMT-05:00) Indiana (East)</option>
                                  <option>
                                    (GMT-04:00) Atlantic Time (Canada)
                                  </option>
                                  <option>GMT-04:00) Caracas, La Paz</option>
                                  <option>GMT-04:00) Manaus</option>
                                  <option>(GMT-04:00) Santiago</option>
                                  <option>">(GMT-03:30) Newfoundland</option>
                                  <option>(GMT-03:00) Brasilia</option>
                                  <option>
                                    GMT-03:00) Buenos Aires, Georgetown
                                  </option>
                                  <option>(GMT-03:00) Greenland</option>
                                  <option>(GMT-03:00) Montevideo</option>
                                  <option>(GMT-02:00) Mid-Atlantic</option>
                                  <option>GMT-01:00) Cape Verde Is.</option>
                                  <option>(GMT-01:00) Azores</option>
                                  <option>
                                    MT+00:00) Casablanca, Monrovia, Reykjavik
                                  </option>
                                  <option>
                                    GMT+00:00) Greenwich Mean Time : Dublin,
                                    Edinburgh, Lisbon, London
                                  </option>
                                  <option>
                                    GMT+01:00) Amsterdam, Berlin, Bern, Rome,
                                    Stockholm, Vienna
                                  </option>
                                  <option>
                                    GMT+01:00) Belgrade, Bratislava, Budapest,
                                    Ljubljana, Prague
                                  </option>
                                  <option>
                                    GMT+01:00) Brussels, Copenhagen, Madrid,
                                    Paris
                                  </option>
                                  <option>
                                    GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                                  </option>
                                  <option>
                                    GMT+01:00) West Central Africa
                                  </option>
                                  <option>GMT+02:00) Amman</option>
                                  <option>
                                    GMT+02:00) Athens, Bucharest, Istanbul
                                  </option>
                                  <option>GMT+02:00) Beirut</option>
                                  <option>GMT+02:00) Cairo</option>
                                  <option>MT+02:00) Harare, Pretoria</option>
                                  <option>
                                    GMT+02:00) Helsinki, Kyiv, Riga, Sofia,
                                    Tallinn, Vilnius
                                  </option>
                                  <option>GMT+02:00) Jerusalem</option>
                                  <option>GMT+02:00) Minsk</option>
                                  <option>GMT+02:00) Windhoek</option>
                                  <option>
                                    MT+03:00) Kuwait, Riyadh, Baghdad
                                  </option>
                                  <option>
                                    GMT+03:00) Moscow, St. Petersburg, Volgograd
                                  </option>
                                  <option>MT+03:00) Nairobi</option>
                                  <option>MT+03:00) Tbilisi</option>
                                  <option>>(GMT+03:30) Tehran</option>
                                  <option>MT+04:00) Abu Dhabi, Muscat</option>
                                  <option>GMT+04:00) Baku</option>
                                  <option>GMT+04:00) Yerevan</option>
                                  <option>(GMT+04:30) Kabul</option>
                                  <option>GMT+05:00) Yekaterinburg</option>
                                  <option>
                                    MT+05:00) Islamabad, Karachi, Tashkent
                                  </option>
                                  <option>
                                    (GMT+05:30) Sri Jayawardenapura
                                  </option>
                                  <option>
                                    (GMT+05:30) Chennai, Kolkata, Mumbai, New
                                    Delhi
                                  </option>
                                  <option>>(GMT+05:45) Kathmandu</option>
                                  <option>
                                    GMT+06:00) Almaty, Novosibirsk
                                  </option>
                                  <option>MT+06:00) Astana, Dhaka</option>
                                  <option>(GMT+06:30) Yangon (Rangoon)</option>
                                  <option>
                                    MT+07:00) Bangkok, Hanoi, Jakarta
                                  </option>
                                  <option>GMT+07:00) Krasnoyarsk</option>
                                  <option>
                                    MT+08:00) Beijing, Chongqing, Hong Kong,
                                    Urumqi
                                  </option>
                                  <option>
                                    MT+08:00) Kuala Lumpur, Singapore
                                  </option>
                                  <option>
                                    MT+08:00) Irkutsk, Ulaan Bataar
                                  </option>
                                  <option>MT+08:00) Perth</option>
                                  <option>MT+08:00) Taipei</option>
                                  <option>
                                    MT+09:00) Osaka, Sapporo, Tokyo
                                  </option>
                                  <option>MT+09:00) Seoul</option>
                                  <option>GMT+09:00) Yakutsk</option>
                                  <option>(GMT+09:30) Adelaide</option>
                                  <option>(GMT+09:30) Darwin</option>
                                  <option>GMT+10:00) Brisbane</option>
                                  <option>
                                    (GMT+10:00) Canberra, Melbourne, Sydney
                                  </option>
                                  <option>(GMT+10:00) Hobart</option>
                                  <option>GMT+10:00) Guam, Port Moresby</option>
                                  <option>(GMT+10:00) Vladivostok</option>
                                  <option>
                                    (GMT+11:00) Magadan, Solomon Is., New
                                    Caledonia
                                  </option>
                                  <option>
                                    (GMT+12:00) Auckland, Wellington
                                  </option>
                                  <option>
                                    GMT+12:00) Fiji, Kamchatka, Marshall Is.
                                  </option>
                                  <option>GMT+13:00) Nuku'alofa</option>
                                </select>
                              </div>

                              <div className="col-12">
                                <button
                                  className="btn btn-success pl-5 pr-5 waves-effect"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Notifications</h4>
                        </div>
                        <div className="card-body">
                          <form action="#">
                            <div className="col-lg-6">
                              <div className="form-check form-switch mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="s1"
                                  checked
                                />
                                <label className="form-check-label" for="s1"
                                  >I send or receive digital currency</label
                                >
                              </div>
                              <div className="form-check form-switch mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="s2"
                                  checked
                                />
                                <label className="form-check-label" for="s2"
                                  >I receive merchant order</label
                                >
                              </div>
                              <div className="form-check form-switch mb-3">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="s3"
                                  checked
                                />
                                <label className="form-check-label" for="s3"
                                  >There are recommendation for my
                                  sccount</label
                                >
                              </div>
                            </div>

                            <div className="col-12">
                              <button className="btn btn-success waves-effect">
                                Save
                              </button>
                            </div>
                          </form>
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

export default SettingsApplication;
