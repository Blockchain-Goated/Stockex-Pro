import React from "react";
import Link from "next/link";

type ProfileOneProps = {
  classs: string;
  classss: string;
  para: string;
  date: string;
};

const ProfileOne: React.FC<ProfileOneProps> = ({
  classs,
  classss,
  para,
  date,
}) => {
  return (
    <Link href="#">
      <div className="d-flex align-items-center">
        <span className={classs}>
          <i className={classss}></i>
        </span>
        <div>
          <p>{para}</p>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};
export default ProfileOne;
