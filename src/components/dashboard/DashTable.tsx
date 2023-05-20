import React from "react";

type DashTableProps = {
  num: number;
  date: string;
  clickValue: string;
  curr: string;
  amt: string;
  amt2: string;
  classs: string;
  perc: string;
};

const DashTable: React.FC<DashTableProps> = ({
  num,
  date,
  clickValue,
  curr,
  amt,
  amt2,
  classs,
  perc,
}) => {
  return (
    <tr>
      <td>{num}</td>
      <td>{date}</td>
      <td>
        <span className="danger-arrow">
          <i className="icofont-arrow-down"></i> {clickValue}
        </span>
      </td>
      <td className="coin-name">
        <i className={classs}></i> {curr}
      </td>
      <td className="text-danger">{amt}</td>
      <td>{perc}</td>
      <td>
        <strong>{amt2}</strong>
      </td>
    </tr>
  );
};
export default DashTable;
