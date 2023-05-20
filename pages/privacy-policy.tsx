import { NextPage } from "next";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import logow from "../public/images/logow.png";
import FooterComponent from "../src/components/FooterComponent";
import logo from "../public/images/logo.png";

const PrivacyPolicy: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <LandingLayout>
      <div className="header landing @@headerClass">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="index">
                      <Image
                        layout="responsive"
                        src={logo}
                        alt=""
                        className="logo-primary"
                      />
                      <Image
                        layout="responsive"
                        src={logow}
                        alt=""
                        className="logo-white"
                      />
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Home
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="index">
                            Home 1
                          </Link>
                          <Link className="dropdown-item" href="index2">
                            Home 2
                          </Link>
                          <Link className="dropdown-item" href="index3">
                            Home 3
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" href="price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="app">
                          App
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="about">
                            About us
                          </Link>
                          <Link className="dropdown-item" href="team">
                            Team
                          </Link>
                          <Link className="dropdown-item" href="blog">
                            Blog
                          </Link>
                          <Link className="dropdown-item" href="career">
                            Career
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle text-primary"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Support
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="contact">
                            Contact us
                          </Link>
                          <Link className="dropdown-item" href="helpdesk">
                            Help Desk
                          </Link>
                          <Link
                            className="dropdown-item text-primary"
                            href="privacy-policy"
                          >
                            Privacy
                          </Link>
                          <Link className="dropdown-item" href="faq">
                            FAQ
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="dashboard">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link className="btn btn-primary" href="signin">
                      Sign in
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="terms_condition">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="terms_condition-content">
                <div className="terms_condition-text">
                  <h3>Your privacy is important to us:</h3>
                  <p>Therefore, we guarantee that:</p>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        We do not rent or sell your personal information to
                        anyone.
                      </p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        Any personal information you provide will be secured by
                        us.
                      </p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        You will be able to erase all the data we have stored on
                        you at any given time. To request data termination,
                        please contact our customer support.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="terms_condition-text">
                  <h3>Third-party services:</h3>
                  <p>
                    We use third-party services in order to operate our website.
                    Please note that these services may contain links to
                    third-party apps, websites or services that are not operated
                    by us. We make no representation or warranties with regard
                    to and are not responsible for the content, functionality,
                    legality, security, accuracy, or other aspects of such
                    third-party apps, websites or services. Note that, when
                    accessing and/or using these third-party services, their own
                    privacy policy may apply.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Google Analytics:</h3>
                  <p>
                    This website uses Google Analytics, a web analytics service
                    provided by Google, Inc. (“Google”). Google Analytics uses
                    “cookies”, which are text files placed on your computer, to
                    help the website analyze how users use the site. The
                    information generated by the cookie about your use of the
                    website will be transmitted to and stored by Google on
                    servers in the United States . In case IP-anonymisation is
                    activated on this website, your IP address will be truncated
                    within the area of Member States of the European Union or
                    other parties to the Agreement on the European Economic
                    Area. Only in exceptional cases the whole IP address will be
                    first transferred to a Google server in the USA and
                    truncated there. The IP-anonymisation is active on this
                    website. Google will use this information on behalf of the
                    operator of this website for the purpose of evaluating your
                    use of the website, compiling reports on website activity
                    for website operators and providing them other services
                    relating to website activity and internet usage. The
                    IP-address, that your Browser conveys within the scope of
                    Google Analytics, will not be associated with any other data
                    held by Google. You may refuse the use of cookies by
                    selecting the appropriate settings on your browser, however
                    please note that if you do this you may not be able to use
                    the full functionality of www.Tendex.com. You can also
                    opt-out from being tracked by Google Analytics with effect
                    for the future by downloading and installing Google
                    Analytics Opt-out Browser Addon for your current web
                    browser: https://tools.google.com/dlpage/gaoptout?hl=en.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Information we collect:</h3>
                  <p>Information we collect:</p>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>Google ID (to identify you in our database)</p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>Google First & Last name</p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>Google Email</p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>Google avatar image</p>
                    </li>
                  </ul>
                  <p>
                    We do not collect passwords or any other sensitive
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="bottom-logo">
                <Image
                  layout="responsive"
                  className="pb-3"
                  src={logow}
                  alt=""
                />

                <p>
                  Tendex is a unique and beautiful collection of UI elements
                  that are all flexible and modular. A complete and customizable
                  solution to building the website of your dreams.
                </p>
              </div>
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>

      <FooterComponent />
    </LandingLayout>
  );
};

export default PrivacyPolicy;
