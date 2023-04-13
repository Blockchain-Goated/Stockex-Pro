import { FC, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const BuySellForm: FC<{ name?: string; color?: string }> = ({
  name,
  color,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card">
      <ConfirmationModal show={show} close={setShow} />
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShow(true);
          }}
          className="currency_validate trade-form row g-3"
        >
          <div className="col-12">
            <label className="form-label">Send</label>
            <div className="input-group">
              <select className="form-control" name="method">
                <option value="bank">USD</option>
                <option value="master">Euro</option>
              </select>
              <input
                type="text"
                name="currency_amount"
                className="form-control"
                placeholder="0.0214 BTC"
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Receive</label>
            <div className="input-group">
              <select className="form-control" name="method">
                <option value="bank">BTC</option>
                <option value="master">ETH</option>
              </select>
              <input
                type="text"
                name="currency_amount"
                className="form-control"
                placeholder="0.0214 BTC"
              />
            </div>
          </div>

          <p className="mb-0">
            1 USD ~ 0.000088 BTC{" "}
            <a href="#">
              Expected rate <br />
              No extra fees
            </a>
          </p>

          <input
            type="submit"
            className={`btn btn-${color ? color : "primary"} btn-block`}
            value={`${name} Now`}
          />
        </form>
      </div>
    </div>
  );
};

export default BuySellForm;
