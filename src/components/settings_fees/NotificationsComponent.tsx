import React from "react";
import { Notification } from "../../types/SetttingsFeesTypes";
import Link from "next/link";

interface NotificationsProps {
  notifications: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <>
      {notifications.map((notification, index) => (
        <Link href="#" className="" key={index}>
          <div className="d-flex align-items-center">
            <span className={`me-3 icon ${notification.icon}`}>
              <i className={`bi bi-${notification.icon}`}></i>
            </span>
            <div>
              <p>{notification.title}</p>
              <span>{notification.timestamp}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Notifications;
