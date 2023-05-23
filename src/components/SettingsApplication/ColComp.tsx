import React from "react";
import { ColCompProps } from "../../types/SettingsAppTypes";

const ColComp: React.FC<ColCompProps> = ({ label, text1, text2, text3 }) => {
  return (
    <div className="col-sm-6">
      <label className="form-label">{label}</label>
      <select className="form-select">
        <option value="">{text1}</option>
        <option value="">{text2}</option>
        <option value="">{text3}</option>
      </select>
    </div>
  );
};
export default ColComp;
