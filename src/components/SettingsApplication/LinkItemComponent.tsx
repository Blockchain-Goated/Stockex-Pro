import React from "react";
import Link from "next/link";
import { LinkItem } from "../../types/SettingsAppTypes";

const LinkItemComponent: React.FC<LinkItem> = ({ icon, text, timestamp }) => (
  <Link href="#">
    <div className="d-flex align-items-center">
      <span className={`me-3 icon ${icon}`}>
        <i className={`bi bi-${icon}`}></i>
      </span>
      <div>
        <p>{text}</p>
        <span>{timestamp}</span>
      </div>
    </div>
  </Link>
);

export default LinkItemComponent;
