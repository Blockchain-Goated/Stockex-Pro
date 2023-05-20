import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import logo from "../public/images/logo.png";
import logow from "../public/images/logow.png";
import one from "../public/images/about/1.jpg";
import Image from "next/legacy/image";
import FooterComponent from "../src/components/FooterComponent";

const About: NextPage = () => {
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
                    <Link href="">
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
                          <Link className="dropdown-item" href="/">
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
                          className="nav-link dropdown-toggle text-primary"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link
                            className="dropdown-item text-primary"
                            href="about"
                          >
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
                          className="nav-link dropdown-toggle"
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
      <div className="about-one section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="service-content m-t-50">
                <h2 className="mb-4">
                  We are Tendex, a multidisciplinary creative team from
                  Copenhagen
                </h2>
                <p>
                  Founded in January of 2020, Tendex is a digital currency
                  wallet and platform where merchants and consumers can transact
                  with new digital currencies like bitcoin, ethereum, and
                  litecoin. We're based in San Francisco, California.
                </p>
                <Link href="#" className="btn btn-primary my-4">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-img">
                <Image
                  layout="responsive"
                  src={one}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-6 py-lg-8 mt-6 mt-lg-0 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="font-weight-normal mt-4">
                A team of digital enthusiasts ready for the next challenge
              </h2>

              <p className="text-muted mt-4">
                Over the past decade, we've helped hundreds of companies thrive
                in the digital world. Growing businesses through innovation is
                our goal.
              </p>
            </div>

            <div className="col-lg-7 offset-lg-1 mt-4 mt-lg-0">
              <div className="row g-0">
                <div className="col-6 bg-white text-purple text-center py-5 py-md-7">
                  <h1 className="display-3">30k</h1>
                  <p className="m-0">paying customers</p>
                </div>

                <div className="col-6 bg-purple text-center py-5 py-md-7">
                  <h1 className="display-3 text-white">$100m</h1>
                  <p className="m-0 text-white">in funding</p>
                </div>

                <div className="col-6 bg-purple text-center py-5 py-md-7">
                  <h1 className="display-3 text-white">2012</h1>
                  <p className="m-0 text-white">founded</p>
                </div>

                <div className="col-6 bg-white text-purple text-center py-5 py-md-7">
                  <h1 className="display-3">99.8%</h1>
                  <p className="m-0">uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-two section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-content my-5">
                <h3>Working at Tendex</h3>
                <p>
                  Digital currencies are changing how we use and think about
                  money. Tendex, the most trusted company in the space, is
                  looking for you to join our rapidly growing team.
                </p>
                <Link href="#" className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-img">
                <Image
                  layout="responsive"
                  src={one}
                  alt=""
                  className="img-fluid"
                />
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

export default About;
