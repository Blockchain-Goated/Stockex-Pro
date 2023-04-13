import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Index: NextPage = () => {
  const router = useRouter();

  const sliderProps = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <LandingLayout>
      <div className="intro1 section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="intro-content">
                <h1 className="text-dark">
                  Trade with <strong className="text-primary">Tendex</strong>.
                  <br />
                  Buy and sell cryptocurrency
                </h1>
                <p>
                  Fast and secure way to purchase or exchange 150+
                  cryptocurrencies
                </p>
                <div className="intro-btn">
                  <Link href="/signup">
                    <a className="btn btn-primary btn-sm py-2 px-3 me-3 shadow-sm">
                      Get Started
                    </a>
                  </Link>
                  <Link href="/price">
                    <a className="btn btn-outline-dark btn-sm py-2 px-3 shadow-sm">
                      Browse Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="intro-form-exchange">
                <form
                  name="myform"
                  className="currency_validate trade-form row g-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    router.push("/price-details");
                  }}
                >
                  <div className="col-12">
                    <label className="form-label">Send</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">USD</option>
                        <option value="master">Euro</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.0214 BTC"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Receive</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">BTC</option>
                        <option value="master">ETH</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.0214 BTC"
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                    1 USD ~ 0.000088 BTC{" "}
                    <span className="text-primary d-inline">
                      Expected rate <br />
                      No extra fees
                    </span>
                  </p>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Buy Now"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getstart section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title">
                <h2>Get started in a few minutes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-person" />
                </span>
                <h3>Create an account</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, corporis.
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-pencil-square" />
                </span>
                <h3>Link your bank account</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, corporis.
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-cash" />
                </span>
                <h3>Start buying &amp; selling</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, corporis.
                </p>
                <Link href="/price">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio section-padding">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <h2 className="text-dark">
                  Create your cryptocurrency portfolio today
                </h2>
                <p>
                  Tendex has a variety of features that make it the best place
                  to start trading
                </p>
                <i className="bi-alarm" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-person-check" />
                  </span>
                  <div className="media-body">
                    <h4>Manage your portfolio</h4>
                    <p>
                      Buy and sell popular digital currencies, keep track of
                      them in the one place.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-bag-check" />
                  </span>
                  <div className="media-body">
                    <h4>Recurring buys</h4>
                    <p>
                      Invest in cryptocurrency slowly over time by scheduling
                      buys daily, weekly, or monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_img">
                <img
                  src="/images/portfolio.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-shield-check" />
                  </span>
                  <div className="media-body">
                    <h4>Vault protection</h4>
                    <p>
                      For added security, store your funds in a vault with time
                      delayed withdrawals.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    {" "}
                    <i className="bi bi-phone" />
                  </span>
                  <div className="media-body">
                    <h4>Mobile apps</h4>
                    <p className="media-normal-text">
                      Stay on top of the markets with the Tendex app for{" "}
                      <Link href="/apps">Android</Link> or{" "}
                      <Link href="/apps">iOS</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trade-app section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Trade. Anywhere</h2>
                <p>
                  All of our products are ready to go, easy to use and offer
                  great value to any kind of business
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-phone" />
                  </span>
                  <h4 className="card-title">Mobile</h4>
                  <p>
                    {`All the power of Tendex's cryptocurrency exchange, in the
                    palm of your hand. Download the Tendex mobile crypto trading
                    app today`}
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-tv" />
                  </span>
                  <h4 className="card-title">Desktop</h4>
                  <p>
                    Powerful crypto trading platform for those who mean
                    business. The Tendex crypto trading experience, tailor-made
                    for your Windows or MacOS device.
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-server" />
                  </span>
                  <h4 className="card-title">API</h4>
                  <p>
                    The Tendex API is designed to provide an easy and efficient
                    way to integrate your trading application into our platform.
                  </p>
                  <Link href="/price"> Know More </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trusted-business pb-5 text-center">
                <h3>
                  Trusted by over <strong>10.000 users</strong>
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/1.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/2.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/3.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/4.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.svg"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>What our customer says</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="testimonial-content">
                <Slider
                  {...sliderProps}
                  className="testimonial1 testimonial-carousel"
                >
                  <div>
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-img">
                          <img
                            className="img-fluid"
                            src="/images/testimonial/1.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-review">
                          <img
                            className="img-fluid"
                            src="/images/brand/2.webp"
                            alt="Image"
                          />
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nisi voluptas dignissimos similique quas
                            molestiae doloribus recusandae voluptatem et
                            repudiandae veritatis.
                          </p>
                          <div className="customer-info">
                            <h6>Mr John Doe</h6>
                            <p>CEO, Example Company</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-img">
                          <img
                            className="img-fluid"
                            src="/images/testimonial/2.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="customer-review">
                          <img
                            className="img-fluid"
                            src="/images/brand/3.webp"
                            alt="Image"
                          />
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nisi voluptas dignissimos similique quas
                            molestiae doloribus recusandae voluptatem et
                            repudiandae veritatis.
                          </p>
                          <div className="customer-info">
                            <h6>Mr Abraham</h6>
                            <p>CEO, Example Company</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>The most trusted cryptocurrency platform</h2>
                <p>Here are a few reasons why you should choose Tendex</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-shield-check" />
                </div>
                <h3>Secure storage</h3>
                <p>
                  We store the vast majority of the digital assets in secure
                  offline storage.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-x-diamond" />
                </div>
                <h3>Protected by insurance</h3>
                <p>
                  Cryptocurrency stored on our servers is covered by our
                  insurance policy.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-circle-half" />
                </div>
                <h3>Industry best practices</h3>
                <p>
                  Tendex supports a variety of the most popular digital
                  currencies.
                </p>
                <Link href="/about">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="appss section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="appss-content">
                <h2>The secure app to store crypto yourself</h2>
                <ul>
                  <li>
                    <i className="la la-check" /> All your digital assets in one
                    place
                  </li>
                  <li>
                    <i className="la la-check" /> Use Decentralized Apps
                  </li>
                  <li>
                    <i className="la la-check" /> Pay friends, not addresses
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/app">
                    <a className="btn btn-primary">
                      <img src="/images/android.svg" alt="Image" />
                    </a>
                  </Link>
                  <Link href="/app">
                    <a className="btn btn-primary">
                      <img src="/images/apple.svg" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="appss-img">
                <img className="img-fluid" src="/images/app.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog bg-white section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/1.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          Why does Litecoin need MimbleWimble?
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/2.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          How to securely store wallet seeds?
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img
                    className="img-fluid rounded"
                    src="/images/blog/3.jpg"
                    alt="Image"
                  />
                  <div className="card-body">
                    <Link href="/blog-details">
                      <a>
                        <h4 className="card-title">
                          Exclusive Interview With Of Litecoin
                        </h4>
                      </a>
                    </Link>
                    <Link href="/blog-details">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-touch section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Get in touch. Stay in touch.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-headset" />
                </span>
                <h4>24 / 7 Support</h4>
                <p>
                  Got a problem? Just get in touch. Our support team is
                  available 24/7.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-receipt" />
                </span>
                <h4>Tendex Blog</h4>
                <p>
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-briefcase" />
                </span>
                <h4>Careers</h4>
                <p>
                  Help build the future of technology. Start your new career at
                  Tendex.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-people" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-envelope" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <span>
                  <i className="bi bi-chat-left-text" />
                </span>
                <h4>Community</h4>
                <p>
                  Tendex is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};
export default Index;
