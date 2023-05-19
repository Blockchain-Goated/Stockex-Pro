import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import logow from "../public/images/logow.png";
import logo from "../public/images/logo.png";
import ListComponent from "../src/components/ListComponent";

const Faq: NextPage = () => {
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
                          <Link className="dropdown-item" href="privacy-policy">
                            Privacy
                          </Link>
                          <Link
                            className="dropdown-item text-primary"
                            href="faq"
                          >
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
                  <h3>Frequently Asked Questions</h3>
                  <p>
                    Tendex is an instant cryptocurrency exchange that allows you
                    to exchange crypto fast and buy it with a bank card. The
                    service provides the best crypto-to-crypto rates and
                    supports over 140 cryptocurrencies available for exchange
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>How does Tendex work?</h3>
                  <p>
                    Tendex’s trading algorithm is integrated into the largest
                    cryptocurrency exchange platforms, including Binance,
                    Poloniex, Bittrex, etc. In the span of milliseconds, Tendex
                    makes bids and asks on the platforms, then selects and
                    suggests the best available rate and displays the estimated
                    rate on our site. The rates remain approximate until the
                    transaction is actually made on the blockchain, which is why
                    the exchange rate at the time of a transaction may differ
                    slightly from the estimated rate that you see when you begin
                    a transaction. To learn more about the process, see this
                    <Link href="#">article</Link>
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Why should I trust you?</h3>
                  <p>
                    Tendex is one of the most prominent instant cryptocurrency
                    exchanges that has gained the trust of more than 2M users
                    from all over the world. The service provides safe and fast
                    transactions without revealing users identities. We provide
                    the best possible rates by comparing a wide range of
                    reliable trading platforms and work with a list of 140+
                    cryptocurrencies that is constantly increasing.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>No deposit storage.</p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>Instant exchange.</p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        Each account is protected with 2-factor authentication
                        and an HTTPS protocol.
                      </p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>More than 2 million satisfied users.</p>
                    </li>
                  </ul>
                </div>

                <div className="terms_condition-text">
                  <h3>Does Tendex fix rates?</h3>
                  <p>
                    Tendex mobile app does! Mobile app users will no longer be
                    affected by the risks associated with crypto market
                    fluctuations. Soon, the fixed-rate exchanges will also be
                    implemented on the web version. To lock the current exchange
                    rate, the user needs to click on the lock icon, which will
                    result in them getting the exact same amount of crypto as is
                    displayed on the screen. The rate is fixed for 15 minutes,
                    which should be more than enough to carry out the exchange.
                  </p>
                  <p>
                    Alternatively, Tendex offers our lowest fee of 0.25% for all
                    crypto-to-crypto exchanges made at a floating rate.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>No warranties :</h3>
                  <p>
                    Elaenia is provided “as is” without any representations or
                    warranties. Elaenia.com makes no representations or
                    warranties in relation to this website or the information
                    and materials provided on this website.
                  </p>
                  <p>Elaenia.com does not warrant that:</p>

                  <ul>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        The website will be constantly available, or available
                        at all moving forward.
                      </p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        The information on this website is complete, true, or
                        non-misleading.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="terms_condition-text">
                  <h3>Privacy :</h3>
                  <p>
                    For details about our privacy policy, please refer to the
                    privacy policy section.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Unenforceable provisions :</h3>
                  <p>
                    If any provision of this website disclaimer is, or is found
                    to be, unenforceable under applicable law, that will not
                    affect the enforceability of the other provisions of this
                    website disclaimer.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Links :</h3>
                  <p>
                    Responsibility for the content of external links (to web
                    pages of third parties) lies solely with the operators of
                    the linked pages.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Modifications:</h3>
                  <p>
                    Elaenia.com may revise these terms of use for its website at
                    any time without notice. By using this web site you are
                    agreeing to be bound by the then current version of these
                    terms of service.
                  </p>
                </div>

                <div className="terms_condition-text">
                  <h3>Breaches of these terms and conditions:</h3>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        Elaenia.com reserves the rights under these terms and
                        conditions to take action if you breach these terms and
                        conditions in any way.
                      </p>
                    </li>
                    <li>
                      <i className="bi bi-circle-fill"></i>
                      <p>
                        Elaenia.com may take such action as seems appropriate to
                        deal with the breach, including suspending your access
                        to the website, suspending your earnings made trough
                        Elaenia.com,prohibiting you from accessing the website,
                        or bringing court proceedings against you.
                      </p>
                    </li>
                  </ul>
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
            <ListComponent />
          </div>
      </div>

<FooterComponent/>
    </LandingLayout>
  );
};

export default Faq;
