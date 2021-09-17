
const Animal = function(name) {
    this.name = name;
    this.identify = function() {
        console.log("I'm " + this.name);
    };
}

var donald = new Animal('Donald');
donald.identify();

