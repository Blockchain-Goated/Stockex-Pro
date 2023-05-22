import React from "react";

type PriceDetailsTwoProps = {
  classs: string;
  coin: string;
  small: string;
  price: string;
  perc: string;
};

const PriceDetailsTwo: React.FC<PriceDetailsTwoProps> = ({
  classs,
  coin,
  small,
  price,
  perc,
}) => {
  return (
    <li>
      <div className="icon-title">
        <i className={classs}></i>
        <span>
          {coin} <br />
          <small>{small}</small>
        </span>
      </div>
      <div className="text-right">
        <h5>{price}</h5>
        <span>{perc}</span>
      </div>
    </li>
  );
};
export default PriceDetailsTwo;
