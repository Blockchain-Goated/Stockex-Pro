import React from "react";
import Link from "next/link";

type SettingsActivityTr2Props = {
  tds: { text: string }[];
  link?: string;
  linkText: string;
  tdNum: number;
};

const SettingsActivityTr2: React.FC<SettingsActivityTr2Props> = ({
  link,
  tds,
  tdNum,
  linkText,
}) => {
  return (
    <tr>
      {tds && tdNum && (
        <div className="dropdown-menu">
          {tds.slice(0, tdNum).map((td) => (
            <td>{td.text}</td>
          ))}
        </div>
      )}
      <td>
        <Link href={link ? link : "#"}>{linkText}</Link>
      </td>
    </tr>
  );
};
export default SettingsActivityTr2;
