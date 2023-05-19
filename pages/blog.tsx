import { NextPage } from "next";
import Link from "next/dist/client/link";
import BlogRight from "../src/components/BlogRight";
import LandingLayout from "../src/layouts/landing/LandingLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import logow from "../public/images/logow.png";
import blogOne from "../public/images/blog/blogOne.jpg";
import blogTwo from "../public/images/blog/blogTwo.jpg";
import blogThree from "../public/images/blog/blogThree.jpg";
import blogFour from "../public/images/blog/blogFour.jpg";
import blogPostOne from "../public/images/blog/blogPostOne.jpg";
import blogPostThree from "../public/images/blog/blogPostThree.jpg";
import Synthex from "../public/images/synthex.png";
import Image from "next/legacy/image";
import BlogComponent from "../src/components/blog/BlogComponent";
import BlogMediaComponent from "../src/components/blog/BlogMediaComponent";
import BlogListComponent from "../src/components/blog/BlogListComponent";
import BlogList from "../src/components/ListComponent";
import ListComponent from "../src/components/ListComponent";

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
                        <Link className="nav-link" href="price">
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="price-details">
                          App
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" href="blog">
                          Company
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link" href="contact">
                          Support
                        </Link>
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

      <div className="blog section-padding border-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9">
              <div className="row">
                <BlogComponent
                  imgSrc={blogOne}
                  title="Why does Litecoin need MimbleWimble?"
                  hrefTitle="blog-details"
                  hrefText="#"
                  text="Read More"
                />
                <BlogComponent
                  imgSrc={blogTwo}
                  title="How to securely store your HD wallet seeds?"
                  hrefTitle="blog-details"
                  hrefText="#"
                  text="Read More"
                />
                <BlogComponent
                  imgSrc={blogThree}
                  title="Exclusive Interview With Xinxi Wang Of Litecoin"
                  hrefTitle="blog-details"
                  hrefText="#"
                  text="Read More"
                />
                <BlogComponent
                  imgSrc={blogFour}
                  title="Exclusive Interview With Xinxi Wang Of Litecoin"
                  hrefTitle="blog-details"
                  hrefText="#"
                  text="Read More"
                />
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
                    <span>
                      <i className="la la-search"></i>
                    </span>
                  </form>
                </div>
                <div className="widget-recent-post">
                  <h3 className="post-title">Recent Post</h3>
                  <ul className="list-unstyled">
                    <BlogMediaComponent
                      blogPostSrc={blogPostOne}
                      title="List-based media object"
                      linkHrefOne="#"
                      linkHrefTwo="#"
                      linkTextOne="Admin"
                      linkTextTwo="31 July,"
                    />

                    <BlogMediaComponent
                      blogPostSrc={blogPostThree}
                      title="List-based media object"
                      linkHrefOne="#"
                      linkHrefTwo="#"
                      linkTextOne="Admin"
                      linkTextTwo="31 July,"
                    />

                    <BlogMediaComponent
                      blogPostSrc={blogPostThree}
                      title="List-based media object"
                      linkHrefOne="#"
                      linkHrefTwo="#"
                      linkTextOne="Admin"
                      linkTextTwo="31 July,"
                    />
                  </ul>
                </div>
                <div className="widget-category">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="list-group">
                    <BlogListComponent text="Cras justo odio" number={14} />
                    <BlogListComponent
                      text="Dapibus ac facilisis in"
                      number={2}
                    />
                    <BlogListComponent text="Morbi leo risus" number={1} />
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
      </div>

      <FooterComponent />
    </LandingLayout>
  );
};

export default Blog;
