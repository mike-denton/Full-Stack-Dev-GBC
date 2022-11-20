
pragma solidity ^0.4.18;

contract HelloWorldContract {
    string word = "Hello Word";
    address public issuer;

    // constructor
    function HelloWorldContract () {
      issuer = msg.sender; // node address
    }

    modifier isIssuer() {
      if (issuer != msg.sender) {
        throw;
      }
      else {
        _; // continue
      }
    }
    function getWord () public constant returns(string) {
      return word;
    }

    function setWord(string newWord) public isIssuer returns(string) {
     // if (issuer != msg.sender) {
     //   return "This is not the contract creator!"
     // }
      word = newWord;
      return word;
    }
}

