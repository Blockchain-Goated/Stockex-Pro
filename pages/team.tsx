import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import logo from "../public/images/logo.png";
import logow from "../public/images/logow.png";
import brandOne from "../public/images/brand/brandOne.png";
import brandTwo from "../public/images/brand/brandTwo.png";
import brandThree from "../public/images/brand/brandThree.png";
import brandFour from "../public/images/brand/brandFour.png";
import brandFive from "../public/images/brand/brandFive.png";
import teamOne from "../public/images/team/teamOne.png";
import teamTwo from "../public/images/team/teamTwo.png";
import teamThree from "../public/images/team/teamThree.png";
import teamFour from "../public/images/team/teamFour.png";
import teamFive from "../public/images/team/teamFive.png";
import teamSix from "../public/images/team/teamSix.png";
import FooterComponent from "../src/components/FooterComponent";
import testimonialTwo from "../public/images/testimonial/testimonialTwo.png";

const Team: NextPage = () => {
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
                      <Image src={logo} alt="" className="logo-primary" />
                      <Image src={logow} alt="" className="logo-white" />
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
                          className="nav-link dropdown-toggle text-primary"
                          href="#"
                          data-toggle="dropdown"
                        >
                          Company
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="about">
                            About us
                          </Link>
                          <Link
                            className="dropdown-item text-primary"
                            href="team"
                          >
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

      <div className="join-team section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="join-team-content text-center">
                <h2 className="mb-2">Want to work with us?</h2>
                <p className="mb-4">
                  We're always looking to hire talented folks to join our
                  ever-growing team of designers, engineers, and support staff.
                </p>
                <Link href="#" className="btn btn-primary px-4 py-2">
                  View Open Position
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-ceo @@bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="ceo-content">
                <Image
                  src={testimonialTwo}
                  alt=""
                  className="img-fluid rounded me-4"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ceo-content">
                <h3>Eric Benz</h3>
                <span>CEO of Tendex</span>
                <p className="mt-2">
                  John Abraham has over 10 years of experience working in and
                  around Financial Technology. He has delivered innovative SaaS
                  systems for some of today's biggest institutions around
                  payments, identity, and banking infrastructure. John Abraham
                  has been in the Blockchain space since 2012 and is involved in
                  a number of blockchain and fintech businesses both as an
                  investor, board director, and founder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-member section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Small team. Big hearts.</h2>
                <p>
                  Our focus is always on finding the best people to work with.
                  Our bar is high, but you look ready to take on the challenge.
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-4">
              <Image
                src={teamOne}
                className="img-fluid rounded shadow-md"
                alt="..."
              />
            </div>
            <div className="col-3">
              <Image
                src={teamTwo}
                className="img-fluid rounded shadow-md mb-4"
                alt="..."
              />
              <Image
                src={teamThree}
                className="img-fluid rounded shadow-md"
                alt="..."
              />
            </div>
            <div className="col-5">
              <div className="row mb-4">
                <div className="col-5">
                  <Image
                    src={teamFour}
                    className="img-fluid rounded shadow-md mb-4"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <Image
                    src={teamFive}
                    className="img-fluid rounded shadow-md mb-4"
                    alt="..."
                  />
                </div>
                <div className="col-12">
                  <Image
                    src={teamSix}
                    className="img-fluid rounded shadow-md"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="trusted-business py-5 text-center">
                <h3>
                  Trusted by over <strong>Millions of business</strong> around
                  the world
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandOne} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandTwo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandThree} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandFour} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandFive} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <Link href="#">
                      <Image className="img-fluid" src={brandFive} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta1-content text-center">
                <h2>Interested in joining our team?</h2>
                <p>Hit us up and we'll get in touch with you.</p>
                <Link href="#" className="btn btn-primary">
                  Apply Now
                </Link>
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
                <Image className="pb-3" src={logow} alt="" />

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

export default Team;
