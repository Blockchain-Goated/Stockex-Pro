import React from "react";
import Link from "next/link";

type HelpAutoProps = {
  headi: string;
};

const HelpAuto: React.FC<HelpAutoProps> = ({ headi }) => {
  return (
    <div className="col-auto">
      <Link href="#" className="sub-cat">
        <h5>{headi}</h5>
      </Link>
    </div>
  );
};
export default HelpAuto;
