import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

const SettingsSecurity: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <SettingsLayouts name="Security">
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
                          <img src="./images/profile/2.png" alt="" />
                        </span>
                        <span className="arrow">
                          <i className="icofont-angle-down"></i>
                        </span>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <img src="./images/profile/2.png" alt="" />
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
              <img src="./images/logoi.png" alt="" width="30" />
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
                  <h4>Security</h4>
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
                            <h4 className="card-title">2-step verification</h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="verify-content">
                              <div className="d-flex align-items-center">
                                <span className="me-3 icon-circle bg-primary text-white">
                                  <i className="icofont-ui-touch-phone"></i>
                                </span>
                                <div className="primary-number">
                                  <p className="mb-0">
                                    <strong>+xxx xxxxxxxx60</strong>
                                  </p>
                                  <small>
                                    Keep your primary phone number up-to-date
                                  </small>
                                  <br />
                                  <span className="text-success">Required</span>
                                </div>
                              </div>
                              <button className="btn btn-outline-primary">
                                Manage
                              </button>
                            </div>
                            <hr className="dropdown-divider my-4" />
                            <div className="verify-content">
                              <div className="d-flex align-items-center">
                                <span className="me-3 icon-circle bg-primary text-white">
                                  <i className="icofont-email"></i>
                                </span>
                                <div className="primary-number">
                                  <p className="mb-0">
                                    <strong>hello@example.com</strong>
                                  </p>
                                  <small>
                                    Keep your primary email up-to-date
                                  </small>
                                  <br />
                                  <span className="text-success">Required</span>
                                </div>
                              </div>
                              <button className="btn btn-outline-primary">
                                Manage
                              </button>
                            </div>
                            <hr className="dropdown-divider my-4" />
                            <div className="verify-content">
                              <div className="d-flex align-items-center">
                                <span className="me-3 icon-circle bg-primary text-white">
                                  <i className="icofont-lock"></i>
                                </span>
                                <div className="primary-number">
                                  <p className="mb-0">
                                    <strong>*************</strong>
                                  </p>
                                  <small>You can change your password</small>
                                  <br />
                                  <span className="text-success">Required</span>
                                </div>
                              </div>
                              <button className="btn btn-outline-primary">
                                Manage
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">
                              Identity verification
                            </h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="verify-content">
                              <div className="d-flex align-items-center">
                                <span className="me-3 icon-circle bg-primary text-white">
                                  <i className="icofont-id"></i>
                                </span>
                                <div className="primary-number">
                                  <p className="mb-0">xxx xxxxx xxx40</p>
                                  <small>Social Security Number</small>
                                  <br />
                                  <span className="text-success">Verified</span>
                                </div>
                              </div>
                              <button
                                className="btn btn-outline-primary"
                                data-toggle="modal"
                                data-target="#idCardModal"
                              >
                                Manage
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">
                              Use 2-step verification to secure your
                              transactions
                            </h4>
                          </div>
                          <div className="card-body px-0">
                            <form action="#">
                              <div className="col-12">
                                <div className="form-check form-switch mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="s1"
                                    checked
                                  />
                                  <label className="form-check-label" for="s1">
                                    Any amount of cryptocurrency
                                    <b className="text-success">Most secure</b>
                                  </label>
                                </div>
                                <div className="form-check form-switch mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="s2"
                                    checked
                                  />
                                  <label className="form-check-label" for="s2">
                                    Over 1.2000 BTC per day
                                  </label>
                                </div>

                                <div className="form-check form-switch mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="s3"
                                    checked
                                  />
                                  <label className="form-check-label" for="s3">
                                    Never
                                    <b className="text-danger">Least secure</b>
                                  </label>
                                </div>
                              </div>

                              <div className="col-12">
                                <button className="btn btn-success">
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

      <div
        className="modal fade"
        id="idCardModal"
        tabindex="-1"
        aria-labelledby="idCardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="idCardModalLabel">
                Upload your ID card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="verify-step-3" className="identity-upload">
                <div className="identity-content">
                  <span>(Driving License or Government ID card)</span>

                  <p>
                    Uploading your ID helps as ensure the safety and security of
                    your founds
                  </p>
                </div>

                <div className="form-group">
                  <label className="me-sm-2">Upload Front ID </label>
                  <span className="float-right">Maximum file size is 2mb</span>
                  <div className="file-upload-wrapper" data-text="front.jpg">
                    <input
                      name="file-upload-field"
                      type="file"
                      className="file-upload-field"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="me-sm-2">Upload Back ID </label>
                  <span className="float-right">Maximum file size is 2mb</span>
                  <div className="file-upload-wrapper" data-text="back.jpg">
                    <input
                      name="file-upload-field"
                      type="file"
                      className="file-upload-field"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#successIdCardModal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="successIdCardModal"
        tabindex="-1"
        aria-labelledby="successIdCardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successIdCardModalLabel">
                Success
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="auth-form">
                <div className="card-body">
                  <form action="verify-step-2" className="identity-upload">
                    <div className="identity-content">
                      <span className="icon">
                        <i className="icofont-email"></i>
                      </span>
                      <h5>Identity Verified</h5>
                      <p>
                        Congrats! your identity has been successfully verified
                        and your investment limit has been increased.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsSecurity;
