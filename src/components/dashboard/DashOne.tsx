import React from "react";
import Link from "next/link";

type DashOneProps = {};

const DashOne: React.FC<DashOneProps> = () => {
  return (
    <div className="col-xxl-12 col-xl-4 col-lg-6">
      <div className="price-widget">
        <Link href="price-details">
          <div className="price-content">
            <div className="icon-title">
              <i className="cc BTC"></i>
              <span>Bitcoin</span>
            </div>
            <h5>$ 11,785.10</h5>
          </div>
          <div id="chart"></div>
        </Link>
      </div>
    </div>
  );
};
export default DashOne;
