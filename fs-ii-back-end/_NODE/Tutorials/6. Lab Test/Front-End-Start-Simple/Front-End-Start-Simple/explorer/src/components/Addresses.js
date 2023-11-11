import { Component } from "react";
import "./Addresses.css";
import { Link } from "react-router-dom";

class Addresses extends Component {
  render() {
    return (
      <div>
        <div className="Title">Blockchain Node Addresses</div>
        <nav>
          <div className="AddressContainer">
            {this.props.addresses.map((address) => (
              <Link
                className="AddressLink"
                key={address}
                to={`/transfer/${address}`}
              >
                {address}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    );
  }
}

export default Addresses;
