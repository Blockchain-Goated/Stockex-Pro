import React from "react";

type SetttingsActivityTrProps = {
  td1: string;
  td2: string;
  td3: string;
  td4: string;
};

const SettingsActivityTr: React.FC<SetttingsActivityTrProps> = ({
  td1,
  td2,
  td3,
  td4,
}) => {
  return (
    <tr>
      <td>{td1}</td>
      <td>{td2}</td>
      <td>{td3}</td>
      <td>{td4}</td>
      <td>
        <span>
          <i className="icofont-check-alt"></i>
        </span>
        <span>
          <i className="icofont-close-line"></i>
        </span>
      </td>
    </tr>
  );
};
export default SettingsActivityTr;
