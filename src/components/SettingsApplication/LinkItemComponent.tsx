import React from "react";
import Link from "next/link";
import { LinkItem } from "../../types/SettingsAppTypes";

interface LinkItemProps {
  data: LinkItem;
}

const LinkItemComponent: React.FC<LinkItemProps> = ({ data }) => {
  return (
    <Link href={data.href} className={data.className}>
      <div className="d-flex align-items-center">
        <span className="me-3 icon success">
          <i className={data.icon}></i>
        </span>
        <div>
          <p>{data.title}</p>
          <span>{data.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default LinkItemComponent;
