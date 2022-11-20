
pragma solidity ^0.4.18;

contract PayableContract {

// Private state variable
    address private owner;

    bool public _txnSuccess = false;

    // constructors cannot be payable ==> exception
  function PayableContract () {
    owner=msg.sender;
  }

  modifier ifOwner () {
    if(msg.sender != owner) {
      throw;
    }

    _; // continue
  }
  function depositFunds () payable {

  }


  function withdrawFunds (uint amount) ifOwner {
    if(owner.send(amount)) {
        _txnSuccess = true;
    }
    else {
      _txnSuccess = false;
    }
  }

   function getBalance () ifOwner public view returns(uint256){
        return owner.balance;
    }
 
}

