import { NextPage } from "next";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";

//@ts-ignore
const LandingLayout: NextPage = ({ children }) => {
  return (
    <div id="main-wrapper" className="show">
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;