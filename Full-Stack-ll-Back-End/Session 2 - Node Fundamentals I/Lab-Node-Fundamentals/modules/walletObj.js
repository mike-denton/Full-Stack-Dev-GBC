
class Wallet {
    constructor() {
    this.balance = 0;
    }

    getBalance()  {
        console.log(`Balance is ${this.balance}`)
        return this.balance
    }
    
    depositAmount (amount) {
        console.log(`Amount: ${amount} deposited.`)
    
        this.balance = this.balance + parseInt(amount);
    }
}

module.exports = Wallet