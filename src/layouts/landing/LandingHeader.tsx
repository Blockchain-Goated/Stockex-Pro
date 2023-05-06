import { NextPage } from "next";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { activeLandingHeaderMenu } from "../../utils/utils";
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const LandingHeader: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter();
  useEffect(() => {
    activeLandingHeaderMenu();
  }, []);
  const [dropDown, setDropDown] = useState("");
  const [toggle, setToggle] = useState(false);

  async function logOut(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    signOut();
  }

  const setValue = (value: string) =>
      setDropDown(value === dropDown ? "" : value),
    classNameChange = (value: string) => (value === dropDown ? "show" : "");
  return (
    <div className="header landing ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="brand-logo">
                  <Link  href="/">
             <>
                      <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="logo-primary"
                      />
                      <img
                        src="/images/logow.png"
                        alt="Logo"
                        className="logo-white"
                      />
                  </>
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse ${toggle ? "show" : ""}`}
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ms-auto" id="navMenu_____">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle "
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("home")}
                      >
                        Home
                      </a>
                      <div
                        className={`dropdown-menu ${classNameChange("home")}`}
                      >
                        <Link className="dropdown-item" href="/">
                         Home 1
                        </Link>
                        <Link className="dropdown-item" href="index-2">
                         Home 2
                        </Link>
                        <Link className="dropdown-item" href="index-3">
                          Home 3
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("Pages")}
                      >
                        Pages
                      </a>
                      <div
                        className={`dropdown-menu ${classNameChange("Pages")}`}
                      >
                        <Link className="dropdown-item" href="/about">
                          About us
                        </Link>
                        <Link className="dropdown-item" href="/app">
                          App
                        </Link>
                        <Link className="dropdown-item" href="/price">
                          Price
                        </Link>
                        <Link className="dropdown-item" href="/price-details">
                          Price Details
                        </Link>
                        <Link className="dropdown-item" href="/team">
                          Team
                        </Link>
                        <Link className="dropdown-item" href="/blog">
                          Blog
                        </Link>
                        <Link className="dropdown-item" href="/blog-details">
                         Blog Details
                        </Link>
                        <Link className="dropdown-item" href="/career">
                          Career
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("Support")}
                      >
                        Support
                      </a>
                      <div
                        className={`dropdown-menu ${classNameChange(
                          "Support"
                        )}`}
                      >
                        <Link className="dropdown-item" href="/contact">
                          Contact us
                        </Link>
                        <Link className="dropdown-item" href="/helpdesk">
                          Help Desk
                        </Link>
                        <Link className="dropdown-item" href="/privacy-policy">
                         Privacy
                        </Link>
                        <Link className="dropdown-item" href="/faq">
                          FAQ
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                {status === "authenticated" && (
                  <div className="signin-btn d-none d-lg-block">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => logOut(e)}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
                {!(status === "authenticated") && (
                  <div className="signin-btn d-none d-lg-block">
                    <Link className="btn btn-primary" href="/signin">
                      Sign in
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
