import React from "react";
import Link from "next/link";

type DashOneProps = {
  classs: string;
  spann: string;
  price: string;
  idx: string;
};

const DashOne: React.FC<DashOneProps> = ({ classs, spann, price, idx }) => {
  return (
    <div className="col-xxl-12 col-xl-4 col-lg-6">
      <div className="price-widget">
        <Link href="price-details">
          <div className="price-content">
            <div className="icon-title">
              <i className={classs}></i>
              <span>{spann}</span>
            </div>
            <h5>{price}</h5>
          </div>
          <div id={idx}></div>
        </Link>
      </div>
    </div>
  );
};
export default DashOne;
