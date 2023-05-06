import { NextPage } from "next";
import Link from "next/dist/client/link";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/legacy/image'

const Profile: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <DashboardLayout>
      <div id="main-wrapper">
        <div className="header @@bg">
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
                          <Image layout="fill" src="../public/images/profile/2.png" alt="" />
                        </span>
                        <span className="arrow">
                          <i className="icofont-angle-down"></i>
                        </span>
                      </div>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <Image layout="fill" src="../public/images/profile/2.png" alt="" />
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
              <Image src="../public/images/logoi.png" alt="" width={30} />
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
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="card welcome-profile">
                  <div className="card-body">
                    <Image layout="fill" src="../public/images/profile/2.png" alt="" />
                    <h4>Welcome, Jannatul Maowa!</h4>
                    <p>
                      Looks like you are not verified yet. Verify yourself to
                      use the full potential of Tendex.
                    </p>

                    <ul>
                      <li>
                        <Link href="#">
                          <span className="verified">
                            <i className="icofont-check-alt"></i>
                          </span>
                          Verify account
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="not-verified">
                            <i className="icofont-close-line"></i>
                          </span>
                          Two-factor authentication (2FA)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Download App</h4>
                  </div>
                  <div className="card-body">
                    <div className="app-link">
                      <h5>Get Verified On Our Mobile App</h5>
                      <p>
                        Verifying your identity on our mobile app more secure,
                        faster, and reliable.
                      </p>
                      <Link href="#" className="btn btn-primary">
                        <Image layout="fill" src="../public/images/android.svg" alt="" />
                      </Link>
                      <br />
                      <div className="mt-3"></div>
                      <Link href="#" className="btn btn-primary">
                        <Image layout="fill" src="../public/images/apple.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Information</h4>
                    <Link href="settings-profile" className="btn btn-primary">
                      Edit
                    </Link>
                  </div>
                  <div className="card-body">
                    <form className="row">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="user-info">
                          <span>USER ID</span>
                          <h4>818778</h4>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="user-info">
                          <span>EMAIL ADDRESS</span>
                          <h4>email@example.com</h4>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="user-info">
                          <span>COUNTRY OF RESIDENCE</span>
                          <h4>Bangladesh</h4>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="user-info">
                          <span>JOINED SINCE</span>
                          <h4>20/10/2020</h4>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="user-info">
                          <span>TYPE</span>
                          <h4>Personal</h4>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">VERIFY & UPGRADE</h4>
                  </div>
                  <div className="card-body">
                    <h5>
                      Account Status :
                      <span className="text-warning">
                        Pending <i className="icofont-warning"></i>
                      </span>
                    </h5>
                    <p>
                      Your account is unverified. Get verified to enable
                      funding, trading, and withdrawal.
                    </p>
                    <Link href="#" className="btn btn-primary">
                      {" "}
                      Get Verified
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Earn 30% Commission</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Refer your friends and earn 30% of their trading fees.
                    </p>
                    <Link href="#" className="btn btn-primary">
                      {" "}
                      Referral Program
                    </Link>
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

export default Profile;
