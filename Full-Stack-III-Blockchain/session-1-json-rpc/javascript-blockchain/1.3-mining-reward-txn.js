const SHA256 = require('crypto-js/sha256')

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
class Block {
    /*
        @index - optional, where the block sits on chain
        @timestamp - when block was created 
        @data - any data associated to block, ie. transaction
        @previousHash - contains the hash of previous block 
    */
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
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
            + JSON.stringify(this.transactions)).toString()
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
        this.difficulty = 5;
        this.pendingTransactions = [];
        this.miningRewards = 100;
    }

    createGenesisBlock() {
        return new Block("01/01/2022", "Genesis Block", "0")
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

  
    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log(`Block successfully mined! `)
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningRewards)
        ]
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for(const block of this.chain) {
            for(const trans of block.transactions){
                if(trans.fromAddress === address) {
                    balance -= trans.amount;
                }

                if(trans.toAddress === address) {
                    balance += trans.amount
                }
            }
        }

        return balance;
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
viperCoin.createTransaction(new Transaction('address1','address2', 100));
viperCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log(`\n Starting the miner...`);
viperCoin.minePendingTransactions('viper-address');

console.log(`\nBalance of viper is: ${viperCoin.getBalanceOfAddress('viper-address')}`)

console.log(`\n Starting the miner again...`);
viperCoin.minePendingTransactions('viper-address');

console.log(`\nBalance of viper is: ${viperCoin.getBalanceOfAddress('viper-address')}`)
