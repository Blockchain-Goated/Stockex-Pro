import { NextPage } from "next";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { activeLandingHeaderMenu } from "../../utils/utils";
import { useAuthStore } from "../../../libs/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LandingHeader: NextPage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setAuth = useAuthStore((state: { setAuth: any }) => state.setAuth);
  const router = useRouter();
  useEffect(() => {
    activeLandingHeaderMenu();
  }, []);
  const [dropDown, setDropDown] = useState("");
  const [toggle, setToggle] = useState(false);

  async function logOut(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setAuth(false);
    await axios
      .post(
        "/api/logout",

        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(`Logout response: ${response}`);

        toast("Logout Successful", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        setAuth(false);
        return router.push("/");
      })
      .catch((error) => {
        toast(`${error.response.data.message}`, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
        console.log(`Error in logout: ${error.response.data.message}`);
      });
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
                  <Link legacyBehavior href="/">
                    <a>
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
                    </a>
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
                        <Link legacyBehavior href="/">
                          <a className="dropdown-item">Home 1</a>
                        </Link>
                        <Link legacyBehavior href="/index-2">
                          <a className="dropdown-item">Home 2</a>
                        </Link>
                        <Link legacyBehavior href="/index-3">
                          <a className="dropdown-item">Home 3</a>
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
                        <Link legacyBehavior href="/about">
                          <a className="dropdown-item">About us</a>
                        </Link>
                        <Link legacyBehavior href="/app">
                          <a className="dropdown-item">App</a>
                        </Link>
                        <Link legacyBehavior href="/price">
                          <a className="dropdown-item">Price</a>
                        </Link>
                        <Link legacyBehavior href="/price-details">
                          <a className="dropdown-item">Price Details</a>
                        </Link>
                        <Link legacyBehavior href="/team">
                          <a className="dropdown-item">Team</a>
                        </Link>
                        <Link legacyBehavior href="/blog">
                          <a className="dropdown-item">Blog</a>
                        </Link>
                        <Link legacyBehavior href="/blog-details">
                          <a className="dropdown-item">Blog Details</a>
                        </Link>
                        <Link legacyBehavior href="/career">
                          <a className="dropdown-item">Career</a>
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
                        <Link legacyBehavior href="/contact">
                          <a className="dropdown-item">Contact us</a>
                        </Link>
                        <Link legacyBehavior href="/helpdesk">
                          <a className="dropdown-item">Help Desk</a>
                        </Link>
                        <Link legacyBehavior href="/privacy-policy">
                          <a className="dropdown-item">Privacy</a>
                        </Link>
                        <Link legacyBehavior href="/faq">
                          <a className="dropdown-item">FAQ</a>
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link legacyBehavior href="/dashboard">
                        <a className="nav-link">Dashboard</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                {isAuthenticated === true && (
                  <div className="signin-btn d-none d-lg-block">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => logOut(e)}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
                {isAuthenticated === false && (
                  <div className="signin-btn d-none d-lg-block">
                    <Link legacyBehavior href="/signin">
                      <a className="btn btn-primary">Sign in</a>
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
