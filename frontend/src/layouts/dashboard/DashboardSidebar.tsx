import Link from "next/dist/client/link";
import { FC, useEffect } from "react";
import { dashboardMenuActive } from "../../utils/utils";

const DashboardSidebar: FC = () => {
  useEffect(() => {
    dashboardMenuActive();
  }, []);
  return (
    <div className="sidebar">
      <div className="brand-logo">
        <Link legacyBehavior href="/dashboard">
          <a>
            <img src="/images/logoi.png" alt="" width="30" />
          </a>
        </Link>
      </div>
      <div className="menu" id="d_menu">
        <ul>
          <li>
            <Link legacyBehavior href="/dashboard">
              <a>
                <span>
                  <i className="bi bi-house"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/trade">
              <a>
                <span>
                  <i className="bi bi-globe2"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/wallet">
              <a>
                <span>
                  <i className="bi bi-wallet2"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/settings-profile">
              <a id="settings__mainMenu">
                <span>
                  <i className="bi bi-gear"></i>
                </span>
              </a>
            </Link>
          </li>
          <li className="logout">
            <Link legacyBehavior href="/signin">
              <a>
                <span>
                  <i className="bi bi-power"></i>
                </span>
              </a>
            </Link>
          </li>
        </ul>

        <p className="copyright">
          &#169; <a href="#">Qkit</a>
        </p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
