import React from "react";
import Link from "next/dist/client/link";
import Image from "next/legacy/image";
import { StaticImageData } from "next/image";

type SideBarComponentProps = {
  logo: string | StaticImageData;
};

const SideBarComponent: React.FC<SideBarComponentProps> = ({ logo }) => {
  return (
    <div className="sidebar">
      <div className="brand-logo">
        <Link href="/">
          <Image src={logo} alt="" width={30} />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link
              href="dashboard"
              data-toggle="tooltip"
              data-placement="right"
              title="Home"
            >
              <span>
                <i className="bi bi-house"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="trade"
              data-toggle="tooltip"
              data-placement="right"
              title="Trade"
            >
              <span>
                <i className="bi bi-globe2"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="wallet"
              data-toggle="tooltip"
              data-placement="right"
              title="Wallet"
            >
              <span>
                <i className="bi bi-wallet2"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="settings-profile"
              data-toggle="tooltip"
              data-placement="right"
              title="Settings"
              id="settings"
            >
              <span>
                <i className="bi bi-gear"></i>
              </span>
            </Link>
          </li>
          <li className="logout">
            <Link
              href="signin"
              data-toggle="tooltip"
              data-placement="right"
              title="Signout"
            >
              <span>
                <i className="bi bi-power"></i>
              </span>
            </Link>
          </li>
        </ul>

        <p className="copyright">
          &#169; <Link href="#">Qkit</Link>
        </p>
      </div>
    </div>
  );
};
export default SideBarComponent;
