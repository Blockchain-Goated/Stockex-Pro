import React from "react";

type WalletComponentProps = {
  text: string;
};

const WalletComponent: React.FC<WalletComponentProps> = ({ text }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="wallet-feature-content">
        <span>
          <i className="bi bi-cash"></i>
        </span>
        <h4>{text}</h4>
      </div>
    </div>
  );
};
export default WalletComponent;
