import React from "react";

type HelpCatProps = {
  headi: string;
  classs: string;
};

const HelpCat: React.FC<HelpCatProps> = ({ headi, classs }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
      <div className="help-cat">
        <span className={classs}></span>
        <h4>{headi}</h4>
      </div>
    </div>
  );
};
export default HelpCat;
