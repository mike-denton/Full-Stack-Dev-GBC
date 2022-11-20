
const SHA256 = require('crypto-js/sha256')

class Block {
    /*
        @index - optional, where the block sits on chain
        @timestamp - when block was created 
        @data - any data associated to block, ie. transaction
        @previousHash - contains the hash of previous block 
    */
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    
    // calculates hash id of our block
    calculateHash() {
        return SHA256(this.index 
            + this.previousHash 
            + this.timestamp 
            + JSON.stringify(this.data)).toString()
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2022", "Genesis Block", "0")
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        // link new block to previous block
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        // validate the integrity of our block chain
        // skip the genesis block, when validating
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // check if blocks are properly linked together

            // re-calculate hash and check if valid still..
            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // check if block link is still valid
            if(currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
            return true;
        }
    }
}


let viperCoin = new BlockChain();
viperCoin.addBlock(new Block(1, "10/07/2022", { amount: 4 }));
viperCoin.addBlock(new Block(2, "12/07/2022", { amount: 10 }));

console.log(JSON.stringify(viperCoin, null, 4))

console.log(`Is blockchain valid? ${viperCoin.isChainValid()}`)

viperCoin.chain[1].data = { amount: 100 };
// this tampering will not work, because previous block retains original has
//viperCoin.chain[1].hash = viperCoin.chain[1].calculateHash()
console.log(`Is blockchain valid? ${viperCoin.isChainValid()}`)
