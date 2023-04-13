import { FC, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout: FC = ({ children }) => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("dashboard");
  }, []);
  return (
    <div id="main-wrapper" className="show">
      <DashboardHeader />
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
