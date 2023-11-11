import { Component } from "react";

class Wallet extends Component {
  render() {
    return (
      <div>
        <div className="Title">Wallet</div>
        <div className="Box Padding">
          <div className="Line">
            <div className="Label">Address:</div>
            <div className="Text">{this.props.myAddress}</div>
          </div>
          <div className="Line">
            <div className="Label">Balance:</div>
            <div className="Text">{this.props.balance} ETH</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
