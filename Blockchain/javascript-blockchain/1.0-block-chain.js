
var blockChain = [];

var initialize = function () {
    var genenisBlock = createBlock(0, null)
    addBlock(genenisBlock)
}

initialize()




var createBlock = function(amount, previous) {
    return {
        hash: calculateHash(),
        previousHash: previous,
        amount: amount
    }

    // Dot Notation
   var car = new Object();
   car.speed = 100;
   car.model = "GM"
   car.lock = function () {
       console.log("locked!")
   }
   
   // Object Literal
   var car = {
       speed: 100,
       brake: false,
       apptNumber: true,
       lock: () => console.log('brake')
   }

  function buildCar(speed, brake, number) {
    var carObj = {
        speed,
        brake,
        number,
        lock: () => console.log('brake')
    }

    return carObj;
  }

  var car1 = buildCar(100, true, 200)
  
   // Array Notation (Bracket)
   // setters - assingment
   car['brake'] = true;
   car.brake = true
   car['lock'] = function() {
       console.log()
   }
   // gettter - get the underlying value by the key
   console.log(car['brake'])
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


