import React from "react";

type MethodOneProps = {};

const MethodOne: React.FC<MethodOneProps> = () => {
  return (
    <div className="col-xl-12">
      <label className="form-label">Routing number </label>
      <input type="text" className="form-control" placeholder="25487" />
    </div>
  );
};
export default MethodOne;
