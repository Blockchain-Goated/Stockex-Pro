import { NextPage } from "next";
import Link from "next/dist/client/link";
import BlogRight from "../src/components/BlogRight";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Blog: NextPage = () => {
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
      <div className="header landing bg-dark light">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
                      <img
                        src="./images/Synthex.png"
                        alt=""
                        className="logo-primary"
                        width="113px" height="21px"
                      />
                      <img src="./images/Synthex.png" alt="" className="logo-white" width="339px" height="63px"/>
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
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link text-primary"
                          href="/"
                          >Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="price">Price</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="price-details">App</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link"
                          href="blog"
                          >Company
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link"
                          href="contact"
                          >Support
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="dashboard"
                          >Dashboard</Link                        >
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn">
                    <Link className="btn btn-primary" href="signin">Sign in</Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog section-padding border-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="./images/blog/1.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="blog-details">
                          <h4 className="card-title">
                            Why does Litecoin need MimbleWimble?
                          </h4>
                        </Link>
                        <Link href="#">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="./images/blog/2.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="blog-details">
                          <h4 className="card-title">
                            How to securely store your HD wallet seeds?
                          </h4>
                        </Link>
                        <Link href="#">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="./images/blog/3.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="blog-details">
                          <h4 className="card-title">
                            Exclusive Interview With Xinxi Wang Of Litecoin
                          </h4>
                        </Link>
                        <Link href="#">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="blog-grid">
                    <div className="card">
                      <img
                        className="img-fluid card-img-top"
                        src="./images/blog/4.jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <Link href="blog-details">
                          <h4 className="card-title">
                            Exclusive Interview With Xinxi Wang Of Litecoin
                          </h4>
                        </Link>
                        <Link href="#">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="blog-sidebar">
                <div className="widget-search">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subscribe Now"
                    />
                    <span><i className="la la-search"></i></span>
                  </form>
                </div>
                <div className="widget-recent-post">
                  <h3 className="post-title">Recent Post</h3>
                  <ul className="list-unstyled">
                    <li className="media d-flex">
                      <img
                        src="./images/blog/post_1.jpg"
                        className="me-3"
                        alt="..."
                      />
                      <div className="media-body ms-1">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        <div className="meta-info">
                          <Link href="#"><i className="la la-user"></i> Admin</Link>
                          <Link href="#"
                            ><i className="la la-calendar"></i> 31 July,
                            <span id="year"></span
                          ></Link>
                        </div>
                      </div>
                    </li>
                    <li className="media d-flex my-4">
                      <img
                        src="./images/blog/post_2.jpg"
                        className="me-3"
                        alt="..."
                      />
                      <div className="media-body ms-1">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        <div className="meta-info">
                          <Link href="#"><i className="la la-user"></i> Admin</Link>
                          <Link href="#"
                            ><i className="la la-calendar"></i> 31 July,
                            <span id="year"></span
                          ></Link>
                        </div>
                      </div>
                    </li>
                    <li className="media d-flex">
                      <img
                        src="./images/blog/post_3.jpg"
                        className="me-3"
                        alt="..."
                      />
                      <div className="media-body ms-1">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        <div className="meta-info">
                          <Link href="#"><i className="la la-user"></i> Admin</Link>
                          <Link href="#"
                            ><i className="la la-calendar"></i> 31 July,
                            <span id="year"></span
                          ></Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget-category">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="list-group">
                    <li
                      className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      Cras justo odio
                      <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li
                      className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li
                      className="
                        list-group-item
                        d-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      Morbi leo risus
                      <span className="badge badge-primary badge-pill">1</span>
                    </li>
                  </ul>
                </div>
                <div className="widget-tag">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tag-group">
                    <Link href="#">Tendex</Link>
                    <Link href="#">Tendex</Link>
                    <Link href="#">Tendex</Link>
                    <Link href="#">Tendex</Link>
                    <Link href="#">Tendex</Link>
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
                <img className="pb-3" src="./images/logow.png" alt="" />

                <p>
                  Tendex is a unique and beautiful collection of UI elements
                  that are all flexible and modular. A complete and customizable
                  solution to building the website of your dreams.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li><Link href="about">About</Link></li>
                  <li><Link href="career">Career</Link></li>
                  <li><Link href="#">Affiliate</Link></li>
                  <li><Link href="team">Our Team</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li><Link href="contact">Contact us</Link></li>
                  <li><Link href="faq">FAQ</Link></li>
                  <li><Link href="blog">Blog</Link></li>
                  <li><Link href="helpdesk">Helpdesk</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pair</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <ul>
                      <li><Link href="#">ETH to BTC</Link></li>
                      <li><Link href="#">BTC to ETH</Link></li>
                      <li><Link href="#">LTC to ETH</Link></li>
                      <li><Link href="#">USDT to BTC</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul>
                      <li><Link href="#">BTC to USDT</Link></li>
                      <li><Link href="#">LTC to BTC</Link></li>
                      <li><Link href="#">XMR to BTC</Link></li>
                      <li><Link href="#">ETC to DASH</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright <span id="year"></span> <Link href="#">Tendex</Link> I
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <Link href="#"><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-twitter"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-linkedin"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="bi bi-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Blog;
