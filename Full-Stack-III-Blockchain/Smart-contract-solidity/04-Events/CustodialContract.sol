
pragma solidity ^0.4.18;

contract CustodialContract {

// Private state variable
    address private owner;

    bool public _txnSuccess = false;

    event UpdateStatus (string _msg);
    event UserStatus (string _msg, address user, uint _amount);

    // constructors cannot be payable ==> exception
  function CustodialContract () {
    owner=msg.sender;
  }

  modifier ifOwner () {
    if(msg.sender != owner) {
      throw;
    }

    _; // continue
  }
  function depositFunds () payable {
    // log historical events to the blockchain..in setters only
    UserStatus("User has transferred some money", msg.sender, msg.value);
  }


  function withdrawFunds (uint amount) ifOwner {
    if(owner.send(amount)) {
        _txnSuccess = true;
          UpdateStatus("User has transferred some money");
    }
    else {
      _txnSuccess = false;
    }
  }

   function getBalance () ifOwner public view returns(uint256){
        return owner.balance;
    }
 
}

