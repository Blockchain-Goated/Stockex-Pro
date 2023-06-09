import { NextPage } from "next";
import { useState } from "react";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import profileTwo from "../public/images/profile/profileTwo.png";
import logoi from "../public/images/logoi.png";
import SideBarComponent from "../src/components/SideBarComponent";
import linkData from "./data/SettingsApiData";
import SettingsApiOne from "../src/components/settings_api/SettingsApiOne";

const SettingsApi: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  const [formData, setFormData] = useState({
    key1: "",
    key2: "",
  });
  const [error, setError] = useState(false);
  const { key1, key2 } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
  };
  const classNameChange = (value: string, extClassName?: string) =>
    `${extClassName ? extClassName : "form-control"} ${
      error && !value ? "is-invalid" : ""
    }`;
  return (
    <SettingsLayouts name="API">
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
                          {linkData.map((item, index) => (
                            <SettingsApiOne key={index} data={item} />
                          ))}
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
                  <h4>API</h4>
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
                            <h4 className="card-title">Create API Key</h4>
                          </div>
                          <div className="card-body px-0">
                            <form action="#">
                              <div className="row g-3">
                                <div className="col-xl-6 col-md-6">
                                  <label className="form-label">
                                    Generate New Key
                                  </label>
                                  <input
                                    type="text"
                                    name="usd_amount"
                                    className="form-control"
                                    placeholder="Enter Passphrase"
                                  />
                                </div>
                                <div className="col-xl-6 col-md-6">
                                  <label className="form-label">
                                    Confirm Passphrase
                                  </label>
                                  <input
                                    type="text"
                                    name="usd_amount"
                                    className="form-control"
                                    placeholder="Re-enter passphrase"
                                  />
                                </div>
                                <div className="col-auto">
                                  <button className="btn btn-primary">
                                    Create API Keys
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header px-0">
                            <h4 className="card-title">Your API Keys</h4>
                          </div>
                          <div className="card-body px-0">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Key</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      69e387f1-31c3-45ad-9c68-5a51e5e78b43
                                    </td>
                                    <td>
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          checked
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <span>
                                        <i className="icofont-ui-delete"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      69e387f1-31c3-45ad-9c68-5a51e5e78b43
                                    </td>
                                    <td>
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <span>
                                        <i className="icofont-ui-delete"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      69e387f1-31c3-45ad-9c68-5a51e5e78b43
                                    </td>
                                    <td>
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <span>
                                        <i className="icofont-ui-delete"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      69e387f1-31c3-45ad-9c68-5a51e5e78b43
                                    </td>
                                    <td>
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <span>
                                        <i className="icofont-ui-delete"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      69e387f1-31c3-45ad-9c68-5a51e5e78b43
                                    </td>
                                    <td>
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      <span>
                                        <i className="icofont-ui-delete"></i>
                                      </span>
                                    </td>
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

export default SettingsApi;
