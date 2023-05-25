import React from "react";
import Link from "next/link";

type EndListComponentProps = {};

const EndListComponent: React.FC<EndListComponentProps> = () => {
  return (
    <div className="lists">
      <Link href="#" className="">
        <div className="d-flex align-items-center">
          <span className="me-3 icon success">
            <i className="bi bi-check"></i>
          </span>
          <div>
            <p>Account created successfully</p>
            <span>2020-11-04 12:00:23</span>
          </div>
        </div>
      </Link>
      <Link href="#" className="">
        <div className="d-flex align-items-center">
          <span className="me-3 icon fail">
            <i className="bi bi-x"></i>
          </span>
          <div>
            <p>2FA verification failed</p>
            <span>2020-11-04 12:00:23</span>
          </div>
        </div>
      </Link>
      <Link href="#" className="">
        <div className="d-flex align-items-center">
          <span className="me-3 icon success">
            <i className="bi bi-check"></i>
          </span>
          <div>
            <p>Device confirmation completed</p>
            <span>2020-11-04 12:00:23</span>
          </div>
        </div>
      </Link>
      <Link href="#" className="">
        <div className="d-flex align-items-center">
          <span className="me-3 icon pending">
            <i className="bi bi-exclamation-triangle"></i>
          </span>
          <div>
            <p>Phone verification pending</p>
            <span>2020-11-04 12:00:23</span>
          </div>
        </div>
      </Link>

      <Link href="settings-activity">
        More <i className="icofont-simple-right"></i>
      </Link>
    </div>
  );
};
export default EndListComponent;
