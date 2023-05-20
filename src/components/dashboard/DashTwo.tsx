import React from "react";

type DashTwoProps = { volume: string; price: string };

const DashTwo: React.FC<DashTwoProps> = ({ volume, price }) => {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="chart-price-value">
        <span>{volume}</span>
        <h5>{price}</h5>
      </div>
    </div>
  );
};
export default DashTwo;
