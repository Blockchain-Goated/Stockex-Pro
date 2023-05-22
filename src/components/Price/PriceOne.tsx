import React from "react";
import Link from "next/link";

type PriceOneProps = {
  classs: string;
  classss: string;
  coin: string;
  price: string;
  chart_class: string;
};

const PriceOne: React.FC<PriceOneProps> = ({
  classs,
  classss,
  coin,
  price,
  chart_class,
}) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div className={classs}>
        <Link href="price-details">
          <div className="price-content">
            <div className="icon-title">
              <i className={classss}></i>
              <span>{coin}</span>
            </div>
            <h5>{price}</h5>
          </div>
          <div id={chart_class}></div>
        </Link>
      </div>
    </div>
  );
};
export default PriceOne;
