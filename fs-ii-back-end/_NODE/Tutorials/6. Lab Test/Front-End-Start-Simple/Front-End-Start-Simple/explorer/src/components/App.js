import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Transactions from "./Transactions";
import Addresses from "./Addresses";
import Wallet from "./Wallet";
import Transfer from "./Transfer";
import { Component } from "react";

function Layout() {
  return (
    <div>
      <nav>
        <div className="TabContainer">
          <Link className="Tab" to="/transactions">
            Transactions
          </Link>
          <div className="Dividing" />
          <Link className="Tab" to="/addresses">
            Addresses
          </Link>
          <div className="Dividing" />
          <Link className="Tab" to="/wallet">
            Wallet
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myAddress: "0x176f3dab24a159341c0509bb36b833e7fdd0a132",
      balance: 10000,
      transactions: [
        {
          "Transaction Hash":
            "0xb769a9b86199ad9af0b554d417c78a314e1162a59e8979e00937027b805b0b4e",
          Status: "SUCCESS",
          Timestamp:
            "Sun Mar 12 2023 1:40:08 GMT-0400 (Eastern Daylight Saving Time)",
          From: "0x176f3dab24a159341c0509bb36b833e7fdd0a132",
          TO: "0x1111111254eeb25477b68fb85ed929f73a960582",
          Value: "0 ETH",
          "Gas Used": "0.037055691020492435 ETH",
        },
        {
          "Transaction Hash":
            "0x234872e6df4ae870eeedd8467a7b65caf2f5f00b9bb709f7ec35000ec2127ad0",
          Status: "SUCCESS",
          Timestamp:
            "Sun Mar 12 2023 10:40:08 GMT-0400 (Eastern Daylight Saving Time)",
          From: "0x176f3dab24a159341c0509bb36b833e7fdd0a132",
          TO: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
          Value: "10 ETH",
          "Gas Used": "21000",
        },
      ],
      addresses: [
        "0x1111111254EEB25477B68fb85Ed929f73A960582",
        "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        "0xA910f92ACdAf488fa6eF02174fb86208Ad7722ba",
        "0x6782472a11987e6f4A8aFB10dEF25B498Cb622db",
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "0xDAC55181425c95D2D436C74768cC13937BbfA665",
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0x1eC4dE886d40d487366Cde7664767Db1DF6a02e7",
        "0x3DdfA8eC3052539b6C9549F12cEA2C295cfF5296",
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "0xA79828DF1850E8a3A3064576f380D90aECDD3359",
        "0x7122db0Ebe4EB9B434a9F2fFE6760BC03BFbD0E0",
        "0x6c6Bc977E13Df9b0de53b251522280BB72383700",
      ],
    };
    this.addTransaction = this.addTransaction.bind(this);
  }

  addTransaction(transaction, amount) {
    // callback to change state
    this.setState({
      transactions: [transaction, ...this.state.transactions],
      balance: this.state.balance - amount,
    });
  }

  render() {
    return (
      <div className="Container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="transactions"
              element={<Transactions transactions={this.state.transactions} />}
            />
            <Route
              path="addresses"
              element={<Addresses addresses={this.state.addresses} />}
            />
            <Route
              path="wallet"
              element={
                <Wallet
                  myAddress={this.state.myAddress}
                  balance={this.state.balance}
                />
              }
            />
            <Route
              path="transfer/:address"
              element={
                <Transfer
                  myAddress={this.state.myAddress}
                  balance={this.state.balance}
                  handleTransaction={this.addTransaction}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
