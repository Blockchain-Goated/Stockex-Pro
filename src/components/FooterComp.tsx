import React from "react";
import Link from "next/link";

type FooterCompProps = {};

const FooterComp: React.FC<FooterCompProps> = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="copyright">
              <p>
                © Copyright <span id="year"></span>{" "}
                <Link href="#">Mustansir</Link> I All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="footer-social">
              <ul>
                <li>
                  <Link href="#">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterComp;
