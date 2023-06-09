import { NextPage } from "next";
import { useState } from "react";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import logow from "../public/images/logow.png";
import Image from "next/legacy/image";
import Synthex from "../public/images/synthex.png";
import FooterComponent from "../src/components/FooterComponent";
import ListComponent from "../src/components/ListComponent";

const Contact: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   msg: "",
  // });
  // const [error, setError] = useState(false);
  // const { name, email, msg } = formData;
  // const onChange = (e: any) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   setError(true);
  // };
  return (
    <>
      <div className="header landing bg-dark light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-primary"
                        width={113}
                        height={21}
                      />
                      <Image
                        src={Synthex}
                        alt=""
                        className="logo-white"
                        width={339}
                        height={63}
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
                        <Link className="nav-link text-primary" href="/">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link price-details">
                          App
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link href="#" className="nav-link blog">
                          Company
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link href="#" className="nav-link contact">
                          Support
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link dashboard">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link href="#" className="btn btn-primary signin">
                      Sign in
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <span>Ask Question</span>
                <h2>Let us hear from you directly!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12">
              <div className="info-list">
                <h4 className="mb-3">Address</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> California, USA
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (+880) 1243 665566
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> hello@example.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12">
              <form name="myform" className="contact_validate">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Full name </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Full name"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Email </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control p-3"
                        name="message"
                        rows={5}
                        placeholder="Tell us what we can help you with!"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 p-0">
          <div id="map-canvas"></div>
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
    </>
  );
};

export default Contact;
