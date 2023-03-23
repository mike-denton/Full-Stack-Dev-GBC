
var multiplyTwoNumbers = function (x, y) {
    if(!isInteger(x) || !isInteger(y)) {
        throw new Error()
    }
    return x * y;
}

var evenDoubler = function (x) {
    // if(x % 2 !== 0) {
    //     return 0;
    // }
    // else {
    //     return x * x;
    // }

    return x % 2 !== 0 ? 0 : (x > 10 ? 100 : x * x);
}

const oddDoubler = x => x % 2 !== 0 ? 0 : (x > 10 ? 100 : x * x)


var isInteger = function (param) {
    return Number.isInteger(param) && !Number.isNaN(param);
}
 
module.exports = {
    multiplyTwoNumbers: multiplyTwoNumbers,
    evenDoubler: evenDoubler
}