import { NextPage } from "next";
import BuySellForm from "../src/components/BuySellForm";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Trade: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }
  return (
    <DashboardLayout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Buy" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Sell" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Transfer" color="success" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Convert" color="success" />
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Buy Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Sell Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transfer Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Convert Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trade;
