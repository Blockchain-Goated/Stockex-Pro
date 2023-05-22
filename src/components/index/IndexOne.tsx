import React from "react";

type IndexOneProps = {
  classs: string;
  headi: string;
};

const IndexOne: React.FC<IndexOneProps> = ({ classs, headi }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
      <div className="info-content">
        <span>
          <i className={classs}></i>
        </span>
        <h4>{headi}</h4>
      </div>
    </div>
  );
};
export default IndexOne;
