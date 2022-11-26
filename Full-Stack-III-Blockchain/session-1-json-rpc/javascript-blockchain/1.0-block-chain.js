
const blockChain = [];

var initialize = function () {
    var genenisBlock = createBlock(0, null)
    addBlock(genenisBlock)
}

var createBlock = function(amount, previous) {
    return {
        hash: calculateHash(),
        previousHash: previous,
        amount: amount
    }
}

var addBlock = function(block) {
    blockChain.push(block)
}

var getTheLastBlock = function () {
    var lastBlock = blockChain[blockChain.length - 1];
    return lastBlock;
}

var calculateHash = function() {
    return Math.floor(Math.random() * 1000);
}

var getBlockChain = function () {
    console.log(blockChain)
}


initialize()


var current = getTheLastBlock()
var block1 = createBlock(100, current.hash)
addBlock(block1)

var current = getTheLastBlock()
var block2 = createBlock(200, current.hash)
addBlock(block2)

getBlockChain();


