import React from "react";

type DashList2Props = {
  heading: string;
  price: string;
  text: string;
};

const DashList2: React.FC<DashList2Props> = ({ heading, price, text }) => {
  return (
    <li>
      <h5>{heading}</h5>
      <div className="text-end">
        <h5>{price}</h5>
        <span>{text}</span>
      </div>
    </li>
  );
};
export default DashList2;
