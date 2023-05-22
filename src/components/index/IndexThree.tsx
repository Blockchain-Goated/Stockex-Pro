import React from "react";

type IndexThreeProps = {
  classs: string;
  classss: string;
  headi: string;
  para: string;
};

const IndexThree: React.FC<IndexThreeProps> = ({
  classs,
  classss,
  headi,
  para,
}) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
      <div className="product-feature-box">
        <span className={classs}>
          <i className={classss}></i>
        </span>
        <h4>{headi}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
};
export default IndexThree;
