import React from "react";
import Link from "next/link";

type FaqMainProps = {
  title: string;
  para: string;
  link: boolean;
};

const FaqMain: React.FC<FaqMainProps> = ({ title, para, link }) => {
  return (
    <div className="terms_condition-text">
      <h3>{title}</h3>
      <p>
        {para} {link && " : " + <Link href="#">article</Link>}
      </p>
    </div>
  );
};
export default FaqMain;
