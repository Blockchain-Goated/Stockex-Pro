import { NextPage } from "next";
import { useState } from "react";
import AddBankAccountModal from "../src/components/AddBankAccountModal";
import AddBankCardModal from "../src/components/AddBankCardModal";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

const SettingsPaymentMethod: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  const [bankModal, setBankModal] = useState(false);
  const [card, setCard] = useState(false);
  return (
    <SettingsLayouts name="Payment Method">
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
                  <h4>Payment Method</h4>
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
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Add a payment method</h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="verify-content">
                              <div className="d-flex align-items-center">
                                <span className="me-3 icon-circle bg-primary text-white">
                                  <i className="icofont-ui-touch-phone"></i>
                                </span>
                                <div className="primary-number">
                                  <p className="mb-0">Bank of America</p>
                                  <small>Bank **************5421</small>
                                  <br />
                                  <span className="text-success">Verified</span>
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
                                  <p className="mb-0">Master Card</p>
                                  <small>Credit Card *********5478</small>
                                  <br />
                                  <span className="text-success">Verified</span>
                                </div>
                              </div>
                              <button className="btn btn-outline-primary">
                                Manage
                              </button>
                            </div>

                            <div className="mt-5">
                              <button
                                type="button"
                                className="btn btn-primary me-3"
                                data-toggle="modal"
                                data-target="#addBank"
                              >
                                Add New Bank
                              </button>
                              <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#addCard"
                              >
                                Add New Card
                              </button>
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

      <div className="modal fade" id="addBank" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add bank account</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="verify-step-6" className="identity-upload">
                <div className="row g-3">
                  <div className="col-xl-12">
                    <label className="form-label">Routing number </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="25487"
                    />
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Account number </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="36475"
                    />
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Fulll name </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jannatul Maowa"
                    />
                  </div>
                  <div className="col-xl-12">
                    <img
                      src="./images/routing.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#successBankAccount"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="successBankAccount" tabindex="-1">
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
                <div className="card-body">
                  <form action="verify-step-2" className="identity-upload">
                    <div className="identity-content">
                      <span className="icon">
                        <i className="icofont-check"></i>
                      </span>
                      <p className="text-dark">
                        Congratulation. Your bank added
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addCard" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCardLabel">
                Add card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="identity-upload">
                <div className="row g-3">
                  <div className="col-xl-12">
                    <label className="form-label">Name on card </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jannatul Maowa"
                    />
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Card number </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="5658 4258 6358 4756"
                    />
                  </div>
                  <div className="col-xl-4">
                    <label className="form-label">Expiration </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="10/22"
                    />
                  </div>
                  <div className="col-xl-4">
                    <label className="form-label">CVC </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="125"
                    />
                  </div>
                  <div className="col-xl-4">
                    <label className="form-label">Postal code </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2368"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#successCard"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="successCard" tabindex="-1">
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
                <div className="card-body">
                  <form action="verify-step-2" className="identity-upload">
                    <div className="identity-content">
                      <span className="icon">
                        <i className="icofont-check"></i>
                      </span>
                      <p className="text-dark">
                        Congratulation. Your bank added
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

export default SettingsPaymentMethod;
