import React from "react";

type DashList3Props = {
  title: string;
  price: string;
  spann: string;
};

const DashList3: React.FC<DashList3Props> = ({ title, price, spann }) => {
  return (
    <li>
      <h5>{title}</h5>
      <div className="text-end">
        <h5>{price}</h5>
        <span>{spann}</span>
      </div>
    </li>
  );
};
export default DashList3;
