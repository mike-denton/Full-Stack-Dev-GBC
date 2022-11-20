
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
    }

    calculateHash() {
        return Math.floor(Math.random() * 1000);
    }
}

class BlockChain {
    constructor() {
        // initialize
        this.chain = [this.createGenenisBlock()]
    }

    createGenenisBlock () {
        return new Block(0, "01/01/2022", "Genesis Block", "0")
    }

    addBlock(newBlock) {
        // TODO: hashing 
        newBlock.hash = newBlock.calculateHash();
        newBlock.previousHash = this.getLatestBlock().hash;
        this.chain.push(newBlock)
    }

    getLatestBlock() {
        return this.chain[this.chain.length-1]
    }

    isChainValid() {

    }
}


var chain = new BlockChain();
chain.addBlock(new Block(1, "10/07/2022", {amount: 4}))
chain.addBlock(new Block(2, "11/05/2022", {amount: 50}))

console.log(chain)


for(;;) {
    console.log('infinite....')
}