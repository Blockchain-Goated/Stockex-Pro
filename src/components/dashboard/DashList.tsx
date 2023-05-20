import React from "react";

type DashListProps = {
  classs: string;
  coin: string;
  price: string;
  price2: string;
};

const DashList: React.FC<DashListProps> = ({ classs, coin, price, price2 }) => {
  return (
    <li>
      <div className="icon-title">
        <i className={classs}></i>
        <span>{coin}</span>
      </div>
      <div className="text-end">
        <h5>{price}</h5>
        <span>{price2}</span>
      </div>
    </li>
  );
};
export default DashList;
