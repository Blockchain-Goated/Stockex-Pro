import React from "react";
import Link from "next/link";

type ListComponentProps = {};

const ListComponent: React.FC<ListComponentProps> = () => {
  return (
    <>
      <div className="col-xl-2">
        <div className="bottom-widget">
          <h4 className="widget-title">Company</h4>
          <ul>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="career">Career</Link>
            </li>
            <li>
              <Link href="#">Affiliate</Link>
            </li>
            <li>
              <Link href="team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2">
        <div className="bottom-widget">
          <h4 className="widget-title">Support</h4>
          <ul>
            <li>
              <Link href="contact">Contact us</Link>
            </li>
            <li>
              <Link href="faq">FAQ</Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="helpdesk">Helpdesk</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="bottom-widget">
          <h4 className="widget-title">Exchange Pair</h4>
          <div className="row">
            <div className="col-xl-6">
              <ul>
                <li>
                  <Link href="#">ETH to BTC</Link>
                </li>
                <li>
                  <Link href="#">BTC to ETH</Link>
                </li>
                <li>
                  <Link href="#">LTC to ETH</Link>
                </li>
                <li>
                  <Link href="#">USDT to BTC</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-6">
              <ul>
                <li>
                  <Link href="#">BTC to USDT</Link>
                </li>
                <li>
                  <Link href="#">LTC to BTC</Link>
                </li>
                <li>
                  <Link href="#">XMR to BTC</Link>
                </li>
                <li>
                  <Link href="#">ETC to DASH</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListComponent;
