
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
        // nonce value, random number that has nothing to do with block,
        // but can be changed to something random
        this.nonce = 0;
    }
    
    // calculates hash id of our block
    calculateHash() {
        return SHA256(this.index 
            + this.previousHash 
            + this.timestamp 
            + this.nonce  // update hash with nonce
            + JSON.stringify(this.data)).toString()
    }

    // we don't want 1000's of block flooding/spaming our chain, we
    // need a mechanism to mine new blocks at a steady rate
    // ie Bitcoin ==> new block every 10 mins
    mineBlock(difficulty) {
        // create a string of 000s exactly the length of difficulty
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            // this would be an endless loop, without changing block nonce property
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        // mining difficulty 2,4,6,..10 will slow down mining
        this.difficulty = 6;
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
        //newBlock.hash = newBlock.calculateHash();
        // mine block now, work to caculate hash..
        newBlock.mineBlock(this.difficulty)
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

console.log("Mining block 1...");
viperCoin.addBlock(new Block(1, "10/07/2022", { amount: 4 }));

console.log("Mining block 2...");
viperCoin.addBlock(new Block(2, "12/07/2022", { amount: 10 }));

