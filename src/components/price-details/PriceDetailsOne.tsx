import React from "react";

type PriceDetailsOneProps = {
  para: string;
  headi: string;
};

const PriceDetailsOne: React.FC<PriceDetailsOneProps> = ({ para, headi }) => {
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="chart-stat">
        <p className="mb-1">{para}</p>
        <h5>{headi}</h5>
      </div>
    </div>
  );
};
export default PriceDetailsOne;
