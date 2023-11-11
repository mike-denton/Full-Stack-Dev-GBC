import { Component } from "react";
import "./Transfer.css";
import Reciept from "./Reciept";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
const getRanHex = (size) => {
  let result = [];
  let hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  for (let n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return "0x" + result.join("");
};

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.balance = props.balance;
    this.state = {
      amount: 0,
      myAddress: props.myAddress,
      toAddress: props.router.params.address,
      transaction: {},
      showReciept: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let amount = parseInt(event.target.value);
    if (isNaN(amount)) {
        amount = 0
    }
    this.setState({ amount });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.amount > this.balance) {
      alert(
        "You don't have enough Ether. Please check the balance and amount."
      );
      return;
    }
    const amount = this.state.amount;
    const transaction = {
      "Transaction Hash": getRanHex(64),
      Status: "SUCCESS",
      Timestamp: new Date().toDateString(),
      From: this.state.myAddress,
      TO: this.state.toAddress,
      Value: `${amount} ETH`,
      "Gas Used": "21000",
    };
    this.props.handleTransaction(transaction, amount);
    this.setState({
      transaction: {
        ...transaction,
        "Block Hash": getRanHex(64),
        BlockNumber: Date.now(),
      },
      amount: 0,
      showReciept: true,
    });
  }

  render() {
    return (
      <form className="Container" onSubmit={this.handleSubmit}>
        <div className="Title">Transfer</div>
        <div className="Box Padding">
          <div className="Line">
            <div className="Label">From:</div>
            <div className="Text">{this.props.myAddress}</div>
          </div>
          <div className="Line">
            <div className="Label">To:</div>
            <div className="Text">{this.state.toAddress}</div>
          </div>
          <div className="Line">
            <div className="Label">Amount:</div>
            <input
              type="text"
              value={this.state.amount}
              onChange={this.handleChange}
              className="Amount"
            />
          </div>
          <div className="Line">
            <input type="submit" value="Submit" className="Button" />
          </div>
        </div>

        {this.state.showReciept && (
          <Reciept transaction={this.state.transaction} />
        )}
      </form>
    );
  }
}

const TransferWithRoute = withRouter(Transfer);
export default TransferWithRoute;
