import React from "react";

type IndexFiveProps = {
  classs: string;
  headi: string;
  para: string;
};

const IndexFive: React.FC<IndexFiveProps> = ({ classs, headi, para }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="trust-content">
        <span>
          <i className={classs}></i>
        </span>
        <h4>{headi}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
};
export default IndexFive;
