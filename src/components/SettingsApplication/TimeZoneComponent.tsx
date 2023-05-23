import React from "react";
import { TimeZoneSelectProps } from "../../types/SettingsAppTypes";

const TimeZoneSelect: React.FC<TimeZoneSelectProps> = ({ timeZones }) => {
  return (
    <div className="col-sm-6">
      <label className="form-label">Time Zone</label>
      <select className="form-select">
        {timeZones.map((timeZone, index) => (
          <option key={index}>{timeZone}</option>
        ))}
      </select>
    </div>
  );
};

export default TimeZoneSelect;
