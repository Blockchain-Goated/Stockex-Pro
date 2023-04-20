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
        <Link  href="/dashboard">
          
            <img src="/images/logoi.png" alt="" width="30" />
          
        </Link>
      </div>
      <div className="menu" id="d_menu">
        <ul>
          <li>
            <Link  href="/dashboard">
              
                <span>
                  <i className="bi bi-house"></i>
                </span>
              
            </Link>
          </li>
          <li>
            <Link  href="/trade">
              
                <span>
                  <i className="bi bi-globe2"></i>
                </span>
              
            </Link>
          </li>
          <li>
            <Link  href="/wallet">
              
                <span>
                  <i className="bi bi-wallet2"></i>
                </span>
              
            </Link>
          </li>
          <li>
            <Link id="settings__mainMenu" href="/settings-profile">
  
                <span>
                  <i className="bi bi-gear"></i>
                </span>
          
            </Link>
          </li>
          <li className="logout">
            <Link  href="/signin">
            
                <span>
                  <i className="bi bi-power"></i>
                </span>
              
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
