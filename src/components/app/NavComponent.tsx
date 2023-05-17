import React from "react";
import Link from "next/dist/client/link";

type NavComponentProps = {
  dropTitle: string;
  dropOne?: string | undefined;
  dropTwo?: string | undefined;
  dropThree?: string | undefined;
  dropFour?: string | undefined;
  hrefTitle?: string | undefined;
  hrefOne?: string | undefined;
  hrefTwo?: string | undefined;
  hrefThree?: string | undefined;
  hrefFour?: string | undefined;
};

const NavComponent: React.FC<NavComponentProps> = ({
  dropTitle,
  dropOne,
  dropTwo,
  dropThree,
  dropFour,
  hrefTitle,
  hrefOne,
  hrefTwo,
  hrefThree,
  hrefFour,
}) => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        href={hrefTitle != undefined ? hrefTitle : "#"}
        data-toggle="dropdown"
      >
        {dropTitle}
      </Link>

      <div className="dropdown-menu">
        {dropOne != undefined && (
          <Link
            className="dropdown-item"
            href={hrefOne != undefined ? hrefOne : "#"}
          >
            {dropOne}
          </Link>
        )}
        {dropTwo != undefined && (
          <Link
            className="dropdown-item"
            href={hrefTwo != undefined ? hrefTwo : "#"}
          >
            {dropTwo}
          </Link>
        )}
        {dropThree != undefined && (
          <Link
            className="dropdown-item"
            href={hrefThree != undefined ? hrefThree : "#"}
          >
            {dropThree}
          </Link>
        )}
        {dropFour != undefined && (
          <Link
            className="dropdown-item"
            href={hrefFour != undefined ? hrefFour : "#"}
          >
            {dropFour}
          </Link>
        )}
      </div>
    </li>
  );
};
export default NavComponent;
