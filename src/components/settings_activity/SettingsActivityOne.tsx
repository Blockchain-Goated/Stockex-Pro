import React from "react";
import Link from "next/link";

type SettingsActivityOneProps = {
  classs: string;
  classss: string;
  para: string;
  spann: string;
};

const SettingsActivityOne: React.FC<SettingsActivityOneProps> = ({
  classs,
  classss,
  para,
  spann,
}) => {
  return (
    <Link href="#" className="">
      <div className="d-flex align-items-center">
        <span className={classs}>
          <i className={classss}></i>
        </span>
        <div>
          <p>{para}</p>
          <span>{spann}</span>
        </div>
      </div>
    </Link>
  );
};
export default SettingsActivityOne;
