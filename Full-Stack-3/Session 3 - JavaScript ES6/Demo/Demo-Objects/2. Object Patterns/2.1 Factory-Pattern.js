
// factory pattern
function createAnimal(name) {
    var o = new Object();
    o.name = name;
    o.identify = function() {
        console.log("I'm " + o.name);
    }
    return o;
}

var tom = createAnimal('Tom');
var jerry = createAnimal('Jerry');


tom.identify(); // I'm Tom
jerry.identify(); // I'm Jerry


