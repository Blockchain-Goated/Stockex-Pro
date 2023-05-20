import React from "react";
import Link from "next/link";

type DashList4Props = {
  classs: string;
  classs2: string;
  text: string;
};

const DashList4: React.FC<DashList4Props> = ({ classs, classs2, text }) => {
  return (
    <li>
      <Link href="#">
        <span className={classs}>
          <i className={classs2}></i>
        </span>
        {text}
      </Link>
    </li>
  );
};
export default DashList4;
