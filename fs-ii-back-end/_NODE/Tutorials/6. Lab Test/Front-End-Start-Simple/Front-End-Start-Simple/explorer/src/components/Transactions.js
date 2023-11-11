import { Component } from "react";
import "./Transactions.css";

class Transactions extends Component {
  render() {
    return (
      <div>
        <div className="Title">Transaction History</div>
        {this.props.transactions.map((transaction) => (
          <div key={transaction["Transaction Hash"]} className="Box">
            {Object.entries(transaction).map((line) => (
              <div className="Line" key={line[0]}>
                <div className="Label">{line[0]}:</div>
                <div className="Text">{line[1]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Transactions;
