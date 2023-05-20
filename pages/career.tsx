import { NextPage } from "next";
import { Accordion } from "react-bootstrap";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import logow from "../public/images/logow.png";
import logo from "../public/images/logo.png";
import Image from "next/legacy/image";
import CareerNavComponent from "../src/components/career/CareerNavComponent";
import ListComponent from "../src/components/ListComponent";
import FooterComponent from "../src/components/FooterComponent";

const Career: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  const links1 = [
    { href: "about", text: "About us" },
    { href: "team", text: "Team" },
    { href: "blog", text: "Blog" },
    { href: "career", text: "Career" },
  ];

  const links2 = [
    { href: "contact", text: "About Us" },
    { href: "helpdesk", text: "Help Desk" },
    { href: "privacy-policy", text: "Privacy Policy" },
    { href: "faq", text: "FAQ" },
  ];

  return (
    <LandingLayout>
      <div className="header landing @@headerClass">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
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
                      <CareerNavComponent hrefOne="/" textOne="Home" />
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

                      <CareerNavComponent
                        hrefOne="#"
                        textOne="Company"
                        dropNum={4}
                        links={links1}
                      />

                      <CareerNavComponent
                        hrefOne="#"
                        textOne="Support"
                        dropNum={4}
                        links={links2}
                      />

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

      <div className="choose-team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Choose your team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <div id="accordion-faq" className="accordion">
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseOne1"
                    >
                      <i className="fa"></i>Business Development & Sales
                    </h4>
                  </div>
                  <div
                    id="collapseOne1"
                    className="collapse show"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Business Development Director
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseTwo2"
                    >
                      <i className="fa"></i>Engineering - Frontend
                    </h4>
                  </div>
                  <div
                    id="collapseTwo2"
                    className="collapse"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Frontend Engineer, Identity
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="mb-0 collapsed c-pointer"
                      data-toggle="collapse"
                      data-target="#collapseThree3"
                    >
                      <i className="fa"></i>Marketing & Communications
                    </h4>
                  </div>
                  <div
                    id="collapseThree3"
                    className="collapse"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Head of Product and Performance Marketing
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
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
                <Image className="pb-3" src={logow} alt="" />

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
      </div>

      <FooterComponent />
    </LandingLayout>
  );
};

export default Career;
