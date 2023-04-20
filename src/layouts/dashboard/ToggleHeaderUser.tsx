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
        <Link className="dropdown-item" href="/profile">

            <i className="bi bi-person"></i>Profile
   
        </Link>
        <Link className="dropdown-item" href="/wallet">
     
            <i className="bi bi-wallet"></i>Wallet
         
        </Link>
        <Link className="dropdown-item" href="/settings-profile">
      
            <i className="bi bi-gear"></i> Setting
       
        </Link>
        <Link className="dropdown-item" href="/settings-activity">
        
            <i className="bi bi-clock-history"></i> Activity
        
        </Link>
        <Link className="dropdown-item" href="/lock">
     
            <i className="bi bi-lock"></i>Lock
       
        </Link>
        <Link className="dropdown-item logout" href="/signin">
         
            <i className="bi bi-power"></i> Logout
         
        </Link>
      </div>
    </div>
  );
};

export default ToggleHeaderUser;
