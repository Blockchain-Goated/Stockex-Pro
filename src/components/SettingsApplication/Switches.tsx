import React from "react";
import { Switch } from "../../types/SettingsAppTypes";

interface SwitchesProps {
  switches: Switch[];
}

const Switches: React.FC<SwitchesProps> = ({ switches }) => {
  return (
    <>
      {switches.map((switchItem) => (
        <div className="form-check form-switch mb-3" key={switchItem.id}>
          <input
            className="form-check-input"
            type="checkbox"
            id={switchItem.id}
            checked={switchItem.checked}
          />
          <label className="form-check-label" htmlFor={switchItem.id}>
            {switchItem.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default Switches;
