import React from "react";
import Link from "next/link";

type IntroDropProps = {};

const IntroDrop: React.FC<IntroDropProps> = () => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle text-primary"
        href="#"
        data-toggle="dropdown"
      >
        {title}
      </Link>
      <div className="dropdown-menu">
        <Link className="dropdown-item" href={}>
          Contact us
        </Link>
        <Link className="dropdown-item text-primary" href="helpdesk">
          Help Desk
        </Link>
        <Link className="dropdown-item" href="privacy-policy">
          Privacy
        </Link>
        <Link className="dropdown-item" href="faq">
          FAQ
        </Link>
      </div>
    </li>
  );
};
export default IntroDrop;
