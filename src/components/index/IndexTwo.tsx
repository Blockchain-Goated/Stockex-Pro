import React from "react";

type IndexTwoProps = {
  classs: string;
  perc: string;
  para: string;
};

const IndexTwo: React.FC<IndexTwoProps> = ({ classs, perc, para }) => {
  return (
    <div className="col-6">
      <div className="product-feature-text">
        <h4>
          <span>
            <i className={classs}></i>
          </span>{" "}
          {perc}
        </h4>
        <p>{para}</p>
      </div>
    </div>
  );
};
export default IndexTwo;
