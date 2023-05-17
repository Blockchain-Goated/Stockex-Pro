import React from "react";
import Link from "next/dist/client/link";

type CareerNavComponentProps = {
  textOne?: string | undefined;
  hrefOne: string;
  dropNum?: number;
  links?: { href: string; text: string }[];
};

const CareerNavComponent: React.FC<CareerNavComponentProps> = ({
  hrefOne,
  textOne,
  dropNum,
  links,
}) => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        href={hrefOne}
        data-toggle="dropdown"
      >
        {textOne}
      </Link>
      {links && dropNum && (
        <div className="dropdown-menu">
          {links.slice(0, dropNum).map((link) => (
            <Link className="dropdown-item" href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
export default CareerNavComponent;
