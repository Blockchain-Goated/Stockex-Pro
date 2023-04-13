import Link from "next/dist/client/link";
import { FC, useState } from "react";
import UseClickOutside from "../../components/UseClickOutside";

const ToggleHeaderUser: FC = () => {
  const [toggleuser, setToggleuser] = useState(false);
  let domNode = UseClickOutside(() => {
    setToggleuser(false);
  });
  return (
    <div className="profile_log dropdown" ref={domNode}>
      <div className="user" onClick={() => setToggleuser(!toggleuser)}>
        <span className="thumb">
          <img src="/images/profile/2.png" alt="" />
        </span>
        <span className="arrow">
          <i className="icofont-angle-down"></i>
        </span>
      </div>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          toggleuser ? "show" : ""
        }`}
      >
        <div className="user-email">
          <div className="user">
            <span className="thumb">
              <img src="/images/profile/2.png" alt="" />
            </span>
            <div className="user-info">
              <h5>Jannatul Maowa</h5>
              <span>Tendex.inc@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="user-balance">
          <div className="available">
            <p>Available</p>
            <span>0.00 BTC</span>
          </div>
          <div className="total">
            <p>Total</p>
            <span>0.00 USD</span>
          </div>
        </div>
        <Link legacyBehavior href="/profile">
          <a className="dropdown-item">
            <i className="bi bi-person"></i>Profile
          </a>
        </Link>
        <Link legacyBehavior href="/wallet">
          <a className="dropdown-item">
            <i className="bi bi-wallet"></i>Wallet
          </a>
        </Link>
        <Link legacyBehavior href="/settings-profile">
          <a className="dropdown-item">
            <i className="bi bi-gear"></i> Setting
          </a>
        </Link>
        <Link legacyBehavior href="/settings-activity">
          <a className="dropdown-item">
            <i className="bi bi-clock-history"></i> Activity
          </a>
        </Link>
        <Link legacyBehavior href="/lock">
          <a className="dropdown-item">
            <i className="bi bi-lock"></i>Lock
          </a>
        </Link>
        <Link legacyBehavior href="/signin">
          <a className="dropdown-item logout">
            <i className="bi bi-power"></i> Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ToggleHeaderUser;
