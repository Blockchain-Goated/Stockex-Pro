import React from "react";

type ProfileTwoProps = {
  headi: string;
  num: string;
};

const ProfileTwo: React.FC<ProfileTwoProps> = ({ headi, num }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="user-info">
        <span>{headi}</span>
        <h4>{num}</h4>
      </div>
    </div>
  );
};
export default ProfileTwo;
