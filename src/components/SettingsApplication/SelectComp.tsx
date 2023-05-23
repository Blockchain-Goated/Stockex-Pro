import React from "react";
import { SelectItem } from "../../types/SettingsAppTypes";

const SelectItem: React.FC<SelectItem> = ({ label, options }) => (
  <div className="col-sm-6">
    <label className="form-label">{label}</label>
    <select className="form-select">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectItem;
